import { call, put, takeLatest } from 'redux-saga/effects';
import type { AxiosResponse } from 'axios';
import type { ActionType } from 'typesafe-actions';
import type { ParkingRecord } from '../../../types/parking';
import { normalizePlate } from '../../../types/parking';
import { getApiErrorMessage } from '../../../services/api-error';
import { parkingApi } from '../../../services/parking-api';
import * as actions from './actions';
import * as types from './types';

export function* checkoutVehicle({
  payload,
}: ActionType<typeof actions.exitVehicleRequest>) {
  try {
    const plate = normalizePlate(payload.plate);
    const response: AxiosResponse<ParkingRecord> = yield call(parkingApi.checkout, plate);

    yield put(
      actions.exitVehicleSuccess({
        plate: response.data.plate,
        message: `Saída confirmada para ${response.data.plate}.`,
      }),
    );
  } catch (error) {
    const apiError = getApiErrorMessage(error, 'Não foi possível registrar a saída.');

    yield put(actions.exitVehicleFailure(apiError));
  }
}

export default function* exitVehicleSaga() {
  yield takeLatest(types.EXIT_VEHICLE_REQUEST, checkoutVehicle);
}
