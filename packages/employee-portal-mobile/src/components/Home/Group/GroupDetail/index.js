import React from 'react'
import {ImageBackground, TouchableOpacity, Dimensions, ScrollView} from 'react-native'
import Background from '~/assets/images/group_background.png'
import styled from 'styled-components'
import Text from '~/ui/primitives/Text'
import Icon from '~/ui/common/Icon'
// import PostList from '~/components/Home/Feed/List'
import {useNavigation} from '@react-navigation/native'
import PostForm from '~/components/common/PostForm'
// import Post from '~/components/Home/Feed/List/Item'

const CImageBackground = styled(ImageBackground)`
	height: 112px;
  width: ${Dimensions.get('window').width}px;
	padding-top: 40px;
	padding-left: 10px;
	flex-direction: row;
	align-items: center;
`

  const items = [
    {
      id: '1',
      from: {
        id: '1',
        name: 'Doanh. Vo Thi My',
        photo: 'https://i.pravatar.cc/50',
        description: '2 hours',
        group: { name: 'IT Helpdesk' }
      },
      to: {
        name: 'IT Helpdesk'
      },
      feed: {
        id: '1',
        liked: true,
        comments: 10,
        likes: 200,
        content: `VNG x UNILEVER | ƯU ĐÃI MUA HÀNG KHỦNG DÀNH CHO STARTER
Chương trình ưu đãi nội bộ của Unilever dành cho VNG, khi Starter mua sắm trên U-shop.vn sẽ được nhận thêm cho mình những ưu đãi hấp dẫn`,
        photo: 'https://picsum.photos/400/200'
      }
    },
    {
      id: '2',
      from: {
        id: '2',
        name: 'Doanh. Vo Thi My',
        photo: 'https://i.pravatar.cc/100',
        description: '2 hours',
        group: { name: 'IT Helpdesk' }
      },
      to: {
        name: 'Life at VNG'
      },
      feed: {
        id: '2',
        liked: false,
        comments: 100,
        likes: 200,
        content: `VNG x UNILEVER | ƯU ĐÃI MUA HÀNG KHỦNG DÀNH CHO STARTER

Chương trình ưu đãi nội bộ của Unilever dành cho VNG, khi Starter mua sắm trên U-shop.vn sẽ được nhận thêm cho mình những ưu đãi hấp dẫn`,
        photo: 'https://picsum.photos/400/200'
      }
    },
    {
      id: '3',
      from: {
        id: '3',
        name: 'Doanh. Vo Thi My',
        photo: 'https://i.pravatar.cc/100',
        description: '2 hours',
        group: { name: 'IT Helpdesk' }
      },
      to: {
        name: 'IT Helpdesk'
      },
      feed: {
        id: '3',
        liked: true,
        comments: 10,
        likes: 200,
        content: `VNG x UNILEVER | ƯU ĐÃI MUA HÀNG KHỦNG DÀNH CHO STARTER

Chương trình ưu đãi nội bộ của Unilever dành cho VNG, khi Starter mua sắm trên U-shop.vn sẽ được nhận thêm cho mình những ưu đãi hấp dẫn`,
        photo: 'https://picsum.photos/400/200'
      }
    },
  ];


export default function GroupDetail(props) {
	const groupData = props.route.params?.groupData
	const navigation = useNavigation()

	return (
		<>
			<TouchableOpacity onPress={() => navigation.goBack()}>
				<CImageBackground source={Background}>
					<Icon name='chevron-left' size={40} color='#fff' />
					<Text fontWeight={700} fontSize='20px' color='#fff'>{groupData.name}</Text>
				</CImageBackground>
			</TouchableOpacity>
			<ScrollView>
				<PostForm to={groupData.name} owner={{ name: 'Lực', photo: 'https://i.pravatar.cc/50' }} />
        {/* {items.map(i => (
					<Post
						key={i.id}
						item={i}
					/>
				))} */}
			</ScrollView>
		</>
	)
}