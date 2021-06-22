import React from 'react';

import styled from 'styled-components';


import View from '~/ui/primitives/View';
import Touchable from '~/ui/primitives/Touchable';
import HomeIcon from '~/ui/common/Icon/Svg/HomeIcon';
import BusinessIcon from '~/ui/common/Icon/Svg/BusinessIcon';
import PieIcon from '~/ui/common/Icon/Svg/PieIcon';
import UserIcon from '~/ui/common/Icon/Svg/UserIcon';

const Container = styled(View)`
  padding: 16px 12px 32px 12px;
  flex-direction: row;
  align-items: center;
  justify-content: space-around;
`;

const Icons = {
  'Home': HomeIcon,
  'Work': BusinessIcon,
  'Workplace': PieIcon,
  'Profile': UserIcon,
}

function BottomTab({ state, descriptors, navigation }) {
  const focusedOptions = descriptors[state.routes[state.index].key].options;
  const { routes } = state;
  if (focusedOptions.tabBarVisible === false) {
    return null;
  }

  return (
    <Container>
      {routes.map((route, index) => {
        const { options } = descriptors[route.key];
        const label =
          options.tabBarLabel !== undefined
            ? options.tabBarLabel
            : options.title !== undefined
              ? options.title
              : route.name;

        const isFocused = state.index === index;

        const onPress = () => {
          const event = navigation.emit({
            type: 'tabPress',
            target: route.key,
            canPreventDefault: true,
          });

          if (!isFocused && !event.defaultPrevented) {
            navigation.navigate(route.name);
          }
        };

        const onLongPress = () => {
          navigation.emit({
            type: 'tabLongPress',
            target: route.key,
          });
        };

        const Icon = Icons[route.name];
        return Icon && (
          <Touchable
            key={route.name}
            onPress={onPress}
            onLongPress={onLongPress}
          >
            <Icon color={isFocused ? '#000' : '#A7A7A7'} />
          </Touchable>
        );
      })}
    </Container>
  );
}

export default BottomTab;

