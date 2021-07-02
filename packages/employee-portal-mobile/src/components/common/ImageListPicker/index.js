import React, {useRef} from 'react'
import Image from '~/ui/primitives/Image'
import styled from 'styled-components'
import Container from '~/ui/layout/Container'
import Icon from 'react-native-vector-icons/AntDesign'
import RBSheet from 'react-native-raw-bottom-sheet';
import {TouchableOpacity, View} from 'react-native'
import Text from '~/ui/primitives/Text'
import MIcon from '~/ui/common/Icon'
import ImagePickerCropper from 'react-native-image-crop-picker';

const SelectedImage = styled(Image)`
	height: 111px;
	width: 111px;
	border-radius: 10px;
	margin-right: 5px;
	margin-bottom: 5px;
`

const CameraContainer = styled(Container)`
	height: 111px;
	width: 111px;
	justify-content: center;
	align-items: center;
	background-color: rgba(189, 189, 189, 0.5);
	border-radius: 10px;
`

const IconContainer = styled(View)`
	box-shadow: 10px 5px 5px black;
	position: absolute;
	bottom: 5px;
	right: 5px;
	background-color: #fff;
	border-radius: 20px;
	shadow-color: black;
	shadow-opacity: 0.5;
	shadow-radius: 5px;
	z-index: 3;
`

const DeleteButton = styled(MIcon)`
`

export default function ImageListPicker(props) {
	const {images = [], max = 1, onSelectImage, onDeleteImage} = props

	const refRBSheet = useRef();

  const options = [
    {
      name: 'Take photo',
      icon: <MIcon style={{ marginRight: 15 }} size={21} name="photo-camera" />,
      onPress: () => {
        ImagePickerCropper.openCamera({
          width: 300,
          height: 300,
          // cropperCircleOverlay: true,
          cropping: true,
          freeStyleCropEnabled: true,
        })
          .then((images) => {
            onSelectImage(images);
						refRBSheet.current.close()
          })
          .catch((error) => {
            console.log(error)
          });
      },
    },
    {
      name: 'Choose from Gallery',
      icon: <MIcon style={{ marginRight: 15 }} name="image" size={21} />,
      onPress: () => {
        ImagePickerCropper.openPicker({
          width: 300,
          height: 300,
          // cropperCircleOverlay: true,
          cropping: true,
          freeStyleCropEnabled: true,
          smartAlbums: [
            'UserLibrary',
            'PhotoStream',
            'Generic',
            'Panoramas',
            'Favorites',
            'RecentlyAdded',
            'SelfPortraits',
            'Screenshots',
            'DepthEffect',
          ],
        })
          .then((images) => {
            onSelectImage(images);
						refRBSheet.current.close()
          })
          .catch((error) => {
            console.log(error)
          });
      },
    },
  ];

	return (
		<Container flexWrap='wrap' mt='10px' flexDirection='row'>
			{images.length > 0 && (
				<Container flexDirection='row'>
						{images.map(img => (
							<Container key={img}>
								<SelectedImage source={{uri: img}} />
								<IconContainer>
									<TouchableOpacity style={{zIndex: 2}} onPress={() => onDeleteImage(img)}>
										<DeleteButton name='close' /> 
									</TouchableOpacity>
								</IconContainer>
							</Container>
						))}
				</Container>
			)}

			{images.length < max && (
				<TouchableOpacity onPress={() => refRBSheet.current.open()}>
					<CameraContainer>
						<Icon name='camera' size={35} color='#fff' />
					</CameraContainer> 
				</TouchableOpacity>
			)}
			
			<RBSheet
        ref={refRBSheet}
        height={190}
        openDuration={250}
        dragFromTopOnly
        closeOnDragDown
        customStyles={{
          container: {
            borderTopRightRadius: 20,
            borderTopLeftRadius: 20,
          },
        }}>
        {options.map(({ name, onPress, icon }) => (
          <TouchableOpacity
            onPress={onPress}
            key={name}>
            <Container alignItems='center' p={'17px 16px'} flexDirection='row'>
              {icon}
              <Text>{name}</Text>
            </Container>
          </TouchableOpacity>
        ))}

      </RBSheet>
		</Container>
	)
}