import React from "react";
import { View, StyleSheet} from "react-native";
import SignUpForum from "../components/SignUpForum";
const styles = StyleSheet.create({
    formContainer: {
        height: '100%',
        backgroundColor: "#E6D8D2",
        alignItems: 'center',
        paddingTop:20
      }
});


const SignUpPage = () => {
    return (
        <View style={styles.formContainer}>
            <SignUpForum/>
        </View>
    )
};

export default SignUpPage;

