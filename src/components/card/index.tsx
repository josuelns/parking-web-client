import { FC } from 'react';
import { Link } from 'react-router-dom';
import type { ParkingRecord } from '../../types/parking';
import { StyledCard } from '../../assets/utils/styles/card';

interface Props {
  record: ParkingRecord;
  plate: string;
}

const Card: FC<Props> = ({ record, plate }) => (
  <Link to={`/history/${plate}/${record.id}`} aria-label={`Ver detalhes da sessão ${record.id}`}>
    <StyledCard>
      <aside>
        <p className="title">Tempo Atual</p>
        <p className="subtitle">{record.elapsedTime}</p>
      </aside>
      <aside>
        <p className="title">Pagamento</p>
        <p className="subtitle">{record.paymentLabel}</p>
      </aside>
    </StyledCard>
  </Link>
);

export default Card;
