import * as React from 'react';
import {View, Image, StyleSheet} from 'react-native';
import { Avatar, Card, IconButton} from 'react-native-paper';

const PantryCard = (props) => {
	return (
    <Card.Title
    title={props.title}
    subtitle={props.subtitle}
    left={(props) => <Image style={{
      width: 50,
      height: 50,
      resizeMode: "contain",
      alignSelf: "center",
      borderWidth: 1,
      borderRadius: 20,
    }} source={require("../assets/icon.png")} />
}
      right={(props) => <View style={styles.container}>

        <View >
          <IconButton {...props} icon="lead-pencil" onPress={() => { }} />
        </View>
        <View>
          <IconButton {...props} icon="trash-can-outline" onPress={() => { }} />
        </View>
      </View>}
  />
	);
};
const styles = StyleSheet.create({
	container: {
		flexDirection: "row",
    color:"#ffffff"
	}
});

export default PantryCard;