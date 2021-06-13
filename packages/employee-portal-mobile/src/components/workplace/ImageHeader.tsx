// @ts-ignore
import React from 'react';
import { ImageBackground, View } from "react-native";
import PRImages from "../../constants/PRImages";

const ImageHeader = () => {
	return (
		<View style={{ backgroundColor: 'green' }}>
			<ImageBackground
				style={{
					height: 189,
					justifyContent: "center",
				}}
				resizeMode='cover'
				source={PRImages.roomExample} />
		</View>
	)
}
export default ImageHeader
