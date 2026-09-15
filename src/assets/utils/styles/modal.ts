import styled from 'styled-components';
import { theme } from './theme';

export const StyledModalBackdrop = styled.div`
  position: fixed;
  inset: 0;
  background: rgba(10, 38, 29, 0.45);
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 16px;
  z-index: 20;
`;

export const StyledModalCard = styled.div`
  width: min(100%, 420px);
  background: ${theme.colors.surface};
  border-radius: 8px;
  padding: 24px;
  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.18);

  h2 {
    color: ${theme.colors.primary};
    font-size: 24px;
    margin-bottom: 12px;
  }

  p {
    color: ${theme.colors.textDark};
    margin-bottom: 20px;
    line-height: 1.5;
  }

  button {
    width: 100%;
    height: 48px;
    border: 1px solid ${theme.colors.border};
    border-radius: 4px;
    background: ${theme.colors.primary};
    color: ${theme.colors.surface};
    font-weight: 600;
    text-transform: uppercase;
    cursor: pointer;
  }
`;
