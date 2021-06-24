import React from 'react'

import styled from 'styled-components';

import { Dimensions, ActivityIndicator } from 'react-native';
import { WebView } from 'react-native-webview';

import View from '~/ui/primitives/View';
import Touchable from '~/ui/primitives/Touchable';
import SafeSpace from '~/components/common/SafeSpace';
import CloseIcon from '~/ui/common/Icon/Svg/CloseIcon';

import AzureAuth from './AzureAuth';

const Container = styled(View)`
  flex: 1;
  align-self: stretch;
  width: ${Dimensions.get('window').width}px;
  height: ${Dimensions.get('window').height}px;
  align-items: center;
  justify-content: center;
`;

const WebViewWrapper = styled(WebView)`
  flex: 1;
  align-self: stretch;
  width: ${Dimensions.get('window').width}px;
  height: ${Dimensions.get('window').height}px;
`;

const CloseBtn = styled(Touchable)`
  position: absolute;
  top: 52px;
  right: 16px;
`;

export default class AzureLoginView extends React.Component {
  constructor(props) {
    super(props);
    const { azureInstance } = props;
    this.auth = new AzureAuth(azureInstance);
    this.state = {
      showWebView: true,
      cancelled: false,
    };
    this.js = `document.getElementsByTagName('body')[0].style.height = '${Dimensions.get('window').height}px';`
  }

  handleTokenRequest = async (e) => {
    const { azureInstance, onSuccess } = this.props;
    let code = /((\?|\&)code\=)[^\&]+/.exec(e.url);
    if (code) {
      code = String(code[0]).replace(/(\?|\&)?code\=/, '');
      this.setState({ showWebView: false });
      try {
        const token = await this.auth.getTokenFromCode(code);
        azureInstance.setToken(token);
        onSuccess();
        return;
      } catch (err) {
        throw new Error(err);
      }
    }

    const { cancelled } = this.state;
    const { onCancel } = this.props;
    if (!cancelled && onCancel && e.url.indexOf('error=access_denied') > -1) {
      this.setState({ cancelled: true, visible: false });
      onCancel();
    }
  }

  render() {
    const { onCancel } = this.props;
    const { showWebView } = this.state;
    return (
      <Container>
        <SafeSpace />
        {showWebView
          ? (
            <WebViewWrapper
              automaticallyAdjustContentInsets={true}
              source={{ uri: this.auth.getAuthUrl() }}
              javaScriptEnabled={true}
              domStorageEnabled={true}
              decelerationRate="normal"
              javaScriptEnabledAndroid={true}
              onNavigationStateChange={this.handleTokenRequest}
              onShouldStartLoadWithRequest={() => { return true; }}
              startInLoadingState={true}
              injectedJavaScript={this.js}
              scalesPageToFit={true}
            />)
          : (<ActivityIndicator />)
        }
        <CloseBtn onPress={onCancel}>
          <CloseIcon color="#6A6A6A" />
        </CloseBtn>
      </Container>
    );
  }
}
