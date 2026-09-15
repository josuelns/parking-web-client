import { FC } from 'react';
import { Link } from 'react-router-dom';
import { StyledTabNavBar } from '../../assets/utils/styles/tab_navbar';

interface Props {
  entrance?: boolean;
  exit?: boolean;
}

const TabNavBar: FC<Props> = ({ entrance = false, exit = false }) => (
  <StyledTabNavBar>
    <Link to="/entrace" className={entrance ? 'active' : ''}>
      Entrada
    </Link>
    <Link to="/exit" className={exit ? 'active' : ''}>
      Saída
    </Link>
  </StyledTabNavBar>
);

export default TabNavBar;
