import React from 'react';
import styled from 'styled-components';

import View from '~/ui/primitives/View';
import Image from '~/ui/primitives/Image';
import Text from '~/ui/primitives/Text';

const Container = styled(View)`
  flex: 1
  flex-direction: column;
  width: 100%;
  padding: 0 12px;
`;

const Row = styled(View)`
  flex: 1;
  flex-direction: row;
`;

const ImageContainer = styled(View)`
  flex: 1;
  align-items: stretch;
`;

const ImageThumnail = styled(Image)`
  flex: 1;
  margin: 2px;
`;

const ImageLeft = styled(View)`
  flex: 1;
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  z-index: 2;
  background-color: rgba(52, 52, 52, 0.8);
  margin: 2px;
  align-items: center;
  justify-content: center;
`;

function ThumbnailsGrid({ thumbnails, numOfImgs, oneRow }) {

	let firstRow = [];
	let secondRow = [];
	numOfImgs = numOfImgs || 3;
	const _numOfImgs = (thumbnails.length < numOfImgs) ? thumbnails.length : (numOfImgs);
	if (!!oneRow) {
		firstRow = thumbnails.slice(0, _numOfImgs);
	} else {
		thumbnails.slice(0, _numOfImgs).map((item, index) => {
			if (index < 2) {
				if ((index % 2) == 0) firstRow.push(item);
				else secondRow.push(item);
			} else {
				if ((index % 2) == 0) secondRow.push(item);
				else firstRow.push(item);
			}
		});
	}
	const leftPlus = thumbnails.length - _numOfImgs + 1;

	return (
		<Container height={(!!oneRow) ? (150) : 250}>
			{firstRow.length > 0 &&
			<Row>
				{firstRow.map((item, index) => {
					return (<ImageContainer key={item.thumbnail + index}>
						{(!!oneRow) && (leftPlus > 0) && (index == firstRow.length - 1) &&
						<ImageLeft>
							<Text color={'white'} fontSize={'32'}>+{leftPlus}</Text>
						</ImageLeft>}
						<ImageThumnail source={{ uri: item.thumbnail }} />
					</ImageContainer>)
				})}
			</Row>}
			{secondRow.length > 0 &&
			<Row>
				{secondRow.map((item, index) => {
					return (<ImageContainer key={item.thumbnail + index}>
						{(leftPlus > 0) && (index == secondRow.length - 1) &&
						<ImageLeft>
							<Text color={'white'} fontSize={'32'}>+{leftPlus}</Text>
						</ImageLeft>}
						<ImageThumnail source={{ uri: item.thumbnail }} />
					</ImageContainer>)
				})}
			</Row>}
		</Container>
	)
}

export default ThumbnailsGrid;
