import React from 'react';
import PropTypes from 'prop-types';
import { ButtonStyled } from './Button.styles';

export const Button = ({ children, ...props }) => {
  return <ButtonStyled {...props}>{children}</ButtonStyled>;
};

Button.propTypes = {
  props: PropTypes.any,
};
