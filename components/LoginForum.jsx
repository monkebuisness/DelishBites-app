import {useState,useEffect} from 'react';
import { TextInput,Button } from 'react-native-paper';
import LoginButton from './LoginButton';
import GoogleLoginButton from './GoogleLoginButton';


const styles = {
    container: {
      backgroundColor: "#E6D8D2",
      display: 'flex',
      flexDirection: 'column',
      width: 301,
      height: 68,
      left: '0%', // Adjust the percentage value as needed
      top: '0%', // Adjust the percentage value as needed
      borderRadius: 4
    },

  };

const LoginForum = () => {
  const [email, setEmail] = useState("");
  const [password,setPassword] = useState("");

  const handleAuth = () => {
    if (email === 'user@user.com' && password === 'user'){
      console.log("Authenticated!")
    }
  }

  return (
    <>
    <TextInput
      label="Email"
      value={email}
      onChangeText={email => setEmail(email)}
      style={styles.container}
      mode="outlined"
    />
    <TextInput
      label="Password"
      value={password}
      onChangeText={password => setPassword(password)}
      right={<TextInput.Affix text="/100" />}
      style={styles.container}
      mode="outlined"
    />
    <LoginButton handleAuth={handleAuth}/>
    <GoogleLoginButton handleAuth={handleAuth}/>
    </>
  );
};

export default LoginForum;