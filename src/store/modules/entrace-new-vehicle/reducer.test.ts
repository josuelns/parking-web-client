import { describe, expect, it } from 'vitest';
import entraceNewVehicleReducer from './reducer';
import * as actions from './actions';

describe('entraceNewVehicleReducer', () => {
  it('ativa loading no request', () => {
    const state = entraceNewVehicleReducer(undefined, actions.entraceNewVehicleRequest({ plate: 'ABC-1234' }));

    expect(state.isLoading).toBe(true);
    expect(state.error).toBeNull();
  });

  it('salva mensagem de sucesso', () => {
    const state = entraceNewVehicleReducer(
      undefined,
      actions.entraceNewVehicleSuccess({ plate: 'ABC-1234', message: 'ok' }),
    );

    expect(state.isLoading).toBe(false);
    expect(state.message).toBe('ok');
    expect(state.lastPlate).toBe('ABC-1234');
  });

  it('salva erro de falha', () => {
    const state = entraceNewVehicleReducer(
      undefined,
      actions.entraceNewVehicleFailure({ message: 'falhou' }),
    );

    expect(state.isLoading).toBe(false);
    expect(state.error).toBe('falhou');
  });
});
