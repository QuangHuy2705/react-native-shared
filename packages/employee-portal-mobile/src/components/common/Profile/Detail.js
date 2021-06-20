import React from 'react'
import Container from 'employee-portal-shared/src/components/layout/Container';
import Text from 'employee-portal-shared/src/components/primitives/Text';
import RowsWithText from '~/ui/utils/RowsWithText';

export default function Detail(props) {

  const infoData = {
    titleStyle: {},
    contentStyle: {},
    texts: [
      {
        title: 'Display name',
        content: 'Luc. Mai Van'
      },
      {
        title: 'Job title',
        content: 'Designer'
      },
      {
        title: 'Department',
        content: 'Luc. Mai Van'
      },
      {
        title: 'Office',
        content: 'VNG Campus'
      },
      {
        title: 'Seat',
        content: 'G-119'
      },
    ]
  }

  const contactData = {

    contentStyle: {},
    texts: [
      {
        title: 'Phone number',
        content: '+84 383 708 182'
      },
      {
        title: 'Zalo number',
        content: '+84 383 708 182'
      },
    ]
  }

  return (
    <>
      <Container mt='10px' pt='16px' pl='16px' >
        <Container flex={1}>
          <Text fontSize='17px' fontWeight='bold'>Current Position</Text>
          <RowsWithText data={infoData} />
        </Container>
      </Container>

      <Container mt='10px' pt='16px' pl='16px' >
        <Container flex={1}>
          <Text fontSize='17px' fontWeight='bold'>Personal contact</Text>
          <RowsWithText data={contactData} />
        </Container>
      </Container>
    </>
  )
}