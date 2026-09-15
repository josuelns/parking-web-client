import { FC, useState } from 'react';
import { Link } from 'react-router-dom';
import { StyledHeader } from '../../assets/utils/styles/header';
import LogoMobile from '../../assets/static/avatar_white.svg';
import MenuBar from '../../assets/static/menu.svg';
import MenuClose from '../../assets/static/close.svg';

const Header: FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <StyledHeader>
      <div id="logo">
        <img src={LogoMobile} alt="Logo Parking" />
      </div>
      <div id="navIcon">
        {!isMenuOpen ? (
          <button type="button" aria-label="Abrir menu" onClick={() => setIsMenuOpen(true)}>
            <img src={MenuBar} alt="" />
          </button>
        ) : (
          <button type="button" aria-label="Fechar menu" onClick={() => setIsMenuOpen(false)}>
            <img src={MenuClose} alt="" />
          </button>
        )}
      </div>
      <div id="navList">
        {isMenuOpen ? (
          <ul className="active">
            <li>
              <Link to="/entrace" onClick={() => setIsMenuOpen(false)}>
                Entrada
              </Link>
            </li>
            <li>
              <Link to="/exit" onClick={() => setIsMenuOpen(false)}>
                Saída
              </Link>
            </li>
          </ul>
        ) : null}
      </div>
    </StyledHeader>
  );
};

export default Header;
