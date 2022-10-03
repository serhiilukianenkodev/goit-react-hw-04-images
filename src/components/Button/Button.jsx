import { ButtonStyled } from 'components/Button/ButtonStyled';
import PropTypes from 'prop-types';

export const Button = ({ onClick }) => {
  return (
    <ButtonStyled type="button" onClick={onClick}>
      Load More
    </ButtonStyled>
  );
};

Button.propTypes = {
  onClick: PropTypes.func.isRequired,
};
