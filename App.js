import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import {
	configureFonts,
	MD3LightTheme,
	PaperProvider,
} from "react-native-paper";
import LoginButton from "./components/LoginButton";
import LoginForum from "./components/LoginForum";
import CustomSearchBar from "./components/CustomSearchBar";

import LoginButton from "./components/LoginButton";
import LoginForum from "./components/LoginForum";
import Alert from "./components/Alert";
import CustomSearchBar from "./components/CustomSearchBar";

export default function App() {
	return (
		<Provider>
			<View style={styles.container}>
				<CustomSearchBar />
				<StatusBar style='auto' />
				<Alert
					title='Title'
					text='Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia,
          molestiae quas vel sint commodi repudiandae consequuntur voluptatum laborum
          numquam blanditiis harum quisquam eius sed odit fugiat iusto fuga praesentium
          optio, eaque rerum!'
					button1label='Previous'
					button2label='Next'
					button1onPress={() => console.log("Button 1 pressed")}
					button2onPress={() => console.log("Button 2 pressed")}
				/>
			</View>
		</Provider>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: "#fff",
		alignItems: "center",
		justifyContent: "center",
	},
});
