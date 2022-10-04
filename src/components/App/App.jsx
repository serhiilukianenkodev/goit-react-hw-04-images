import { useState } from 'react';
import { GlobalStyle } from 'components/GlobalStyle';
import { Searchbar } from 'components/Searchbar/Searchbar';
import { AppStyled } from 'components/App/AppStyled';
import { ImageGallery } from 'components/ImageGallery/ImageGallery';
import { Button } from 'components/Button/Button';
import { Loader } from 'components/Loader/Loader';
import { ErrorMessage } from 'components/ErrorMessage/ErrorMessage';

export const App = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [status, setStatus] = useState('idle');
  const [page, setPage] = useState(1);

  const onLoadMoreClick = () => {
    setPage(page => page + 1);
  };

  const onSubmit = query => {
    setSearchQuery(query);
    setPage(1);
  };

  return (
    <AppStyled>
      <Searchbar onSubmit={onSubmit} />

      <ImageGallery query={searchQuery} page={page} setStatus={setStatus} />
      {status === 'loading' && <Loader />}
      {status === 'resolved' && <Button onClick={onLoadMoreClick} />}
      {status === 'rejected' && <ErrorMessage />}
      <GlobalStyle />
    </AppStyled>
  );
};
