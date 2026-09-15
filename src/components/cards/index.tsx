import { FC } from 'react';
import { useSelector } from 'react-redux';
import type { RootState } from '../../store/modules/rootReducer';
import Card from '../card';
import { StyledCardsSection, StyledEmptyState } from '../../assets/utils/styles/card';

interface Props {
  plate: string;
}

const Cards: FC<Props> = ({ plate }) => {
  const { records, isLoading, error } = useSelector((state: RootState) => state.historyVehicle);

  if (isLoading) {
    return <StyledEmptyState>Carregando histórico...</StyledEmptyState>;
  }

  if (error) {
    return <StyledEmptyState role="alert">{error}</StyledEmptyState>;
  }

  if (records.length === 0) {
    return <StyledEmptyState>Nenhum registro encontrado para {plate.toUpperCase()}.</StyledEmptyState>;
  }

  return (
    <StyledCardsSection>
      {records.map((record) => (
        <Card key={record.id} record={record} plate={plate} />
      ))}
    </StyledCardsSection>
  );
};

export default Cards;
