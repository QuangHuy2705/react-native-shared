import { Dimensions, Platform, StatusBar } from 'react-native';

const { width, height } = Dimensions.get('window');

const deviceWidth = width;
const deviceHeight = height;

const PRMetrics = {
	deviceWidth,
	deviceHeight,
};
export default PRMetrics;
