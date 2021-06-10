import React from 'react';
import styled from 'styled-components';
import Touchable from '../../primitives/Touchable';
import Text from '../../primitives/Text';
import { buttonContainerStyle, buttonTextStyle } from '../../../styles';
import { Image } from 'react-native'

const Button = ({ onPress, text, variant, icon, ...rest }) => (
  <ButtonWrapper variant={variant} onPress={onPress} {...rest}>
    <>
      {icon && (
        <Image style={{ position: 'absolute', zIndex: 5, left: 23 }} source={icon} />
      )}
      <ButtonText variant={variant}>
        {text}
      </ButtonText>
    </>
  </ButtonWrapper>
);

Button.defaultProps = {
  variant: 'primary',
};

const ButtonWrapper = styled(Touchable)`${buttonContainerStyle}`;
const ButtonText = styled(Text)`${buttonTextStyle}`;

export default Button;
