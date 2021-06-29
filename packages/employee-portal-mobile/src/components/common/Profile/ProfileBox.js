import React, { Profiler } from 'react';
import styled from 'styled-components';

import View from '~/ui/primitives/View';
import Touchable from '~/ui/primitives/Touchable';
import Text from '~/ui/primitives/Text';
import Avatar from './Avatar';

const Container = styled(View)`
  flex: 1;
  flex-direction: row;
  height: 40px;
`;

const Content = styled(View)`
  flex: 1;
  margin-left: 8px;
`;

const Name = styled(Text)`
  font-weight: bold;
  font-size: 13px;
  color: #000;
`;

const Description = styled(Text)`
  color: #828282;
  font-size: 12px;
`;

function formatDomain(domain) {
  return domain && `${domain}@vng.com.vn`;
}

function ProfileBox({ profile, userDomain, fetchProfile }) {
  const { name, photo, title, description, domain, error } = profile || {};
  React.useEffect(() => {
    if (!profile) {
      fetchProfile();
    }
  }, [profile]);

  function showProfile() { }

  if ((error && !userDomain) || !profile || !profile.userId && !userDomain) {
    return null;
  }

  const displayDomain = formatDomain(domain || userDomain);
  return (
    <Touchable flex={1} onPress={showProfile}>
      <Container>
        <Avatar
          width="40"
          height="40"
          source={{ uri: photo, text: name || displayDomain }}
        />
        <Content>
          <Name>{name || userDomain}</Name>
          <Description>{description || title || displayDomain}</Description>
        </Content>
      </Container>
    </Touchable>
  )
}

export default ProfileBox;
