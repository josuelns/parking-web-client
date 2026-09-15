import { action } from 'typesafe-actions';
import type { ApiErrorPayload, PlatePayload } from '../../../types/parking';
import * as types from './types';

export const paymentVehicleRequest = (payload: PlatePayload) =>
  action(types.PAYMENT_VEHICLE_REQUEST, payload);

export const paymentVehicleSuccess = (payload: { plate: string; message: string }) =>
  action(types.PAYMENT_VEHICLE_SUCCESS, payload);

export const paymentVehicleFailure = (payload: ApiErrorPayload) =>
  action(types.PAYMENT_VEHICLE_FAILURE, payload);
