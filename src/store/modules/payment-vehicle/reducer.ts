import type { PaymentVehicleState } from './types';
import * as types from './types';
import type * as actions from './actions';

type PaymentAction = ReturnType<
  | typeof actions.paymentVehicleRequest
  | typeof actions.paymentVehicleSuccess
  | typeof actions.paymentVehicleFailure
>;

const initialState: PaymentVehicleState = {
  isLoading: false,
  error: null,
  message: null,
  lastPlate: null,
};

export default function paymentVehicleReducer(
  state = initialState,
  action: PaymentAction,
): PaymentVehicleState {
  switch (action.type) {
    case types.PAYMENT_VEHICLE_REQUEST:
      return {
        ...state,
        isLoading: true,
        error: null,
        message: null,
      };
    case types.PAYMENT_VEHICLE_SUCCESS:
      return {
        ...state,
        isLoading: false,
        error: null,
        message: action.payload.message,
        lastPlate: action.payload.plate,
      };
    case types.PAYMENT_VEHICLE_FAILURE:
      return {
        ...state,
        isLoading: false,
        error: action.payload.message,
        message: null,
      };
    default:
      return state;
  }
}
