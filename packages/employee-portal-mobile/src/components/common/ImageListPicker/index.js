import React from 'react'
import Image from '~/ui/primitives/Image'
import styled from 'styled-components'
import Container from '~/ui/layout/Container'

const SelectedImage = styled(Image)`
	height: 111px;
	width: 111px;
	border-radius: 10px;
	margin-right: 5px;
`


export default function ImageListPicker(props) {

	return (
		<Container mt='10px' flexDirection='row'>
			<SelectedImage source={{uri: 'https://i.pravatar.cc/50'}}></SelectedImage>
			<SelectedImage source={{uri: 'https://i.pravatar.cc/50'}}></SelectedImage>
			<SelectedImage source={{uri: 'https://i.pravatar.cc/50'}}></SelectedImage>
		</Container>
	)
}