import type { AsyncSliceState } from '../../../types/parking';

export interface EntranceVehicleState extends AsyncSliceState {
  lastPlate: string | null;
}

export const REGISTER_NEW_VEHICLE_REQUEST = '@parking/REGISTER_NEW_VEHICLE_REQUEST';
export const REGISTER_NEW_VEHICLE_SUCCESS = '@parking/REGISTER_NEW_VEHICLE_SUCCESS';
export const REGISTER_NEW_VEHICLE_FAILURE = '@parking/REGISTER_NEW_VEHICLE_FAILURE';
