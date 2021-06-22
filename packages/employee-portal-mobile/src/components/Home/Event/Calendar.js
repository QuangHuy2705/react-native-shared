import React from 'react';

import styled from 'styled-components';

import View from '~/ui/primitives/View';
import Text from '~/ui/primitives/Text';

const Container = styled(View)`
  background: #fff;
  margin-top: 16px;
  padding: 16px 8px;
`;

const Row = styled(View)`
  flex-direction: row;
`;

const Box = styled(View)`
  width: 30px;
  height: 30px;
  margin-top: 8px;
  margin-right: 16px;
  border-radius: 15px;
  align-items: center;
  justify-content: center;
  ${({ isActive }) => isActive ? `
  background: #F15A22;
  color: #FFF;
  ` : ''}
`;

const Title = styled(Text)`
  font-size: 16px;
  font-weight: bold;
  margin-left: 8px;
`;

const ItemText = styled(Text)`
  font-size: 13px;
  ${({ isActive }) => isActive ? `
  color: #FFF;
  ` : ''}
`;

export default function Calendar() {
  const dates = ['28', '29', '30', '31', '01', '02', '03', '04'];
  return (<Container>
    <Row>
      <Title>October 2021</Title>
    </Row>
    <Row style={{ justifyContent: 'space-around' }}>
      {dates.map(d => (
        <Box key={d} isActive={d === '01'}>
          <ItemText isActive={d === '01'}>{d}</ItemText>
        </Box>
      ))}
    </Row>
  </Container>);
}
