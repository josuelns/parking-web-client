import styled from 'styled-components';
import { theme } from './theme';

export const StyledForm = styled.form`
  height: auto;
  margin: 0 8px;
  padding: 36px 16px 64px 16px;
  background: ${theme.colors.surface};
  display: flex;
  flex-direction: column;

  label {
    margin-bottom: 7px;
    font-size: 16px;
  }

  input {
    background: ${theme.colors.inputBackground};
    border: 1px solid ${theme.colors.border};
    border-radius: 4px;
    height: 67px;
    text-align: center;
    font-size: 24px;
    line-height: 33px;
    color: ${theme.colors.textMuted};
  }

  button {
    margin-top: 16px;
    height: 67px;
    border-radius: 4px;
    border: 1px solid ${theme.colors.border};
    font-weight: 600;
    font-size: 15px;
    line-height: 20px;
    text-align: center;
    text-transform: uppercase;
    color: ${theme.colors.textMuted};
    cursor: pointer;

    &:disabled {
      opacity: 0.6;
      cursor: not-allowed;
    }
  }

  .bg_gray {
    background: ${theme.colors.buttonMuted};
  }

  .bg_white {
    background: ${theme.colors.surface};
  }

  a {
    margin-top: 24px;
    font-weight: 600;
    font-size: 15px;
    line-height: 20px;
    text-align: center;
    text-transform: uppercase;
    color: ${theme.colors.primary};
  }

  .history-disabled {
    margin-top: 24px;
    font-weight: 600;
    font-size: 15px;
    line-height: 20px;
    text-align: center;
    text-transform: uppercase;
    color: ${theme.colors.border};
  }
`;

export const StyledHelperText = styled.p`
  margin-top: 12px;
  color: ${theme.colors.textDark};
  font-size: 14px;
`;
