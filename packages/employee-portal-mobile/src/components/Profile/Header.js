import React from 'react'
import Container from '~/ui/layout/Container';
import Text from '~/ui/primitives/Text';
import View from '~/ui/primitives/View';
import Image from '~/ui/primitives/Image';
import IconVector from 'react-native-vector-icons/MaterialIcons';
import { StatusBar, Platform, TouchableOpacity } from 'react-native';

import HeartIcon from '~/ui/common/Icon/Svg/HeartIcon';
import EmailIcon from '~/assets/icons/email_icon.png'
import QRIcon from '~/assets/icons/qr_icon.png'

import AvatarPicker from './AvatarPicker'

export default function Header(props) {
  const IOS_STATUS_BAR_HEIGHT = 20;
  const ANDROID_STATUS_BAR_HEIGHT = StatusBar.currentHeight || 24;
  const STATUS_BAR_HEIGHT = Platform.OS === 'ios' ? IOS_STATUS_BAR_HEIGHT : ANDROID_STATUS_BAR_HEIGHT;
  const { profile, onSelectImage } = props
  const name = profile.displayName.split(/\s/)[0];

  return (
    <>
      <Container p={`${24 + STATUS_BAR_HEIGHT}px 16px 0px 16px`} flexDirection='row' justifyContent='space-between'>
        <Text variant='h3' fontWeight='bold'>
          Profile
        </Text>
        <TouchableOpacity onPress={props.onToSetting}>
          <IconVector size={20} name='settings' />
        </TouchableOpacity>
      </Container>

      <Container p='0 16px' flexDirection='row'>
        <AvatarPicker
          onSelectImage={onSelectImage}
          avatar={{ uri: profile.avatar, text: profile.displayName }}
        />
        <Container p='5px 0' ml={'10px'} justifyContent='space-around'>
          <Text fontWeight='bold'>
            Good moring{name ? `, ${name}` : ''}!
          </Text>
          <View flexDirection='row' alignItems='center'>
            <HeartIcon />
            <Text m="0 2px" >
              10 years and 70 days of work
            </Text>
          </View>
        </Container>
      </Container>

      <Container p='20px 30px' flexDirection='row' justifyContent='space-between'>
        <Container alignItems='center' flexDirection='row' >
          <Image source={QRIcon} />
          <Text ml='8px'>
            {profile.code || 'N/A'}
          </Text>
        </Container>

        <Container alignItems='center' flexDirection='row' >
          <Image source={EmailIcon} />
          <Text ml='8px'>
            {profile.domain ? `${profile.domain}@vng.com.vn` : 'N/A'}
          </Text>
        </Container>
      </Container>
    </>
  )
}
