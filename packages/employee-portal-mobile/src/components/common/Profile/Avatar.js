import React from 'react';
import styled from 'styled-components';

import View from '~/ui/primitives/View';
import Text from '~/ui/primitives/Text';
import Image from '~/ui/primitives/Image';


const TextAvatarContainer = styled(View)`
  ${({ size = 40, background }) => `
    width: ${size}px;
    height: ${size}px;
    border-radius: ${size / 2}px;
    background: #${background};
  `}
  align-items: center;
  justify-content: center;
`;

const TextAvatarText = styled(Text)`
  ${({ size = 40 }) => `
    font-size: ${size / 2}px;
  `}
  color: #fff;
`;

function getAvCode(text) {
  const parts = text.split(/\s/);
  let code = (parts[0] || '').substr(0, 1);
  code += (parts[parts.length - 1] || '').substr(0, 1);
  return code.toUpperCase();
}

function generateColor(text) {
  let code = 0;
  for (let i = 0; i < text.length; i++) {
    code = text.charCodeAt(i) + ((code << 5) - code);
  }
  const color = (code & 0x00FFFFFF)
    .toString(16)
    .toUpperCase();
  return '00000'.substring(0, 6 - color.length) + color;
}

const ImageAvatar = styled(Image)`
  ${({ size = 40 }) => `
    width: ${size}px;
    height: ${size}px;
    border-radius: ${size / 2}px;
  `}
`;

function Avatar(props) {
  const { source: { uri, text }, size } = props;
  if (uri) {
    return (<ImageAvatar size={size} source={{ uri }} />);
  }
  return (
    <TextAvatarContainer size={size} background={generateColor(text)}>
      <TextAvatarText size={size}>{getAvCode(text)}</TextAvatarText>
    </TextAvatarContainer>
  );
}

export default Avatar;
