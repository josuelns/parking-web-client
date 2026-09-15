import { FC, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import Header from '../components/header';
import Cards from '../components/cards';
import { useSliceFeedback } from '../hooks/useSliceFeedback';
import { historyVehicleRequest } from '../store/modules/history-vehicle/actions';
import type { RootState } from '../store/modules/rootReducer';
import { normalizePlate } from '../types/parking';
import Arrow from '../assets/static/arrow_l.svg';
import { StyledBodyPage, StyledHeaderPage } from '../assets/utils/styles/page-history';

type HistoryParams = {
  plate: string;
};

const HistoryPage: FC = () => {
  const dispatch = useDispatch();
  const { plate = '' } = useParams<HistoryParams>();
  const normalizedPlate = normalizePlate(plate);
  const historySlice = useSelector((state: RootState) => state.historyVehicle);

  useSliceFeedback(historySlice, normalizedPlate);

  useEffect(() => {
    if (normalizedPlate) {
      dispatch(historyVehicleRequest({ plate: normalizedPlate }));
    }
  }, [dispatch, normalizedPlate]);

  return (
    <>
      <Header />
      <section>
        <StyledBodyPage>
          <StyledHeaderPage>
            <Link to="/exit" aria-label="Voltar para saída">
              <img src={Arrow} alt="" />
            </Link>
            <p>Placa {normalizedPlate}</p>
          </StyledHeaderPage>
          <Cards plate={normalizedPlate} />
        </StyledBodyPage>
      </section>
    </>
  );
};

export default HistoryPage;
