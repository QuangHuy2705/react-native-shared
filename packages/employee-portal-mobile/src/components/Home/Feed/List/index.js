import React from 'react';

import styled from 'styled-components';

import View from '~/ui/primitives/View';

import PostStatusBox from './PostStatusBox';
import FeedItem from './Item';

const Container = styled(View)`
	background: transparent;
`;

function List({ onViewFeed }) {
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
        content: `
VNG x UNILEVER | ƯU ĐÃI MUA HÀNG KHỦNG DÀNH CHO STARTER

Chương trình ưu đãi nội bộ của Unilever dành cho VNG, khi Starter mua sắm trên U-shop.vn sẽ được nhận thêm cho mình những ưu đãi hấp dẫn
        `,
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
        content: `
VNG x UNILEVER | ƯU ĐÃI MUA HÀNG KHỦNG DÀNH CHO STARTER

Chương trình ưu đãi nội bộ của Unilever dành cho VNG, khi Starter mua sắm trên U-shop.vn sẽ được nhận thêm cho mình những ưu đãi hấp dẫn
        `,
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
        content: `
VNG x UNILEVER | ƯU ĐÃI MUA HÀNG KHỦNG DÀNH CHO STARTER

Chương trình ưu đãi nội bộ của Unilever dành cho VNG, khi Starter mua sắm trên U-shop.vn sẽ được nhận thêm cho mình những ưu đãi hấp dẫn
        `,
        photo: 'https://picsum.photos/400/200'
      }
    },
  ];

  return (
    <Container>
      <PostStatusBox owner={{ name: 'Lực', photo: 'https://i.pravatar.cc/50' }} />
      {items.map(i => (
        <FeedItem
          key={i.id}
          item={i}
          onViewFeed={onViewFeed}
        />
      ))}
    </Container>
  )
}

export default List;
