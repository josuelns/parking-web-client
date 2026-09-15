import type { AsyncSliceState } from '../../../types/parking';

export interface ExitVehicleState extends AsyncSliceState {
  lastPlate: string | null;
}

export const EXIT_VEHICLE_REQUEST = '@parking/EXIT_VEHICLE_REQUEST';
export const EXIT_VEHICLE_SUCCESS = '@parking/EXIT_VEHICLE_SUCCESS';
export const EXIT_VEHICLE_FAILURE = '@parking/EXIT_VEHICLE_FAILURE';
