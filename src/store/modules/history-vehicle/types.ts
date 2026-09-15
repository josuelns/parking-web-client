import type { AsyncSliceState, ParkingRecord } from '../../../types/parking';

export interface HistoryVehicleState extends AsyncSliceState {
  plate: string | null;
  records: ParkingRecord[];
  selectedRecord: ParkingRecord | null;
}

export const HISTORY_VEHICLE_REQUEST = '@parking/HISTORY_VEHICLE_REQUEST';
export const HISTORY_VEHICLE_SUCCESS = '@parking/HISTORY_VEHICLE_SUCCESS';
export const HISTORY_VEHICLE_FAILURE = '@parking/HISTORY_VEHICLE_FAILURE';
export const HISTORY_VEHICLE_SELECT = '@parking/HISTORY_VEHICLE_SELECT';
