import * as React from 'react';
import {View, Image, StyleSheet} from 'react-native';
import { Avatar, Card, IconButton} from 'react-native-paper';

const PantryCard = ( ) => {
	return (
            <Card.Title
    title="Semi Sweet Chocolate Chips"
    subtitle="500g"
    left={(props) => <Image source={require("../assets/icon.png")} />
}
    right={(props) => <IconButton {...props} icon="dots-vertical" onPress={() => {}} />}
  />
	);
};

export default PantryCard;