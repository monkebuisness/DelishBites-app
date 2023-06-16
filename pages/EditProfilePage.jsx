import React from "react";
import { View, StyleSheet} from "react-native";
import EditProfileForum from "../components/EditProfileForum";
const styles = StyleSheet.create({
    formContainer: {
        height: '100%',
        backgroundColor: "#E6D8D2",
        alignItems: 'center',
        paddingTop:20
      }
});


const EditProfilePage = () => {
    return (
        <View style={styles.formContainer}>
            <EditProfileForum/>
        </View>
    )
};

export default EditProfilePage;

