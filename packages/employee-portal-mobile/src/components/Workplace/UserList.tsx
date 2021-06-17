// @ts-ignore
import React from "react";
import { FlatList, ImageBackground, View, ViewStyle } from "react-native";
import PRColors from "../../constants/PRColors";
// @ts-ignore
import Icon from '~/ui/common/Icon';
import { CircleButton } from "../common/Button/PrimaryButton";

const UserList = ({ users: users, onSelected, canAdd, style }: {
	users, onSelected: Function, canAdd?: Boolean, style?: ViewStyle
}) => {
	return <FlatList data={users}
		style={{ ...style }}
		horizontal
		ItemSeparatorComponent={
			() => <View style={{ width: 8 }} />
		}
		ListFooterComponent={() => {
			return canAdd ? <CircleButton
				border
				style={{ marginLeft: 8 }}
				icon={
					<Icon name={'add'} color={PRColors.icon}
						style={{ alignSelf: "center" }} />
				}
				onPress={() => {
					console.log('add attendee')
				}} /> : <View></View>;
		}}
		renderItem={
			({ item }) => {
				return <CircleButton
					icon={
						<ImageBackground
							style={{
								height: 32,
								justifyContent: "center",
							}}
							imageStyle={{ borderRadius: 100 }}
							resizeMode='cover'
							source={item.avatar} />
					}
					onPress={() => {
						// setSelectedDate(item.id);
						onSelected(item)
						console.log('select attendee', item)
					}} />
			}
		}
	/>
}
export default UserList
