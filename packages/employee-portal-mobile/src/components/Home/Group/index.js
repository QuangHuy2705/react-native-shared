import React from 'react'
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

const groups = [
	{category: 'All Groups', groups: [
		{name: 'Life at VNG', description: 'Last active 2 hours ago'},
		{name: 'VNG Upfit gym', description: 'Last active 2 hours ago'}
	]},
	{category: 'Support Groups', groups: [
		{name: 'AF Helpdesk', description: 'Last active 2 hours ago'},
		{name: 'IT Helpdesk', description: 'Last active 2 hours ago'}
	]}
]

export default function Group (props) {

	return (
		<CScrollView >
			{groups.map((gr, idx) => (
				<CContainer key={idx}>
					<Text fontSize='17px' fontWeight={700}>{gr.category}</Text>
					<GroupList groupsData={gr.groups} />
				</CContainer>
			))}
		</CScrollView>
	)
}