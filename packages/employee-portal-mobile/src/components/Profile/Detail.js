import React from 'react'
import Container from '~/ui/layout/Container';
import Text from '~/ui/primitives/Text';
import RowsWithText from '~/ui/utils/RowsWithText';
import Icon from '~/ui/common/Icon';

export default function Detail(props) {
	const {onToContactEdit} = props

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
			{
				title: 'Email',
				content: 'maivanluc1597@gmail.com'
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