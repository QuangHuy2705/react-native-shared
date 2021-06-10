// @ts-ignore
import React from 'react';
import {Image, ImageBackground, Text, View} from "react-native";
import PRImages from "../../constants/PRImages";

const ImageHeader = () => {
	return (
		<View style={{backgroundColor: 'green'}}>
			<ImageBackground
				style={{
					height: 189,
					justifyContent: "center",
				}}
				resizeMode='cover'
				source={PRImages.roomExample}/>
		</View>
	)
}
export default ImageHeader
