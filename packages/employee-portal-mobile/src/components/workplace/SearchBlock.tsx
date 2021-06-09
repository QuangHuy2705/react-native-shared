// @ts-ignore
import React, {useState} from "react";
import {SearchBar} from "react-native-elements";
import Icon from 'employee-portal-shared/src/components/common/Icon';
import PRColors from "../../constants/PRColors";

const SearchBlock = () => {
	const [search, setSearch] = useState('')
	const updateSearch = (search) => {
		setSearch(search);
	};
	return <SearchBar
		lightTheme
		round
		containerStyle={{
			backgroundColor: 'none',
			marginHorizontal: 16,
			marginTop: 14,
			padding: 0,
			borderBottomColor: 'white',
			borderTopColor: 'white'
		}}
		inputStyle={{fontSize:13}}
		inputContainerStyle={{
			borderRadius: 100,
			height: 38,
			backgroundColor: 'rgba(242, 242, 242, 0.6)'
		}}
		searchIcon={<Icon name='search' color={PRColors.icon} size={24}/>}
		placeholder={"Where do you want to go?"}
		onChangeText={updateSearch}
		value={search}
	/>
}
export default SearchBlock
