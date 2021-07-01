import React, {useEffect} from 'react'
import Text from '~/ui/primitives/Text'
import Container from '~/ui/layout/Container'
import {ScrollView } from 'react-native'
import styled from 'styled-components';
import GroupList from './List'

const CScrollView = styled(ScrollView)`
	margin-top: 8px;
	height: 100%;
	background-color: #fff;
`

const CContainer = styled(Container)`
	padding: 12px 16px;
`

export default function Group ({getGroupList, groupList}) {
	useEffect(() => {
		getGroupList()
	}, [])
	return (
		<CScrollView >
			<CContainer>
				<Text mb='12px' fontSize='17px' fontWeight={700}>All company</Text>
				<GroupList groupList={groupList} />
			</CContainer>
		</CScrollView>
	)
}