
import React from 'react';

import styled from 'styled-components';
import View from '~/ui/primitives/View';
import Touchable from '~/ui/primitives/Touchable';
import { Heading4 as Heading, Paragraph } from '~/ui/primitives/Text';

const Container = styled(Touchable)`
    background: transparent;
`;

const Wrapper = styled(View)`
  flex-direction: row;
  justify-content: center;
  margin-bottom: 8px;

  ${({ isLast }) => !isLast && `
    border-color: #A7A7A77A;
    border-bottom-width: 0.5px;
    padding-bottom: 12px;
    margin-bottom: 16px;
  `}
`;

const Content = styled(View)`
  margin-left: 8px;
  flex: 1;
`;

const Title = styled(Heading)`
  font-size: 14px;
  font-weight: 500;
  padding: 0;
  margin: 0 0 4px 0;
`;

const Description = styled(Paragraph)`
  font-size: 14px;
  padding: 0;
  margin: 0 3px 0 0;
`;

function Item({ item, isLast, onPress }) {
  const { icon: Icon, title, description, descriptions } = item;
  return (
    <Container
      onPress={() => onPress(item)}
    >
      <Wrapper isLast={isLast}>
        <Icon />
        <Content>
          <Title>{title}</Title>
          <Description>
            {description || descriptions.map((d) => (
              <Description
                style={d.style}
                key={d.id}
              >
                {d.text}
              </Description>
            ))}
          </Description>
        </Content>
      </Wrapper>
    </Container>
  );
}

export default Item;
