import * as React from 'react';
import { useState, useEffect } from "react";
import { Avatar, TextInput } from "react-native-paper";
import {View} from 'react-native';
import SignUpButton from './SignUpButton';
import { vw } from 'react-native-expo-viewport-units';

const style = {
    textfield: {
        backgroundColor: "#E6D8D2",
        display: 'flex',
        flexDirection: 'column', 
        width: 301,
        height: 60,
        borderadius: 4,
        marginVertical: 15
    }, 
    container: {
        display: 'flex',
        flexDirection: 'column',
    },
    avatar: {

    }
};

const SignUpForum = () => {
    const [fullName, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [reEnter, setReEnter] = useState("");

    return (
        <View style={style.container}>
            <View style={{padding: 33, marginHorizontal: 20}}>
            <Avatar.Image size={200} source={require('../assets/muffin.png')}/>
            </View>
            <TextInput
                label="name"
                value={fullName}
                onChangeText={fullName => setName(fullName)}
                style={style.textfield}
                contentStyle={{paddingVertical: 25}}
                mode="outlined"
                activeOutlineColor="#4B312C"
            />
            <TextInput
                label="email"
                value={email}
                onChangeText={email => setEmail(email)}
                style={style.textfield}
                contentStyle={{paddingVertical: 25}}
                mode="outlined"
                activeOutlineColor="#4B312C"
            />
            <TextInput
                label="password"
                secureTextEntry={true}
                value={password}
                onChangeText={password => setPassword(password)}
                style={style.textfield}
                contentStyle={{paddingVertical: 25}}
                mode="outlined"
                activeOutlineColor="#4B312C"
            />
            <TextInput
                label="re-enter password"
                secureTextEntry={true}
                value={reEnter}
                onChangeText={reEnter => setReEnter(reEnter)}
                style={style.textfield}
                contentStyle={{paddingVertical: 25}}
                mode="outlined"
                activeOutlineColor="#4B312C"
            />
            <SignUpButton/>
        </View>
    );
    
}


export default SignUpForum;
