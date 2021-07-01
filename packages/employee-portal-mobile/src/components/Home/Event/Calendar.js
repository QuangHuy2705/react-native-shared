import React from 'react';

import styled from 'styled-components';
import moment from 'moment';

import View from '~/ui/primitives/View';
import Text from '~/ui/primitives/Text';
import Touchable from '~/ui/primitives/Touchable';
import PrevIcon from '~/ui/common/Icon/Svg/PrevIcon';
import NextIcon from '~/ui/common/Icon/Svg/NextIcon';

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

function getDates(marker) {
  const from = new Date(marker.getTime());
  from.setDate(from.getDate() - 4);
  from.setUTCHours(0, 0, 0);
  const dates = [];
  for (let i = 0; i < 8; ++i) {
    const date = new Date(from.getTime());
    date.setDate(date.getDate() + i);
    dates.push(date);
  }
  return dates;
}

export default function Calendar({ date, onChange }) {
  const [marker, setMarker] = React.useState(date);
  const dates = getDates(marker);
  const markerM = moment(marker);
  const dateId = moment(date).format('YYYY-MM-DD');

  function handleDayPress(d) {
    onChange(d);
  }

  function handleChangeMarker(direction) {
    const d = new Date(marker.getTime());
    d.setDate(d.getDate() + direction * 8);
    setMarker(d);
  }

  return (<Container>
    <Row style={{ alignItems: 'center' }}>
      <Title style={{ flex: 1 }}>{markerM.format('MMMM YYYY')}</Title>
      <Touchable
        onPress={() => handleChangeMarker(-1)}
        style={{ marginHorizontal: 12 }}
      >
        <PrevIcon />
      </Touchable>
      <Touchable
        onPress={() => handleChangeMarker(1)}
        style={{ marginRight: 16 }}
      >
        <NextIcon />
      </Touchable>
    </Row>
    <Row style={{ justifyContent: 'space-around' }}>
      {dates.map(d => {
        const m = moment(d);
        const value = m.format('DD');
        const id = m.format('YYYY-MM-DD');
        return (
          <Touchable key={id} onPress={() => handleDayPress(d)}>
            <Box isActive={dateId == id}>
              <ItemText isActive={dateId == id}>{value}</ItemText>
            </Box>
          </Touchable>
        );
      })}
    </Row>
  </Container>);
}
