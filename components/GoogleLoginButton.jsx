import React from 'react';
import { Button, Text, Image } from 'react-native-paper';

const typography = {
  titleLarge: {
    fontFamily: 'Roboto',
    fontSize: 22,
    fontWeight: '500',
    letterSpacing: 0,
    lineHeight: 28,
  },
};

const GoogleLoginButton = ({ handleAuth }) => {

  return (
    <Button
      mode="contained"
      onPress={() => handleAuth()}
      style={{
        borderRadius: 100,
        height:49,
        width:301,
        top:'7%'
      }}
      buttonColor='#ffffff'
      textColor='#757575'
      
      icon={require('../assets/google.png')}
      labelStyle={typography.titleLarge}
    >
      Sign in with Google
    </Button>
  );
};

export default GoogleLoginButton;
