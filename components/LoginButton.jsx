import React from 'react';
import { Button, Text } from 'react-native-paper';

const typography = {
  titleLarge: {
    fontFamily: 'Roboto',
    fontSize: 22,
    fontWeight: '400',
    letterSpacing: 0,
    lineHeight: 28,
  },
};

const LoginButton = ({ handleAuth }) => {

  return (
    <Button
      mode="contained"
      onPress={() => console.log("pressed")}
      buttonColor="#4B312C"
      style={{
        borderRadius: 100,
        paddingHorizontal: 20,
        height:49,
        width:301
      }}
      icon="login"
      labelStyle={typography.titleLarge}
    >
      Login
    </Button>
  );
};

export default LoginButton;
