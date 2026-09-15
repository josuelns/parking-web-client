import { action } from 'typesafe-actions';
import type { ApiErrorPayload, PlatePayload } from '../../../types/parking';
import * as types from './types';

export const exitVehicleRequest = (payload: PlatePayload) =>
  action(types.EXIT_VEHICLE_REQUEST, payload);

export const exitVehicleSuccess = (payload: { plate: string; message: string }) =>
  action(types.EXIT_VEHICLE_SUCCESS, payload);

export const exitVehicleFailure = (payload: ApiErrorPayload) =>
  action(types.EXIT_VEHICLE_FAILURE, payload);
