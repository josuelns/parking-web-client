import type { ExitVehicleState } from './types';
import * as types from './types';
import type * as actions from './actions';

type ExitAction = ReturnType<
  | typeof actions.exitVehicleRequest
  | typeof actions.exitVehicleSuccess
  | typeof actions.exitVehicleFailure
>;

const initialState: ExitVehicleState = {
  isLoading: false,
  error: null,
  message: null,
  lastPlate: null,
};

export default function exitVehicleReducer(
  state = initialState,
  action: ExitAction,
): ExitVehicleState {
  switch (action.type) {
    case types.EXIT_VEHICLE_REQUEST:
      return {
        ...state,
        isLoading: true,
        error: null,
        message: null,
      };
    case types.EXIT_VEHICLE_SUCCESS:
      return {
        ...state,
        isLoading: false,
        error: null,
        message: action.payload.message,
        lastPlate: action.payload.plate,
      };
    case types.EXIT_VEHICLE_FAILURE:
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
