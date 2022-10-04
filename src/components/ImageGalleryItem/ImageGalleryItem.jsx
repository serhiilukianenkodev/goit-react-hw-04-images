import { useState } from 'react';
import PropTypes from 'prop-types';
import { Modal } from 'components/Modal/Modal';
import {
  GalleryItemStyled,
  GalleryImgStyled,
} from 'components/ImageGalleryItem/ImageGalleryItemStyled';

export const ImageGalleryItem = ({ item }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const toggleModal = () => {
    setIsModalOpen(isOpen => !isOpen);
  };

  const { webformatURL, largeImageURL, tags } = item;
  return (
    <GalleryItemStyled>
      <GalleryImgStyled src={webformatURL} alt={tags} onClick={toggleModal} />
      {isModalOpen && (
        <Modal
          largeImg={largeImageURL}
          about={tags}
          onModalClose={toggleModal}
        />
      )}
    </GalleryItemStyled>
  );
};

ImageGalleryItem.propTypes = {
  item: PropTypes.object.isRequired,
};
