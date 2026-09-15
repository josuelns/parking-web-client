import type { EntranceVehicleState } from './types';
import * as types from './types';
import type * as actions from './actions';

type EntranceAction = ReturnType<
  | typeof actions.entraceNewVehicleRequest
  | typeof actions.entraceNewVehicleSuccess
  | typeof actions.entraceNewVehicleFailure
>;

const initialState: EntranceVehicleState = {
  isLoading: false,
  error: null,
  message: null,
  lastPlate: null,
};

export default function entraceNewVehicleReducer(
  state = initialState,
  action: EntranceAction,
): EntranceVehicleState {
  switch (action.type) {
    case types.REGISTER_NEW_VEHICLE_REQUEST:
      return {
        ...state,
        isLoading: true,
        error: null,
        message: null,
      };
    case types.REGISTER_NEW_VEHICLE_SUCCESS:
      return {
        ...state,
        isLoading: false,
        error: null,
        message: action.payload.message,
        lastPlate: action.payload.plate,
      };
    case types.REGISTER_NEW_VEHICLE_FAILURE:
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
