import React from "react";
import {
	View,
	SafeAreaView,
	ImageBackground,
	TextInput,
	Button,
	StyleSheet,
	Text,
} from "react-native";
import CustomSearchBar from "../components/CustomSearchBar";
const LoginPage = () => {
	return (
		<SafeAreaView style={styles.fullScreen}>
			<View style={styles.textContainer}>
				<View style={styles.leftSpaceText}></View>
				<View style={styles.Text}>
					<Text style={{ fontSize: 32, fontWeight: 400 }}>
						<Text style={{ bold: "true" }}>
							Before You Get Started, Select Your{" "}
						</Text>
						<Text style={{ fontWeight: "bold" }}>Alergies </Text>
						<Text style={{ color: "#4B312C" }}>or </Text>
						<Text style={{ fontWeight: "bold" }}>Dietary Restrictions</Text>
					</Text>
				</View>
				<View style={styles.rightSpaceText}></View>
			</View>
			<View style={styles.searchContainer}>
				<CustomSearchBar />
			</View>
		</SafeAreaView>
	);
};

const styles = StyleSheet.create({
	fullScreen: {
		flexDirection: "column",
		height: "100%",
		backgroundColor: "#E6D8D2",
		alignItems: "center",
		paddingTop: 20,
	},
	textContainer: {
		flex: 3,
		flexDirection: "row",
	},
	leftSpaceText: {
		flex: 4,
	},
	Text: {
		flex: 83,
		alignItems: "center",
	},
	rightSpaceText: {
		flex: 13,
	},
	searchContainer: {
		width: "auto",
		height: "auto",
		flex: 5,
	},
});

export default LoginPage;
