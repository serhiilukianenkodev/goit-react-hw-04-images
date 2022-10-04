import { useEffect } from 'react';
import { Overlay, ModalStyled } from 'components/Modal/ModalStyled';
import PropTypes from 'prop-types';

export const Modal = ({ largeImg, about, onModalClose }) => {
  useEffect(() => {
    const onModalKeydown = e => {
      if (e.key === 'Escape') {
        onModalClose();
      }
    };

    window.addEventListener('keydown', onModalKeydown);

    return () => {
      window.removeEventListener('keydown', onModalKeydown);
    };
  });

  return (
    <Overlay
      onClick={e => {
        if (e.target === e.currentTarget) onModalClose();
      }}
    >
      <ModalStyled>
        <img src={largeImg} alt={about} />
      </ModalStyled>
    </Overlay>
  );
};

Modal.propTypes = {
  largeImg: PropTypes.string.isRequired,
  about: PropTypes.string.isRequired,
  onModalClose: PropTypes.func.isRequired,
};
