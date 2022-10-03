import { Component } from 'react';
import PropTypes from 'prop-types';
import { Modal } from 'components/Modal/Modal';
import {
  GalleryItemStyled,
  GalleryImgStyled,
} from 'components/ImageGalleryItem/ImageGalleryItemStyled';

export class ImageGalleryItem extends Component {
  state = {
    isModalOpen: false,
  };

  componentDidUpdate(prevProps, prevState) {
    if (this.state.isModalOpen) {
      window.addEventListener('keydown', this.onModalKeydown);
    } else window.removeEventListener('keydown', this.onModalKeydown);
  }

  onModalKeydown = e => {
    if (e.key === 'Escape') {
      this.closeModal();
    }
  };

  openModal = () => {
    this.setState({ isModalOpen: true });
  };

  closeModal = () => {
    this.setState({ isModalOpen: false });
  };
  render() {
    const { webformatURL, largeImageURL, tags } = this.props.item;
    return (
      <GalleryItemStyled>
        <GalleryImgStyled
          src={webformatURL}
          alt={tags}
          onClick={this.openModal}
        />
        {this.state.isModalOpen && (
          <Modal
            largeImg={largeImageURL}
            about={tags}
            onModalClose={this.closeModal}
          />
        )}
      </GalleryItemStyled>
    );
  }
}

ImageGalleryItem.propTypes = {
  item: PropTypes.object.isRequired,
};
