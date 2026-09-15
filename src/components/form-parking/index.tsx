import { FC, FormEvent, useState } from 'react';
import { useDispatch } from 'react-redux';
import InputMask from 'react-input-mask';
import { Link } from 'react-router-dom';
import { useSliceFeedback } from '../../hooks/useSliceFeedback';
import { useParkingFormState } from '../../hooks/useParkingFormState';
import { entraceNewVehicleRequest } from '../../store/modules/entrace-new-vehicle/actions';
import { paymentVehicleRequest } from '../../store/modules/payment-vehicle/actions';
import { exitVehicleRequest } from '../../store/modules/exit-vehicle/actions';
import { isValidPlate, normalizePlate } from '../../types/parking';
import { StyledForm, StyledHelperText } from '../../assets/utils/styles/form';

interface Props {
  entrace?: boolean;
  payment?: boolean;
  exit?: boolean;
  history?: boolean;
}

const ParkingForm: FC<Props> = ({ entrace = false, payment = false, exit = false, history = false }) => {
  const dispatch = useDispatch();
  const [plate, setPlate] = useState('');
  const [validationError, setValidationError] = useState<string | null>(null);
  const mode = entrace ? 'entrance' : 'exit';
  const slice = useParkingFormState(mode);

  useSliceFeedback(slice, plate);

  const validateAndDispatch = (action: 'entrance' | 'payment' | 'exit') => {
    const normalizedPlate = normalizePlate(plate);

    if (!isValidPlate(normalizedPlate)) {
      setValidationError('Informe uma placa válida no formato AAA-0000.');
      return;
    }

    setValidationError(null);
    setPlate(normalizedPlate);

    if (action === 'entrance') {
      dispatch(entraceNewVehicleRequest({ plate: normalizedPlate }));
      return;
    }

    if (action === 'payment') {
      dispatch(paymentVehicleRequest({ plate: normalizedPlate }));
      return;
    }

    dispatch(exitVehicleRequest({ plate: normalizedPlate }));
  };

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (entrace) {
      validateAndDispatch('entrance');
    }
  };

  return (
    <>
      <StyledForm id="formParking" onSubmit={handleSubmit} aria-busy={slice.isLoading}>
        <label htmlFor="plate-input">Número da placa:</label>
        <InputMask
          id="plate-input"
          type="text"
          value={plate}
          onChange={(event) => {
            setPlate(event.target.value.toUpperCase());
            setValidationError(null);
          }}
          mask="aaa-9999"
          maskChar=""
          placeholder="AAA-0000"
        />

        {validationError ? <StyledHelperText role="alert">{validationError}</StyledHelperText> : null}
        {slice.isLoading ? <StyledHelperText>Processando...</StyledHelperText> : null}

        {entrace ? (
          <button type="submit" disabled={slice.isLoading}>
            Confirmar Entrada
          </button>
        ) : null}

        {payment ? (
          <button
            type="button"
            className="bg_gray"
            disabled={slice.isLoading}
            onClick={() => validateAndDispatch('payment')}
          >
            Pagamento
          </button>
        ) : null}

        {exit ? (
          <button
            type="button"
            className="bg_white"
            disabled={slice.isLoading}
            onClick={() => validateAndDispatch('exit')}
          >
            Saída
          </button>
        ) : null}

        {history ? (
          isValidPlate(normalizePlate(plate)) ? (
            <Link to={`/history/${normalizePlate(plate)}`}>Ver Histórico</Link>
          ) : (
            <span className="history-disabled">Ver Histórico</span>
          )
        ) : null}
      </StyledForm>
    </>
  );
};

export default ParkingForm;
