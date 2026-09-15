import { call, put, takeLatest } from 'redux-saga/effects';
import type { AxiosResponse } from 'axios';
import type { ActionType } from 'typesafe-actions';
import type { ParkingRecord } from '../../../types/parking';
import { normalizePlate } from '../../../types/parking';
import { getApiErrorMessage } from '../../../services/api-error';
import { parkingApi } from '../../../services/parking-api';
import * as actions from './actions';
import * as types from './types';

export function* paymentVehicle({
  payload,
}: ActionType<typeof actions.paymentVehicleRequest>) {
  try {
    const plate = normalizePlate(payload.plate);
    const response: AxiosResponse<ParkingRecord> = yield call(parkingApi.pay, plate);

    yield put(
      actions.paymentVehicleSuccess({
        plate: response.data.plate,
        message: `Pagamento confirmado para ${response.data.plate}.`,
      }),
    );
  } catch (error) {
    const apiError = getApiErrorMessage(error, 'Não foi possível registrar o pagamento.');

    yield put(actions.paymentVehicleFailure(apiError));
  }
}

export default function* paymentVehicleSaga() {
  yield takeLatest(types.PAYMENT_VEHICLE_REQUEST, paymentVehicle);
}
