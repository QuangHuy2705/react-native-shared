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
  ${({ viewFullHeight }) => viewFullHeight && `
    flex-direction: column;
  `}
  background: #F2F2F2;
  margin: 12px;
  border-radius: 12px;
  padding: 4px;
`;

const ImageContainer = styled(View)`
  width: 25%;
  ${({ viewFullHeight }) => viewFullHeight && `
    width: 100%;
    flex: 1;
    height: 180px;
  `}
`;

const ImageThumnail = styled(Image)`
  flex: 1;
  border-radius: 8px;
`;

const Content = styled(View)`
  flex: 1;
  margin: 4px;
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

function ExternalLink({ link, viewFullHeight }) {

	const goToExternalLink = () => {
		Linking.openURL(link.url);
	}

	return (
		<Touchable flex={1} onPress={goToExternalLink}>
			<Container viewFullHeight={viewFullHeight}>
				<ImageContainer viewFullHeight={viewFullHeight}>
					<ImageThumnail source={{ uri: link.thumbnail }} />
				</ImageContainer>
				<Content>
					<Title numberOfLines={1}>{link.title}</Title>
					<Description numberOfLines={2}>{link.description}</Description>
				</Content>
			</Container>
		</Touchable>
	)
}

export default ExternalLink;
