import { call, put, takeLatest } from 'redux-saga/effects';
import type { AxiosResponse } from 'axios';
import type { ActionType } from 'typesafe-actions';
import type { ParkingRecord } from '../../../types/parking';
import { normalizePlate } from '../../../types/parking';
import { getApiErrorMessage } from '../../../services/api-error';
import { parkingApi } from '../../../services/parking-api';
import * as actions from './actions';
import * as types from './types';

export function* historyVehicle({
  payload,
}: ActionType<typeof actions.historyVehicleRequest>) {
  try {
    const plate = normalizePlate(payload.plate);
    const response: AxiosResponse<ParkingRecord[]> = yield call(parkingApi.getHistory, plate);

    yield put(
      actions.historyVehicleSuccess({
        plate,
        records: response.data,
      }),
    );
  } catch (error) {
    const apiError = getApiErrorMessage(error, 'Não foi possível carregar o histórico.');

    yield put(actions.historyVehicleFailure(apiError));
  }
}

export default function* historyVehicleSaga() {
  yield takeLatest(types.HISTORY_VEHICLE_REQUEST, historyVehicle);
}
