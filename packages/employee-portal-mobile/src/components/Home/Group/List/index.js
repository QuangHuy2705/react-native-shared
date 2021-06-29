import React from 'react'
import Container from '~/ui/layout/Container'
import ListItem from '../ListItem/index'
 
export default function GroupList(props) {
	const {groupsData = []} = props
	return (
		<Container>
			{groupsData.length > 0 && groupsData.map((item, idx) => (
				<ListItem key={idx} groupData={item} />
			))}
		</Container>
	)
}