import React from 'react'
import Container from 'employee-portal-shared/src/components/layout/Container';
import Text from 'employee-portal-shared/src/components/primitives/Text';

const defaultData = { 
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

export default function RowsWithText(props) {
  const { data = defaultData } = props

  const titleStyle = data.titleStyle ? {
    lineHeight: '17px', color: '#4f4f4f', fontSize: '11px',
    ...data.titleStyle
  } : {
    lineHeight: '17px', color: '#4f4f4f', fontSize: '11px',
  }

  const contentStyle = data.contentStyle ? {
    fontWeight: 600, lineHeight: '19px', fontSize: '13px',
    ...data.contentStyle
  } : {
    fontWeight: 600, lineHeight: '19px', fontSize: '13px',
  }

  return (
    <Container>
      {data.texts?.length > 0 && data.texts.map((row, idx) => {
        return (
          <Container key={idx} borderColor='#A7A7A7' borderBottomWidth={idx === data.texts.length - 1 ? 0 : 0.2} p='10px 0'>
            <Text {...titleStyle}>{row.title}</Text>
            <Text {...contentStyle} >{row.content}</Text>
          </Container>
        )
      })}
    </Container>
  )
}