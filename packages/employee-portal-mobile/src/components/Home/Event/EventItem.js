import React from 'react';

import styled from 'styled-components';

import View from '~/ui/primitives/View';
import Text from '~/ui/primitives/Text';
import LocationIcon from '~/ui/common/Icon/Svg/LocationIcon';
import Avatar from '~/components/common/Profile/Avatar'

const Container = styled(View)`
  background: #FFFFFF;
  box-shadow: 0px 2px 12px rgba(0, 0, 0, 0.06);
  border-radius: 10px;
  flex-direction: row;
  margin: 0 8px 16px 8px;
`;

const Content = styled(View)`
  flex: 1;
`;

const Marker = styled(View)`
  background: #000000;
  border-top-left-radius: 10px;
  border-bottom-left-radius: 10px;
  width: 5px;
  height: 110px;
  margin-right: 8px;
`;

const Title = styled(Text)`
  font-size: 16px;
  font-weight: bold;
`;

const LocationText = styled(Text)`
  margin-left: 4px;
  font-size: 13px;
  ${({ isActive }) => isActive ? `
  color: #FFF;
  ` : ''}
`;

const Row = styled(View)`
  flex-direction: row;
  margin-top: 12px;
  margin-bottom: 0px;
`;

export default function EventItem({ event: { title, time, location, members } }) {
  return (<Container>
    <Marker />
    <Content>
      <Row style={{ justifyContent: 'space-between' }}>
        <Title>{title}</Title>
        <Title>{time}</Title>
      </Row>
      <Row>
        <LocationIcon />
        <LocationText>{location}</LocationText>
      </Row>
      <Row>
        {members.map(m => (
          <Avatar
            key={m.id}
            size={24}
            style={{ marginRight: 6 }}
            source={{ uri: m.photo }}
          />
        ))}
      </Row>
    </Content>
  </Container>);
}
