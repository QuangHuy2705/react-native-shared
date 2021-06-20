import React, {useRef} from 'react'
import {TouchableOpacity} from 'react-native';
import RBSheet from 'react-native-raw-bottom-sheet';
import ImagePickerCropper from 'react-native-image-crop-picker';
import Image from '~/ui/primitives/Image';
import Icon from '~/ui/common/Icon';
import Text from '~/ui/primitives/Text';
import Container from '~/ui/layout/Container';

const ImagePicker = React.forwardRef(({onSelectImage, imgSource}, ref) => {
	const refRBSheet = useRef();
  const options = [
    {
      name: 'Take photo',
      icon: <Icon style={{marginRight: 15}} size={21} name="photo-camera" />,
      onPress: () => {
        ImagePickerCropper.openCamera({
          width: 300,
          height: 300,
					cropperCircleOverlay: true,
          cropping: true,
          freeStyleCropEnabled: true,
        })
          .then((images) => {
						console.log(images)
            onSelectImage(images);
          })
          .catch((error) => {
						console.log(error)
					});
      },
    },
    {
      name: 'Choose from Gallery',
      icon: <Icon style={{marginRight: 15}} name="image"  size={21} />,
      onPress: () => {
				console.log('press')
        ImagePickerCropper.openPicker({
          width: 300,
          height: 300,
					cropperCircleOverlay: true,
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
						console.log(images)
            onSelectImage(images);
          })
          .catch((error) => {
							console.log(error)
					});
      },
    },
  ];
  return (
		<>
			<TouchableOpacity onPress={() => refRBSheet.current.open()}>
				<Image style={{height: 64, width: 64, borderRadius: 64/2 , overflow: 'hidden'}} source={imgSource} />
			</TouchableOpacity>
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
				{options.map(({name, onPress, icon}) => (
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
		</>

  );
});

export default ImagePicker;