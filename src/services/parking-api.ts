import type { ParkingRecord, PlatePayload } from '../types/parking';
import api from './axios';

export const parkingApi = {
  registerEntry: (payload: PlatePayload) => api.post<ParkingRecord>('/parking', payload),
  checkout: (plate: string) => api.post<ParkingRecord>(`/parking/${plate}/out`),
  pay: (plate: string) => api.post<ParkingRecord>(`/parking/${plate}/pay`),
  getHistory: (plate: string) => api.get<ParkingRecord[]>(`/parking/${plate}`),
};
