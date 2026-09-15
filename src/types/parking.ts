export interface ParkingRecord {
  id: string;
  plate: string;
  status: 'parked' | 'exited';
  elapsedTime: string;
  paid: boolean;
  paymentLabel: string;
}

export interface PlatePayload {
  plate: string;
}

export interface ApiErrorPayload {
  message: string;
  statusCode?: number;
}

export interface AsyncSliceState {
  isLoading: boolean;
  error: string | null;
  message: string | null;
}

export const normalizePlate = (plate: string): string =>
  plate.trim().toUpperCase();

export const isValidPlate = (plate: string): boolean =>
  /^[A-Z]{3}-\d{4}$/.test(normalizePlate(plate));

export const formatElapsedTime = (startedAt: number): string => {
  const totalMinutes = Math.max(1, Math.floor((Date.now() - startedAt) / 60000));
  const hours = Math.floor(totalMinutes / 60);
  const minutes = totalMinutes % 60;

  if (hours === 0) {
    return `${minutes} min`;
  }

  return `${hours}h${minutes.toString().padStart(2, '0')} min`;
};
