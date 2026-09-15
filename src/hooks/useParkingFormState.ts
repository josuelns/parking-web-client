import { useMemo } from 'react';
import { useSelector } from 'react-redux';
import type { RootState } from '../store/modules/rootReducer';

type ParkingFormMode = 'entrance' | 'exit';

export const useParkingFormState = (mode: ParkingFormMode) =>
  useSelector((state: RootState) => {
    if (mode === 'entrance') {
      return state.entraceNewVehicle;
    }

    return {
      isLoading: state.exitVehicle.isLoading || state.paymentVehicle.isLoading,
      error: state.exitVehicle.error ?? state.paymentVehicle.error,
      message: state.exitVehicle.message ?? state.paymentVehicle.message,
    };
  });

export const useIsPlateActionPending = (mode: ParkingFormMode) => {
  const slice = useParkingFormState(mode);

  return useMemo(() => slice.isLoading, [slice.isLoading]);
};
