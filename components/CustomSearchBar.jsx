import { useState } from "react";
import { Searchbar } from "react-native-paper";

const styles = {
	container: {
		// display: "flex",
		// flexDirection: "row",
		// alignItems: "center",
		// padding: 0,
		// gap: 4,
		// position: 'absolute',
		// left: "2.91%",
		// right: "3.88%",
		// top: "14.91%",
		// bottom: "79.6%",
		width: "95%",
		backgroundColor: "#aca09f",

		borderRadius: 28,
	},
};
CustomSearchBar = () => {
	const [searchQuery, setSearchQuery] = useState("");

	const onChangeSearch = (query) => setSearchQuery(query);

	return (
		<Searchbar
			placeholder='Search'
			placeholderTextColor='#ffffff'
			iconColor='#ffffff'
			onChangeText={onChangeSearch}
			value={searchQuery}
			style={styles.container}
			inputStyle={{ color: "#ffffff" }}
		/>
	);
};

export default CustomSearchBar;
