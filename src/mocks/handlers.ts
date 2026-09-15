import { http, HttpResponse } from 'msw';
import {
  formatElapsedTime,
  normalizePlate,
  type ParkingRecord,
} from '../types/parking';

const API_URL = import.meta.env.VITE_API_URL ?? 'https://parking-lot-to-pfz.herokuapp.com';

const sessions = new Map<string, ParkingRecord & { startedAt: number }>();

const toRecord = (session: ParkingRecord & { startedAt: number }): ParkingRecord => ({
  id: session.id,
  plate: session.plate,
  status: session.status,
  elapsedTime: formatElapsedTime(session.startedAt),
  paid: session.paid,
  paymentLabel: session.paymentLabel,
});

const jsonError = (message: string, status: number) =>
  HttpResponse.json({ message, statusCode: status }, { status });

export const parkingHandlers = [
  http.post(`${API_URL}/parking`, async ({ request }) => {
    const body = (await request.json()) as { plate?: string };
    const plate = normalizePlate(body.plate ?? '');

    if (!/^[A-Z]{3}-\d{4}$/.test(plate)) {
      return jsonError('Placa inválida. Use o formato AAA-0000.', 400);
    }

    const activeSession = [...sessions.values()].find(
      (session) => session.plate === plate && session.status === 'parked',
    );

    if (activeSession) {
      return jsonError('Veículo já está estacionado.', 409);
    }

    const id = crypto.randomUUID();
    const session = {
      id,
      plate,
      status: 'parked' as const,
      elapsedTime: '1 min',
      paid: false,
      paymentLabel: '-',
      startedAt: Date.now(),
    };

    sessions.set(id, session);

    return HttpResponse.json(toRecord(session), { status: 201 });
  }),

  http.post(`${API_URL}/parking/:plate/out`, ({ params }) => {
    const plate = normalizePlate(String(params.plate));
    const session = [...sessions.values()].find(
      (item) => item.plate === plate && item.status === 'parked',
    );

    if (!session) {
      return jsonError('Nenhum veículo estacionado encontrado para esta placa.', 404);
    }

    session.status = 'exited';
    session.paymentLabel = session.paid ? 'Pago' : 'Pendente';

    return HttpResponse.json(toRecord(session));
  }),

  http.post(`${API_URL}/parking/:plate/pay`, ({ params }) => {
    const plate = normalizePlate(String(params.plate));
    const session = [...sessions.values()].find(
      (item) => item.plate === plate && item.status === 'parked',
    );

    if (!session) {
      return jsonError('Nenhum veículo estacionado encontrado para esta placa.', 404);
    }

    session.paid = true;
    session.paymentLabel = 'Pago';

    return HttpResponse.json(toRecord(session));
  }),

  http.get(`${API_URL}/parking/:plate`, ({ params }) => {
    const plate = normalizePlate(String(params.plate));
    const records = [...sessions.values()]
      .filter((session) => session.plate === plate)
      .map(toRecord)
      .sort((left, right) => Number(right.id > left.id));

    return HttpResponse.json(records);
  }),
];
