import { useState, useEffect } from "react";
import { TextInput, Button } from "react-native-paper";
import {Text, View} from 'react-native';
import SignUpButton from './SignUpButton';

const style = {
    container: {
        display: 'flex',
        flexDirection: 'column', 
        width: 301,
        height: 76,
        borderadius: 4,
    }
};

const SignUpForum = () => {
    const [fullName, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [reEnter, setReEnter] = useState("");
}

return (
    <>
    <View> 
        <TextInput
            label="name"
            value={fullName}
            onChangeText={fullName => setName(fullName)}
            style={style.container}
            contentStyle={{paddingVertical: 25}}
            mode="outlined"
            activeOutlineColor="#4B312C"
        />
        <TextInput
            label="email"
            value={email}
            onChangeText={email => setEmail(email)}
            style={style.container}
            contentStyle={{paddingVertical: 25}}
            mode="outlined"
            activeOutlineColor="#4B312C"
        />
        <TextInput
            label="password"
            value={password}
            onChangeText={password => setPassword(password)}
            style={style.container}
            contentStyle={{paddingVertical: 25}}
            mode="outlined"
            activeOutlineColor="#4B312C"
        />
        <TextInput
            label="reEnter"
            value={reEnter}
            onChangeText={reEnter => setReEnter(reEnter)}
            style={style.container}
            contentStyle={{paddingVertical: 25}}
            mode="outlined"
            activeOutlineColor="#4B312C"
        />
    </View>
    </>
);
