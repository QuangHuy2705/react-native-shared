import React, { useState, useEffect } from "react";
import {Alert, Button, StyleSheet, Text, View} from "react-native";
import WebViewLeaflet from "react-native-webview-leaflet";


type LatLngObject = { lat: number; lng: number };


const getDuration = (): number => Math.floor(Math.random() * 3) + 1;
const getDelay = (): number => Math.floor(Math.random()) * 0.5;
const iterationCount = "infinite";

export default function Leaflet() {
	const [mapCenterPosition, setMapCenterPosition] = useState({
		lat: 36.850769,
		lng: -76.285873
	});
	const [ownPosition, setOwnPosition] = useState(null);
	const [webViewLeafletRef, setWebViewLeafletRef] = useState(null);


	// useEffect(() => {
	// 	getLocationAsync();
	// });

	// const getLocationAsync = async () => {
	// 	let { status } = await Permissions.askAsync(Permissions.LOCATION);
	// 	if (status !== "granted") {
	// 		console.warn("Permission to access location was denied");
	// 	}
	//
	// 	let location = await Location.getCurrentPositionAsync({});
	// 	if (!ownPosition) {
	// 		setOwnPosition({
	// 			lat: location.coords.latitude,
	// 			lng: location.coords.longitude
	// 		});
	// 	}
	// };

	return (
		<View style={styles.container}>
			<View style={styles.header}>
				<Text style={styles.headerText}>React Native Webview Leaflet Demo</Text>
			</View>
			<View style={{ flex: 1 }}>
				{
					<WebViewLeaflet
						ref={(ref: WebViewLeaflet) => {
							setWebViewLeafletRef(ref);
						}}
						backgroundColor={"green"}
						// onMessageReceived={onMessageReceived}
						// mapLayers={[
						// 	{
						// 		attribution:
						// 			'&amp;copy <a href="http://osm.org/copyright">OpenStreetMap</a> contributors',
						// 		baseLayerIsChecked: true,
						// 		baseLayerName: "OpenStreetMap.Mapnik",
						// 		url: "https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
						// 	},
						// 	{
						// 		baseLayerName: "Mapbox",
						// 		//url: 'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',
						// 		url: `https://api.tiles.mapbox.com/v4/mapbox.streets/{z}/{x}/{y}.png?access_token=${mapboxToken}`,
						// 		attribution:
						// 			"&amp;copy <a href=&quot;http://osm.org/copyright&quot;>OpenStreetMap</a> contributors"
						// 	}
						// ]}

						// mapCenterPosition={mapCenterPosition}
						// ownPositionMarker={
						// 	ownPosition && {
						// 		position: ownPosition,
						// 		icon: "❤️",
						// 		size: [32, 32],
						// 		animation: {
						// 			duration: getDuration(),
						// 			delay: getDelay(),
						// 			iterationCount,
						// 			type: AnimationType.BOUNCE
						// 		}
						// 	}
						// }
						// zoom={7}
					/>
				}
			</View>

		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: "#fff"
	},
	header: {
		height: 60,
		backgroundColor: "dodgerblue",
		paddingHorizontal: 10,
		paddingTop: 30,
		width: "100%"
	},
	headerText: {
		color: "white",
		fontSize: 18,
		fontWeight: "600"
	},
	mapControls: {
		backgroundColor: "rgba(255,255,255,.5)",
		borderRadius: 5,
		bottom: 25,
		flexDirection: "row",
		justifyContent: "space-between",
		left: 0,
		marginHorizontal: 10,
		padding: 7,
		position: "absolute",
		right: 0
	},
	mapButton: {
		alignItems: "center",
		height: 42,
		justifyContent: "center",
		width: 42
	},
	mapButtonEmoji: {
		fontSize: 28
	}
});
