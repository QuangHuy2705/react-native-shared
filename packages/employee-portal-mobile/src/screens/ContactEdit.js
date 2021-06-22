import React, {useState, useRef} from 'react'
import Text from '~/ui/primitives/Text';
import PhoneInput from "react-native-phone-number-input";
import View from '~/ui/primitives/View';
import styled from 'styled-components';
import Container from '~/ui/layout/Container';
import Icon from '~/ui/common/Icon';
import Input from '~/ui/common/Form/TextInput';

const CView = styled(View)`
	background: transparent;
`;

const SectionContainer = styled(Container)`
	margin: 16px 16px 0 16px;
`;

const ContactEdit = ({navigation}) => {

	const [phoneNumber, setPhoneNumber] = useState('')
	const [email, setEmail] = useState('')

  React.useLayoutEffect(() => {
    navigation.setOptions({
      headerRight: () => (
        <Text fontSize='16px' fontWeight={500} color='#F15A22' mr='10px'>Save</Text>
      ),
    });
  }, [navigation]);
	
			return (
			<CView flex={1}>
				<Container mt='10px' style={{height: '100%'}} flex-={1}>

					<SectionContainer borderColor='#A7A7A7' borderBottomWidth={0.2} >
						<Text fontSize='17px' fontWeight='bold'>Phone number</Text>
						<Container flexDirection='row' alignItems='center' justifyContent='space-between'>
							<Container>
								<PhoneInput
									flagButtonStyle={{width: 'auto', marginRight: 10}}
									textContainerStyle={{backgroundColor: 'transparent' , paddingLeft: 0}}
										defaultValue={phoneNumber}
										onChangeText={(text) => {
											setPhoneNumber(text);
										}}
										// onChangeFormattedText={(text) => {
										// 	setFormattedValue(text);
										// }}
									/>
							</Container>
							
							<Icon  size={15} name='edit' />
						</Container>
					</SectionContainer>

					<SectionContainer>
						<Text fontSize='17px' fontWeight='bold'>Personal Email</Text>											
						<Container flexDirection='row' alignItems='center' justifyContent='space-between'>
							<Container mr={15} flex={1}>
							<Input onChangeText={text => setEmail(text)} value={email}  placeholder='Email' style={{borderBottomWidth: 0}} />

							</Container>
							<Icon  size={15} name='edit' />
						</Container>
					</SectionContainer>

				</Container>
			
			</CView>
		)
}

export default ContactEdit