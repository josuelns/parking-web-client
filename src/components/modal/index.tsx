import { FC } from 'react';
import { StyledModalBackdrop, StyledModalCard } from '../../assets/utils/styles/modal';

interface Props {
  isOpen: boolean;
  title: string;
  message: string;
  onClose: () => void;
}

const Modal: FC<Props> = ({ isOpen, title, message, onClose }) => {
  if (!isOpen) {
    return null;
  }

  return (
    <StyledModalBackdrop role="presentation" onClick={onClose}>
      <StyledModalCard role="dialog" aria-modal="true" aria-labelledby="modal-title" onClick={(event) => event.stopPropagation()}>
        <h2 id="modal-title">{title}</h2>
        <p>{message}</p>
        <button type="button" onClick={onClose}>
          Fechar
        </button>
      </StyledModalCard>
    </StyledModalBackdrop>
  );
};

export default Modal;
