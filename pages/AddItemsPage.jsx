import * as React from 'react';
import { Appbar } from 'react-native-paper';
import { View, Text, StyleSheet } from 'react-native';
import CustomSearchBar from '../components/CustomSearchBar';
import { SafeAreaView } from 'react-native';
import {FAB} from 'react-native-paper';
import PantryCard from '../components/PantryCard';
const styles = StyleSheet.create({
	fullScreen: {
		flexDirection: "column",
		height: "100%",
		backgroundColor: "#E6D8D2",
		alignItems: "center",
	},
	textContainer: {
		flex: 38,
		alignItems: "left",
		justifyContent: "left",
		flexDirection: "row",
	},
	leftSpaceText: {
		flex: 7,
	},
	Text: {
        position:"absolute",
		flex: 83,
        top:30,
		fontFamily: "Roboto",
        alignItems: "left",
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
        top:10
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
    fab: {
        position: 'absolute',
        margin: 16,
        right: 0,
        bottom: 0,
        color: "#4B312C"

    },
});


const AddItemsPage = () => {
  return (
    <SafeAreaView style={styles.fullScreen}>
        <View style={styles.text}>
        <Text style={{ fontSize: 32, fontWeight: 400, color: "#4B312C" , textAlign:"left" }}>Add Items</Text>
        </View>
        <View style={styles.searchContainer}>
				<CustomSearchBar />
        <View>
        <Text style={{fontSize: 24, fontWeight: 400, color: "#4B312C", textAlign:"left" }}>Dairy</Text>
        <PantryCard title="Milk" subtitle="2L"/>
        <PantryCard title="Milk" subtitle="2L"/>
        <PantryCard title="Milk" subtitle="2L"/>
        <PantryCard title="Milk" subtitle="2L"/>
        </View>

        <View>
        <Text style={{fontSize: 24, fontWeight: 400, color: "#4B312C", textAlign:"left" }}>Flour</Text>
        <PantryCard title="Milk" subtitle="2L"/>
        <PantryCard title="Milk" subtitle="2L"/>
        <PantryCard title="Milk" subtitle="2L"/>
        <PantryCard title="Milk" subtitle="2L"/>
        
        </View>
		</View>

        
        

    </SafeAreaView>
  );
};

export default AddItemsPage;
