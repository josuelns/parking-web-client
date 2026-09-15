import { FC, useEffect, useMemo } from 'react';
import { Link, useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import Header from '../components/header';
import { useSliceFeedback } from '../hooks/useSliceFeedback';
import { historyVehicleRequest, historyVehicleSelect } from '../store/modules/history-vehicle/actions';
import type { RootState } from '../store/modules/rootReducer';
import { normalizePlate } from '../types/parking';
import Arrow from '../assets/static/arrow_l.svg';
import { StyledBodyPage, StyledHeaderPage, StyledListPage } from '../assets/utils/styles/page-history';

type ReservationParams = {
  plate: string;
  sessionId: string;
};

const HistoryReservationPage: FC = () => {
  const dispatch = useDispatch();
  const { plate = '', sessionId = '' } = useParams<ReservationParams>();
  const normalizedPlate = normalizePlate(plate);
  const historySlice = useSelector((state: RootState) => state.historyVehicle);

  useSliceFeedback(historySlice, `${normalizedPlate}-${sessionId}`);

  useEffect(() => {
    if (normalizedPlate) {
      dispatch(historyVehicleRequest({ plate: normalizedPlate }));
    }
  }, [dispatch, normalizedPlate]);

  const selectedRecord = useMemo(() => {
    const fromStore = historySlice.records.find((record) => record.id === sessionId);

    if (fromStore) {
      return fromStore;
    }

    return historySlice.selectedRecord?.id === sessionId ? historySlice.selectedRecord : null;
  }, [historySlice.records, historySlice.selectedRecord, sessionId]);

  useEffect(() => {
    if (selectedRecord) {
      dispatch(historyVehicleSelect(selectedRecord));
    }
  }, [dispatch, selectedRecord]);

  const statusLabel = selectedRecord?.status === 'parked' ? 'Estacionado' : 'Finalizado';

  return (
    <>
      <Header />
      <section>
        <StyledBodyPage>
          <StyledHeaderPage>
            <Link to={`/history/${normalizedPlate}`} aria-label="Voltar para histórico">
              <img src={Arrow} alt="" />
            </Link>
          </StyledHeaderPage>

          {historySlice.isLoading ? <p>Carregando detalhes...</p> : null}
          {historySlice.error ? <p role="alert">{historySlice.error}</p> : null}

          {selectedRecord ? (
            <StyledListPage>
              <aside className="plate">
                <p className="title">Placa</p>
                <p className="plate">{selectedRecord.plate}</p>
              </aside>
              <aside className="status">
                <p className="title">Status</p>
                <p className="subtitle">{statusLabel}</p>
              </aside>
              <aside className="time">
                <p className="title">Tempo Atual</p>
                <p className="subtitle">{selectedRecord.elapsedTime}</p>
              </aside>
              <aside className="pay">
                <p className="title">Pagamento</p>
                <p className="subtitle">{selectedRecord.paymentLabel}</p>
              </aside>
            </StyledListPage>
          ) : !historySlice.isLoading ? (
            <p>Sessão não encontrada.</p>
          ) : null}
        </StyledBodyPage>
      </section>
    </>
  );
};

export default HistoryReservationPage;
