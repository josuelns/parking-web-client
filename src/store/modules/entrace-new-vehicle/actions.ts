import { action } from 'typesafe-actions';
import type { ApiErrorPayload, PlatePayload } from '../../../types/parking';
import * as types from './types';

export const entraceNewVehicleRequest = (payload: PlatePayload) =>
  action(types.REGISTER_NEW_VEHICLE_REQUEST, payload);

export const entraceNewVehicleSuccess = (payload: { plate: string; message: string }) =>
  action(types.REGISTER_NEW_VEHICLE_SUCCESS, payload);

export const entraceNewVehicleFailure = (payload: ApiErrorPayload) =>
  action(types.REGISTER_NEW_VEHICLE_FAILURE, payload);
