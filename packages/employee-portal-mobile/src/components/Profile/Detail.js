import React from 'react'
import Container from '~/ui/layout/Container';
import Text from '~/ui/primitives/Text';
import RowsWithText from '~/ui/utils/RowsWithText';
import Icon from '~/ui/common/Icon';

export default function Detail(props) {
  const { onToContactEdit, profile } = props

  const infoData = {
    titleStyle: {},
    contentStyle: {},
    texts: [
      {
        title: 'Display name',
        content: profile.displayName
      },
      {
        title: 'Job title',
        content: profile.title || 'N/A'
      },
      {
        title: 'Department',
        content: profile.department || 'N/A'
      },
      {
        title: 'Office',
        content: profile.office || 'N/A'
      },
      {
        title: 'Seat',
        content: profile.seat || 'N/A'
      },
    ]
  }

  const contactData = {

    contentStyle: {},
    texts: [
      {
        title: 'Phone number',
        content: profile.phone || 'N/A'
      },
      {
        title: 'Zalo number',
        content: profile.zalo || 'N/A'
      },
      {
        title: 'Email',
        content: profile.personalEmail || 'N/A'
      }
    ]
  }

  return (
    <>
      <Container mt='10px' pt='16px' pl='16px' >
        <Container >
          <Text fontSize='17px' fontWeight='bold'>Current Position</Text>
          <RowsWithText data={infoData} />
        </Container>
      </Container>

      <Container mt='10px' p='16px 16px 0 16px' >
        <Container >
          <Container flexDirection='row' alignItems='center' justifyContent='space-between'>
            <Text fontSize='17px' fontWeight='bold'>Personal contact</Text>
            <Icon onClick={onToContactEdit} size={15} name='edit' />
          </Container>
          <RowsWithText data={contactData} />
        </Container>
      </Container>
    </>
  )
}