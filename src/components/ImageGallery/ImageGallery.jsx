import { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { ImageGalleryStyled } from 'components/ImageGallery/ImageGalleryStyled';
import { fetchImages } from '../../services/ferchImages';
import { ImageGalleryItem } from 'components/ImageGalleryItem/ImageGalleryItem';

export const ImageGallery = ({ query, page, setStatus }) => {
  const [images, setImages] = useState([]);

  useEffect(() => {
    setImages([]);
  }, [query]);

  useEffect(() => {
    if (query === '') return;
    setStatus('loading');
    fetchImages(query, page, setStatus).then(data => {
      if (data.hits.length < 1) {
        setStatus('rejected');
      } else {
        setStatus('resolved');
      }
      setImages(prewImages => [...prewImages, ...data.hits]);
    });
  }, [query, page, setStatus]);

  return (
    images.length > 0 && (
      <ImageGalleryStyled>
        {images.map(item => {
          return <ImageGalleryItem item={item} key={item.id} />;
        })}
      </ImageGalleryStyled>
    )
  );
};

ImageGallery.propTypes = {
  query: PropTypes.string.isRequired,
  page: PropTypes.number.isRequired,
  setStatus: PropTypes.func.isRequired,
};
