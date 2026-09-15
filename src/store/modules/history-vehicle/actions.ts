import { action } from 'typesafe-actions';
import type { ApiErrorPayload, ParkingRecord, PlatePayload } from '../../../types/parking';
import * as types from './types';

export const historyVehicleRequest = (payload: PlatePayload) =>
  action(types.HISTORY_VEHICLE_REQUEST, payload);

export const historyVehicleSuccess = (payload: {
  plate: string;
  records: ParkingRecord[];
}) => action(types.HISTORY_VEHICLE_SUCCESS, payload);

export const historyVehicleFailure = (payload: ApiErrorPayload) =>
  action(types.HISTORY_VEHICLE_FAILURE, payload);

export const historyVehicleSelect = (payload: ParkingRecord) =>
  action(types.HISTORY_VEHICLE_SELECT, payload);
