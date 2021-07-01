import React from 'react'
import Container from '~/ui/layout/Container'
import Text from '~/ui/primitives/Text'
import Image from '~/ui/primitives/Image'
import styled from 'styled-components'
import Icon from '~/ui/common/Icon'
import {TouchableOpacity} from 'react-native'
import {useNavigation} from '@react-navigation/native'

const CImage = styled(Image)`
	width: 40px;
	height: 40px;
	border-radius: 20px;
`

export default function ListItem(props) {
	const {groupData, navigate = true} = props
	const navigation = useNavigation()
	const {name} = groupData
	console.log(groupData)
	const onToGroupDetail = groupData => {
		navigate && navigation.push('GroupDetail', {groupData})
	}

	return (
		<Container mb='20px'>
			<TouchableOpacity onPress={() => onToGroupDetail(groupData)}>
				<Container flexDirection='row' justifyContent='space-between' alignItems='center' >
					<Container  flexDirection='row' alignItems='center'>
						<CImage source={{uri: 'https://i.pravatar.cc/50'}} />

						<Container ml='11px' >
							<Text fontWeight={600}>{name}</Text>
							<Text color='#828282' fontWeight={400}>{'Active 2 hours ago'}</Text>
						</Container>
					</Container>
					{navigate && (
						<Icon  color='#828282' name='chevron-right' />
					)}
				</Container>
			</TouchableOpacity>
		</Container>

	)
}