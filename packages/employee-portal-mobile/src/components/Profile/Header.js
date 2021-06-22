import React from 'react'
import Container from '~/ui/layout/Container';
import Text from '~/ui/primitives/Text';
import Image from '~/ui/primitives/Image';
import IconVector from 'react-native-vector-icons/MaterialIcons';
import { StatusBar, Platform, TouchableOpacity } from 'react-native';
import EmailIcon from 'employee-portal-shared/assets/icons/email_icon.png'
import QRIcon from 'employee-portal-shared/assets/icons/qr_icon.png'
import AvatarPicker from './AvatarPicker'

export default function Header(props) {
  const IOS_STATUS_BAR_HEIGHT = 20;
  const ANDROID_STATUS_BAR_HEIGHT = StatusBar.currentHeight || 24;
  const STATUS_BAR_HEIGHT = Platform.OS === 'ios' ? IOS_STATUS_BAR_HEIGHT : ANDROID_STATUS_BAR_HEIGHT;
	const {user, onSelectImage} = props

  return (
    <>
      <Container p={`${24 + STATUS_BAR_HEIGHT}px 16px 16px 16px`} flexDirection='row' justifyContent='space-between'>
        <Text variant='h3' fontWeight='bold'>
          Profile
				  </Text>
				<TouchableOpacity onPress={props.onToSetting}>
        	<IconVector size={20} name='settings' />
				</TouchableOpacity>
      </Container>

      <Container p='0 16px' flexDirection='row'>
				<AvatarPicker onSelectImage={onSelectImage} imgSource={user.avatar} />
				
        <Container p='5px 0' ml={'10px'} justifyContent='space-around'>
          <Text fontWeight='bold'>
            Good moring, Luc!
				    </Text>
          <Text>
            10 years and 70 days of work
				    </Text>
        </Container>
      </Container>

      <Container p='20px 30px' flexDirection='row' justifyContent='space-between'>
        <Container alignItems='center' flexDirection='row' >
          <Image source={QRIcon} />
          <Text ml='8px'>
            VG-00000
				    </Text>
        </Container>

        <Container alignItems='center' flexDirection='row' >
          <Image source={EmailIcon} />
          <Text ml='8px'>
            lucmv@vng.com.vn
				    </Text>
        </Container>
      </Container>
    </>
  )
}