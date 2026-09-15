import type { HistoryVehicleState } from './types';
import * as types from './types';
import type * as actions from './actions';

type HistoryAction = ReturnType<
  | typeof actions.historyVehicleRequest
  | typeof actions.historyVehicleSuccess
  | typeof actions.historyVehicleFailure
  | typeof actions.historyVehicleSelect
>;

const initialState: HistoryVehicleState = {
  isLoading: false,
  error: null,
  message: null,
  plate: null,
  records: [],
  selectedRecord: null,
};

export default function historyVehicleReducer(
  state = initialState,
  action: HistoryAction,
): HistoryVehicleState {
  switch (action.type) {
    case types.HISTORY_VEHICLE_REQUEST:
      return {
        ...state,
        isLoading: true,
        error: null,
        message: null,
        plate: action.payload.plate,
        records: [],
        selectedRecord: null,
      };
    case types.HISTORY_VEHICLE_SUCCESS:
      return {
        ...state,
        isLoading: false,
        error: null,
        message:
          action.payload.records.length > 0
            ? `${action.payload.records.length} registro(s) encontrado(s).`
            : 'Nenhum histórico encontrado para esta placa.',
        plate: action.payload.plate,
        records: action.payload.records,
      };
    case types.HISTORY_VEHICLE_FAILURE:
      return {
        ...state,
        isLoading: false,
        error: action.payload.message,
        message: null,
        records: [],
        selectedRecord: null,
      };
    case types.HISTORY_VEHICLE_SELECT:
      return {
        ...state,
        selectedRecord: action.payload,
      };
    default:
      return state;
  }
}
