import { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { Modal } from 'components/Modal/Modal';
import {
  GalleryItemStyled,
  GalleryImgStyled,
} from 'components/ImageGalleryItem/ImageGalleryItemStyled';

export const ImageGalleryItem = ({ item }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    const onModalKeydown = e => {
      if (e.key === 'Escape') {
        closeModal();
      }
    };
    if (isModalOpen) {
      window.addEventListener('keydown', onModalKeydown);
    } else window.removeEventListener('keydown', onModalKeydown);
  }, [isModalOpen]);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const { webformatURL, largeImageURL, tags } = item;
  return (
    <GalleryItemStyled>
      <GalleryImgStyled src={webformatURL} alt={tags} onClick={openModal} />
      {isModalOpen && (
        <Modal
          largeImg={largeImageURL}
          about={tags}
          onModalClose={closeModal}
        />
      )}
    </GalleryItemStyled>
  );
};

ImageGalleryItem.propTypes = {
  item: PropTypes.object.isRequired,
};
