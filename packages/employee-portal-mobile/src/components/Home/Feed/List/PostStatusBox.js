import React from 'react';

import styled from 'styled-components';

import { Dimensions } from 'react-native';

import View from '~/ui/primitives/View';
import Text from '~/ui/primitives/Text';
import PictureIcon from '~/ui/common/Icon/Svg/PictureIcon';
import Avatar from '~/components/common/Profile/Avatar'

const Container = styled(View)`
  display: flex;
  background: #fff;
  width: ${Dimensions.get('window').width}px;
  margin-top: 8px;
  padding: 16px;
  flex-direction: row;
  align-items: center;
`;

const PlaceHolderText = styled(Text)`
  font-size: 16px;
  margin-left: 16px;
  flex: 1;
`;

function PostStatusBox({ owner, profile }) {
  const { displayName } = profile;
  const name = displayName.split(/\s/)[0];

  return (<Container>
    <Avatar
      source={{ text: displayName }}
      width={36}
      height={36}
    />
    <PlaceHolderText>
      What's on your {name ? `mind, ${name}?` : 'mind?'}
    </PlaceHolderText>
    <PictureIcon />
  </Container>);
}

export default PostStatusBox;
