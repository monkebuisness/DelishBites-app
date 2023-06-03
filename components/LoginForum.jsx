import {useState,useEffect} from 'react';
import { TextInput,Button } from 'react-native-paper';
import {Text,TouchableOpacity, View } from 'react-native';
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
      borderRadius: 4,
    
    },
    signUp:{
      display: 'flex',
      flexDirection: 'row',
      left: '0%', // Adjust the percentage value as needed
      top: '20%', // Adjust the percentage value as needed
    }
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
    <View style={{paddingBottom:15}}> 
    <TextInput
      label="Email"
      value={email}
      onChangeText={email => setEmail(email)}
      style={styles.container}
      contentStyle={{paddingBottom:25, paddingTop:25}}
      mode="outlined"
      activeOutlineColor='#4B312C'
    />
    </View>
    <TextInput
      label="Password"
      value={password}
      onChangeText={password => setPassword(password)}
      right={<TextInput.Icon style={{paddingTop:12.5}} icon="eye" />}
      style={styles.container}
      contentStyle={{paddingBottom:25, paddingTop:25}}
      mode="outlined"
      activeOutlineColor='#4B312C'
    />
    

    <LoginButton handleAuth={handleAuth}/>
    <GoogleLoginButton handleAuth={handleAuth}/>

    <View style={styles.signUp}>
      <Text style={{
        fontFamily:'Roboto',
        fontWeight:400,
        fontSize: 16
      }}>Dont have an account? </Text>
      <TouchableOpacity onPress={() => {/* route over to sign up page here*/}}>
        <Text style={{color: '#AD40AF', fontWeight: '700', fontSize:16}}>Sign up!</Text>
      </TouchableOpacity>
    </View>
    </>
  );
};

export default LoginForum;