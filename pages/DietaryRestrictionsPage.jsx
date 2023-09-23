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
import CustomButton from "../components/Button";
import InputChip from "../components/InputChips";

const LoginPage = () => {
	return (
		<SafeAreaView style={styles.fullScreen}>
			<View style={styles.textContainer}>
				<View style={styles.leftSpaceText}></View>
				<View style={styles.Text}>
					<Text style={{ fontSize: 32, fontWeight: 400, color: "#4B312C" }}>
						<Text style={{}}>Before You Get Started, Select Your </Text>
						<Text style={{ fontWeight: "700" }}>Allergies </Text>
						<Text style={{}}>or </Text>
						<Text style={{ fontWeight: "700" }}>Dietary Restrictions</Text>
					</Text>
				</View>
				<View style={styles.rightSpaceText}></View>
			</View>
			<View style={styles.searchContainer}>
				<CustomSearchBar />
			</View>
			<View style={styles.inputChipsContainer}>
				<InputChip label={"All Nuts"} />
				<InputChip label={"Peanuts"} />
				<InputChip label={"Dairy"} />
				<InputChip label={"Lactose"} />
				<InputChip label={"Milk"} />
				<InputChip label={"Egg"} />
				<InputChip label={"Soy"} />
				<InputChip label={"Gluten"} />
				<InputChip label={"Keto"} />
				<InputChip label={"Vegetarian"} />
				<InputChip label={"Vegan"} />
				<InputChip label={"Halal"} />
				<InputChip label={"Kosher"} />
			</View>
			<View style={styles.buttonContainer}>
				<CustomButton
					label={"Next"}
					handleClick={() => {}}
				/>
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
	},
	textContainer: {
		flex: 38,
		alignItems: "center",
		justifyContent: "center",
		flexDirection: "row",
	},
	leftSpaceText: {
		flex: 7,
	},
	Text: {
		flex: 83,
		fontFamily: "Roboto",
	},
	rightSpaceText: {
		flex: 13,
	},
	searchContainer: {
		width: "100%",
		width: "100%",
		alignItems: "center",
		// justifyContent: "center",
		flex: 15,
	},
	inputChipsContainer: {
		flex: 25,
		flexDirection: "row",
		flexWrap: "wrap",
		justifyContent: "space-around",
		rowGap: 30,
		gap: 10,
		width: "100%",
		height: "100%",
	},
	buttonContainer: {
		flex: 45,
		alignItems: "center",
		justifyContent: "center",
		width: "100%",
		height: "100%",
	},
});

export default LoginPage;
