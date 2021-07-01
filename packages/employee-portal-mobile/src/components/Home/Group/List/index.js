import React from 'react'
import Container from '~/ui/layout/Container'
import ListItem from '../ListItem/index'
 
export default function GroupList(props) {
	const {groupList = []} = props
	return (
		<Container>
			{groupList.length > 0 && groupList.map((item, idx) => (
				<ListItem key={idx} groupData={item} />
			))}
		</Container>
	)
}