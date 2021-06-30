import React from 'react';
import styled from 'styled-components';
import { Dimensions, TouchableOpacity } from 'react-native';
import View from '~/ui/primitives/View';
import Text from '~/ui/primitives/Text';
import PictureIcon from '~/ui/common/Icon/Svg/PictureIcon';
import Avatar from '~/components/common/Profile/Avatar'
import {useNavigation} from '@react-navigation/native'

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
`;

const CTouchableOpacity = styled(TouchableOpacity)`
  margin-left: 16px;
  flex: 1;
`

function PostStatusBox({ owner, to = '' }) {
	const navigation = useNavigation()
  const { photo, name } = owner;
  return (<Container>
    <Avatar
      source={{ uri: photo }}
      width={36}
      height={36}
    />
		<CTouchableOpacity onPress={() => navigation.navigate('PostFormModal', {title: to})}>
			<PlaceHolderText>
				What's on your mind, {name}?
			</PlaceHolderText>
		</CTouchableOpacity>
    <PictureIcon />
  </Container>);
}

export default PostStatusBox;
