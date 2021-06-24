import React from 'react'

import Container from '~/ui/layout/Container';
import View from '~/ui/primitives/View';
import ScrollView from '~/ui/common/ScrollView';
import Image from '~/ui/primitives/Image'
import Background from '~/assets/images/LogInBackground.png'
import Text, { Heading2 } from '~/ui/primitives/Text';
import Button from '~/ui/common/Button';
import Office365 from '~/assets/icons/Office365.png'

import { AzureInstance, AzureLoginView } from '~/components/common/AzureAD';

import AzureConfig from './AzureConfig';

const LOG_IN_AZUREAD = 'LOG_IN_AZUREAD';

export default class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = { mode: null };
    this.azureInstance = new AzureInstance(AzureConfig);
  }

  onAzureSuccess = async () => {
    this.setState({ mode: null });
    try {
      const { onSignedIn } = this.props;
      const { mail } = await this.azureInstance.getUserInfo();
      const [domain] = mail.split('@');
      onSignedIn(domain, `${domain}@123456`);
    } catch (err) {
      console.log(err);
    }
  }

  onAzureCancel = () => this.setState({ mode: null });

  render() {
    const { mode } = this.state;
    if (mode === LOG_IN_AZUREAD) {
      return (
        <AzureLoginView
          azureInstance={this.azureInstance}
          onSuccess={this.onAzureSuccess}
          onCancel={this.onAzureCancel}
        />
      );
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

            <View marginTop={70}>
              <Button
                style={{ overflow: 'hidden' }}
                icon={Office365}
                variant='outrageousOrangeBig'
                onPress={() => this.setState({ mode: LOG_IN_AZUREAD })}
                text='Login with Office 365'
              />
            </View>

            <View marginTop={100} justifyContent='center' alignItems='center' flexDirection='row'>
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
          </View>
        </ScrollView>
      </Container>
    );
  }
}
