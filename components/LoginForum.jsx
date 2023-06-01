import {useState,useEffect} from 'react';
import { TextInput } from 'react-native-paper';
import LoginButton from './LoginButton';


const styles = {
    container: {
      display: 'flex',
      flexDirection: 'column',
      width: 301,
      height: 68,
      borderRadius: 4
    },
  };

const LoginForum = () => {
  const [email, setEmail] = useState("");
  const [password,setPassword] = useState("");

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
    <LoginButton/>

    </>
  );
};

export default LoginForum;