import * as React from 'react';
import { Appbar } from 'react-native-paper';
import { View, Text, StyleSheet } from 'react-native';
import CustomSearchBar from '../components/CustomSearchBar';

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


const PantryPage = () => {
  return (
    <View>
      <Appbar.Header>
        <Appbar.Content
          title={
            <View style={styles.text}>
              <Text style={{ fontSize: 32, fontWeight: 400, color: "#4B312C" }}></Text>
            </View>
          }
        />
      </Appbar.Header>
      <CustomSearchBar/>
      <Text>No ingredients to display, press + to add ingredients</Text>
    </View>
  );
};

export default PantryPage;
