import PropTypes from 'prop-types';
import { GoBackBtn } from 'components/Button';

export const Button = ({ onClick, children }) => (
  <GoBackBtn type="button" className="button" onClick={onClick}>
    {children}
  </GoBackBtn>
);

Button.defaultProps = {
  onClick: () => null,
};

Button.propTypes = {
  onClick: PropTypes.func,
  children: PropTypes.node,
};
