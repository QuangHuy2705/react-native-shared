<<<<<<< HEAD
// @ts-ignore
import React from 'react';
import { ImageBackground, View } from "react-native";
=======
import React from 'react';

import {Image, ImageBackground, Text, View} from "react-native";
>>>>>>> d88e2ad... add screen LocationDiscover
import PRImages from "../../constants/PRImages";

const ImageHeader = () => {
	return (
<<<<<<< HEAD
		<View style={{ backgroundColor: 'green' }}>
			<ImageBackground
				style={{
					height: 189,
					justifyContent: "center",
				}}
				resizeMode='cover'
				source={PRImages.roomExample} />
=======
		<View style={{backgroundColor: 'green'}}>
			<ImageBackground
				style={{
					height: 189,
					justifyContent: "center"
				}}
				resizeMode='cover'
				source={PRImages.roomExample}/>
>>>>>>> d88e2ad... add screen LocationDiscover
		</View>
	)
}
export default ImageHeader
