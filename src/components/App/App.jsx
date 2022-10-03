import { Component } from 'react';
import { GlobalStyle } from 'components/GlobalStyle';
import { Searchbar } from 'components/Searchbar/Searchbar';
import { AppStyled } from 'components/App/AppStyled';
import { ImageGallery } from 'components/ImageGallery/ImageGallery';
import { Button } from 'components/Button/Button';
import { Loader } from 'components/Loader/Loader';
import { ErrorMessage } from 'components/ErrorMessage/ErrorMessage';

export class App extends Component {
  state = {
    searchQuery: '',
    status: 'idle',
    page: 1,
    errorMessage: '',
  };

  setSearchQuery = query => {
    this.setState({ searchQuery: query, page: 1 });
  };

  onLoadMoreClick = () => {
    this.setState(state => ({ page: state.page + 1 }));
  };

  toggleLoading = () => {
    this.setState(state => ({ loading: !state.loading }));
  };

  setStatus = newStatus => {
    this.setState({ status: newStatus });
  };

  render() {
    const { status, searchQuery, page } = this.state;
    return (
      <AppStyled>
        <Searchbar onSubmit={this.setSearchQuery} />

        <ImageGallery
          query={searchQuery}
          page={page}
          setStatus={this.setStatus}
        />
        {status === 'loading' && <Loader />}
        {status === 'resolved' && <Button onClick={this.onLoadMoreClick} />}
        {status === 'rejected' && <ErrorMessage />}
        <GlobalStyle />
      </AppStyled>
    );
  }
}
