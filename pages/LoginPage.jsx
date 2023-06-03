import React from 'react';
import { View, ImageBackground, TextInput, Button, StyleSheet,Text } from 'react-native';
import LoginForum from '../components/LoginForum';
import LogoSVG from '../components/LogoSVG'
const LoginPage = () => {
  return (
    <>
    <View style={styles.container}>
      <ImageBackground
        source={require('../assets/muffin.png')}
        style={styles.imageBackground}
      >
        {/*Delishbites logo goes here*/ }
        <View style={styles.logo}>
        <LogoSVG/>
        </View>
        
      </ImageBackground>
    </View>

    <View style={styles.formContainer}>
    <LoginForum/>
    </View>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#ffffff",
    height: '50%',
    paddingTop: 30
  },
  imageBackground: {
    flex: 1,
    resizeMode: 'stretch'
  },
  logo:{
    left:'25%',
    top:'88%'
  },
  formContainer: {
    height: '100%',
    backgroundColor: "#E6D8D2",
    alignItems: 'center',
    paddingTop:20
  },

});

export default LoginPage;
