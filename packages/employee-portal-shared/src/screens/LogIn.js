import React from 'react'
import Container from '../components/layout/Container';
import View from '../components/primitives/View';
import ScrollView from '../components/common/ScrollView';
import Image from '../components/primitives/Image'
import Background from '../../assets/images/LogInBackground.png'
import Text, { Heading3, Heading2 } from '../components/primitives/Text';
import Button from '../components/common/Button';
import Office365 from '../../assets/icons/Office365.png'
import Icon from '../components/common/Icon';
import { colors } from '../styles/themes/light'

export default function LogIn(props) {
  const { onLogin } = props

  const onLoginPress = () => {
    onLogin && onLogin()
  }

  return (
    <Container
      flex={1}
      justifyContent='flex-start'
    >
      <ScrollView
      >
        <Image style={{ width: '100%' }} source={Background} />
        <View style={{ paddingHorizontal: 30 }}>
          <View marginTop={30}>
            <Heading2 m={10}>
              Hello there
              {"\n"}<Heading2 fontWeight='bold' m={10}>
                Wellcome back!
						</Heading2>
            </Heading2>
            <Text>Build technologies and grow people. For a better life.</Text>
          </View>

          <View marginTop={90}>
            <Button icon={Office365} onPress={onLoginPress} variant='outrageousOrangeBig' text='Login with Office 365'
            />
          </View>

          <View marginTop={25} justifyContent='center' alignItems='center' flexDirection='row'>
            <Text fontWeight='bold'>English</Text>
            <View
              style={{
                marginHorizontal: 10,
                borderLeftWidth: 1,
                borderLeftColor: '#828282',
                height: '80%'
              }}
            />
            <Text variant='dimmed' >Vietnamese</Text>
          </View>
          <View marginTop={100} marginBottom={30} flexDirection='row' justifyContent='center'>
            <View marginRight={60} alignItems='center' justifyContent='center'>
              <Icon name='info-outline' color='black' />
              <Text style={{ marginTop: 5 }}>About</Text>
            </View>
            <View alignItems='center' justifyContent='center'>
              <Icon name='phone-in-talk' color='black' />
              <Text style={{ marginTop: 5 }}>Help</Text>
            </View>
          </View>
        </View>
      </ScrollView>
    </Container>
  )
}