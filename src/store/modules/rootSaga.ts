import { all, fork } from 'redux-saga/effects';
import entraceNewVehicleSaga from './entrace-new-vehicle/sagas';
import exitVehicleSaga from './exit-vehicle/sagas';
import paymentVehicleSaga from './payment-vehicle/sagas';
import historyVehicleSaga from './history-vehicle/sagas';

export default function* rootSaga() {
  yield all([
    fork(entraceNewVehicleSaga),
    fork(exitVehicleSaga),
    fork(paymentVehicleSaga),
    fork(historyVehicleSaga),
  ]);
}
