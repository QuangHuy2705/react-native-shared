
import React, { PureComponent, useState } from 'react';
import View from '~/ui/primitives/View';
import ScrollView from '~/ui/common/ScrollView';
import styled from 'styled-components';

import Detail from './Detail';
import Header from './Header';

import Avatar from 'employee-portal-shared/assets/images/avatar.png'

const CContainer = styled(View)`
	background: transparent;
`;

export default function Profile(props) {
  const { navigation, profile } = props
  const [avatarUri, setAvatarUri] = useState(null);

  const onChangeAvatar = image => {
    setAvatarUri(image.path)
  }

  return (
    <CContainer
      flex={1}
    >
      <ScrollView>
        <Header
          onToSetting={() => navigation.navigate('Setting')}
          onSelectImage={onChangeAvatar}
          profile={{ ...profile, avatar: avatarUri }}
        />
        <Detail
          profile={profile}
          onToContactEdit={() => navigation.navigate('ContactEdit')}
        />
      </ScrollView>
    </CContainer >
  )
}
