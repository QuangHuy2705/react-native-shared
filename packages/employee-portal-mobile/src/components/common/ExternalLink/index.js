import React from 'react';
import { Linking } from 'react-native';
import styled from 'styled-components';

import View from '~/ui/primitives/View';
import Touchable from '~/ui/primitives/Touchable';
import Text from '~/ui/primitives/Text';
import Image from '~/ui/primitives/Image';

const Container = styled(View)`
  flex: 1;
  flex-direction: row;
  background: #F2F2F2;
  margin: 12px;
  padding: 4px;
`;

const ImageThumnail = styled(Image)`
  width: 25%;
  border-radius: 8px;
`;

const Content = styled(View)`
  flex: 1;
  margin-left: 8px;
`;

const Title = styled(Text)`
  font-weight: bold;
  font-size: 13px;
  color: #000;
`;

const Description = styled(Text)`
  color: #828282;
  font-size: 12px;
`;

function ExternalLink({ link }) {

	const goToExternalLink = () => {
		Linking.openURL(link.url);
	}

	return (
		<Touchable flex={1} onPress={goToExternalLink}>
			<Container>
				<ImageThumnail source={{ uri: link.thumbnail }} />
				<Content>
					<Title numberOfLines={1}>{link.title}</Title>
					<Description numberOfLines={2}>{link.description}</Description>
				</Content>
			</Container>
		</Touchable>
	)
}

export default ExternalLink;
