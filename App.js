import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, SafeAreaView } from "react-native";
import { configureFonts, MD3LightTheme, Provider } from "react-native-paper";
import { Provider as PaperProvider } from "react-native-paper";

import Alert from "./components/Alert";
import LoginButton from "./components/LoginButton";
import LoginForum from "./components/LoginForum";
import CustomSearchBar from "./components/CustomSearchBar";
import LoginPage from "./pages/LoginPage";
import DietaryRestrictionsPage from "./pages/DietaryRestrictionsPage";
export default function App() {
	return (
		<Provider>
			{/* <Alert
				dismissable={true}
				title='Title'
				text='Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia,
          molestiae quas vel sint commodi repudiandae consequuntur voluptatum laborum
          numquam blanditiis harum quisquam eius sed odit fugiat iusto fuga praesentium
          optio, eaque rerum!'
				button1label='Previous'
				button2label='Next'
				button1onPress={() => console.log("Button 1 pressed")}
				button2onPress={() => console.log("Button 2 pressed")}
			/> */}
			<LoginPage />
			{/* {<DietaryRestrictionsPage />}
			<SafeAreaView style={styles.container}>
				<StatusBar style='auto' />
			</SafeAreaView> */}
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
