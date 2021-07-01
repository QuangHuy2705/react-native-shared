import React, {useState} from 'react'
import {TouchableOpacity, TextInput} from 'react-native'
import Container from '~/ui/layout/Container'
import styled from 'styled-components'
import Icon from 'react-native-vector-icons/FontAwesome';
import MIcon from '~/ui/common/Icon'
import Text from '~/ui/primitives/Text'
import Image from '~/ui/primitives/Image'

const CImage = styled(Image)`
	width: 36px;
	height: 36px;
	border-radius: 18px;
`

const CContainer = styled(Container)`
	border-radius: 5px;
	border: 0.5px solid rgba(189, 189, 189, 0.5);
	padding: 4px 8px;
	flex-direction: row; 
	align-items: center;
`

const ContainerBotBorder = styled(Container)`
	border-bottom-width: 0.5px;
	border-bottom-color: rgba(189, 189, 189, 0.5);
	padding: 16px
`
const SelectedImage = styled(Image)`
	height: 111px;
	width: 111px;
	border-radius: 10px;
	margin-right: 5px;
`

export default function PostFormModal({route, navigation}) {
	const [text, setText] = useState('')
	const {name, params} = route
	const title = params?.title ? params?.title : name
	const user = params?.user || {name: 'Lực. Mai Văn', photo: 'https://i.pravatar.cc/50'}
	let valid = text !== ''

	React.useLayoutEffect(() => {
		navigation.setOptions({
			headerRight: () => (
				<TouchableOpacity >
					<Text color={valid ? '#000' : '#a7a7a7'} mr='17px' fontSize='17px' fontWeight={700} >Post</Text>
				</TouchableOpacity>
			),
			headerLeft: () => (
				<TouchableOpacity onPress={() => navigation.goBack()} >
					<MIcon style={{ marginLeft: 17 }} size={21} name="close" />
				</TouchableOpacity>
			),
			title: title
		});
	}, [navigation, valid]);

	return (
		<Container flex={1}>
			<Container  p='16px 16px 0 16px' alignItems='center' flexDirection='row' >
				<CImage  source={{uri: 'https://i.pravatar.cc/50'}} />
				<Container ml='8px' >
					<Text fontSize='12px' fontWeight={700}>{user.name}</Text>
					<CContainer >
						<Icon color='#BDBDBD' name='group' />
						<Text ml='5px' color='#BDBDBD'>{title}</Text>
					</CContainer>
				</Container>
			</Container>
			<ContainerBotBorder >
				<TextInput value={text} onChangeText={setText} style={{ height:150, textAlignVertical: 'top'}} numberOfLines={10} multiline={true} placeholder={`What's on your mind, ${user.name}?`} />
			</ContainerBotBorder>
			<Container p='12px 16px'>
				<Text fontSize='14px' fontWeight={700}>Choose Photo</Text>
				<Text color='#BDBDBD' fontSize='14px' >Maximum <Text fontWeight={700} fontSize='13'>3 images</Text> are allowed</Text>
				<Container mt='10px' flexDirection='row'>
					<SelectedImage source={{uri: 'https://i.pravatar.cc/50'}}></SelectedImage>
					<SelectedImage source={{uri: 'https://i.pravatar.cc/50'}}></SelectedImage>
					<SelectedImage source={{uri: 'https://i.pravatar.cc/50'}}></SelectedImage>
				</Container>
			</Container>
		</Container>
	)
}