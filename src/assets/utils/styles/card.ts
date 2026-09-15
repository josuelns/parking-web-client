import styled from 'styled-components';
import { theme } from './theme';

export const StyledCard = styled.div`
  display: flex;
  background: ${theme.colors.surface};
  margin: 17px;
  padding: 17px 0 16px 15px;
  border: 1px solid ${theme.colors.cardBorder};
  box-shadow: 0 2px 2px rgb(0 0 0 / 20%);
  border-radius: 8px;

  p.title {
    font-size: 12px;
    line-height: 16px;
    text-transform: uppercase;
    color: ${theme.colors.textMuted};
  }

  p.subtitle {
    font-size: 24px;
    line-height: 33px;
    color: ${theme.colors.textDark};
    white-space: nowrap;
  }

  aside {
    margin-right: 63px;
  }
`;

export const StyledCardsSection = styled.section`
  display: flex;
  flex-direction: column;
`;

export const StyledEmptyState = styled.p`
  margin: 24px;
  color: ${theme.colors.textDark};
  text-align: center;
`;
