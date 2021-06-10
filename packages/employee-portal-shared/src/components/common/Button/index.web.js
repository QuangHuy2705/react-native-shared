import React from 'react';
import styled from 'styled-components';
import { buttonContainerStyle, buttonTextStyle } from '../../../styles';

const Button = ({ onPress, text, icon, ...rest }) => (
  <StyledButton onClick={onPress} {...rest}>
    {icon && (
      <img style={{ position: 'absolute', zIndex: 5, left: 23 }} src={icon} />
    )}
    {text}
  </StyledButton>
);

Button.defaultProps = {
  variant: 'primary'
};

const StyledButton = styled.button`
	${buttonContainerStyle}
	${buttonTextStyle}
	cursor: pointer;
	:active {
		outline: none;
		border: none;
	}
	:focus {
		outline:0;
	}
`;

export default Button;
