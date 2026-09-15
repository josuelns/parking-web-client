import { combineReducers } from 'redux';
import entraceNewVehicle from './entrace-new-vehicle/reducer';
import exitVehicle from './exit-vehicle/reducer';
import paymentVehicle from './payment-vehicle/reducer';
import historyVehicle from './history-vehicle/reducer';

const rootReducer = combineReducers({
  entraceNewVehicle,
  exitVehicle,
  paymentVehicle,
  historyVehicle,
});

export type RootState = ReturnType<typeof rootReducer>;

export default rootReducer;
