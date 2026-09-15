import { call, put, takeLatest } from 'redux-saga/effects';
import type { AxiosResponse } from 'axios';
import type { ActionType } from 'typesafe-actions';
import type { ParkingRecord } from '../../../types/parking';
import { getApiErrorMessage } from '../../../services/api-error';
import { parkingApi } from '../../../services/parking-api';
import * as actions from './actions';
import * as types from './types';

export function* registerNewVehicle({
  payload,
}: ActionType<typeof actions.entraceNewVehicleRequest>) {
  try {
    const response: AxiosResponse<ParkingRecord> = yield call(
      parkingApi.registerEntry,
      payload,
    );

    yield put(
      actions.entraceNewVehicleSuccess({
        plate: response.data.plate,
        message: `Entrada confirmada para ${response.data.plate}.`,
      }),
    );
  } catch (error) {
    const apiError = getApiErrorMessage(error, 'Não foi possível registrar a entrada.');

    yield put(actions.entraceNewVehicleFailure(apiError));
  }
}

export default function* entraceNewVehicleSaga() {
  yield takeLatest(types.REGISTER_NEW_VEHICLE_REQUEST, registerNewVehicle);
}
