import type { AsyncSliceState } from '../../../types/parking';

export interface PaymentVehicleState extends AsyncSliceState {
  lastPlate: string | null;
}

export const PAYMENT_VEHICLE_REQUEST = '@parking/PAYMENT_VEHICLE_REQUEST';
export const PAYMENT_VEHICLE_SUCCESS = '@parking/PAYMENT_VEHICLE_SUCCESS';
export const PAYMENT_VEHICLE_FAILURE = '@parking/PAYMENT_VEHICLE_FAILURE';
