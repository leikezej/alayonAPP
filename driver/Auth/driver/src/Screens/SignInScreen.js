import React, {useState} from 'react';
import { View, Text, Image, StyleSheet, useWindowDimensions, ScrollView } from 'react-native';
import Logo from '../../assets/images/driverLogo.png';
import CustomInput from '../../src/components/CustomInput';
import CustomButton from '../../src/components/CustomButton';

const SignInScreen = () => {
        const [username, setUsername] = useState('');
        const [password, setPassword] = useState('');

    const {height} = useWindowDimensions();

    const onSignInPressed = () => {
        console.warn("Sign in");
    };

    const onForgotPasswordPressed = () => {
        console.warn("Forgot Password?");
    };

    const onSignInNumber = () => {
        console.warn("Contact Number");
    };
    
    const onSignInFacebook = () => {
        console.warn('facebook');
    };
    
    const onSignInGoogle = () => {
        console.warn('facebook');
    };
    const onSignUpPress = () => {
        console.warn('Create Account');
    };



    return (
    <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.root}>
            <Image
                source={Logo}
                style={[styles.logo, {height: height * 0.3}]}
                resizeMode="contain"
            />

            <CustomInput
                placeholder="Username"
                value={username}
                setValue={setUsername}
            />
            <CustomInput
                placeholder="Password"
                value={password}
                setValue={setPassword}
                secureTextEntry={true}
            />

            <CustomButton text="Sign In" onPress={onSignInPressed} type="PRIMARY"/>
            
            <CustomButton text="Forgot Password" onPress={onForgotPasswordPressed} type="TERTIARY"/>
        
            <CustomButton text="Sign In Using Contact Number" onPress={onSignInNumber}
                bgColor="#E7EAF4"
                fgColor="#4765A9"
            />
            
            <CustomButton text="Sign In with Facebook" onPress={onSignInFacebook}
                bgColor="#FAE9EA"
                fgColor="#DD4D44"

            />
            <CustomButton text="Sign In with Google" onPress={onSignInGoogle} 
                bgColor="#e3e3e3"
                fgColor="#363636"

            />

            <CustomButton 
                text="Not A Member Yet? Create An Account" 
                onPress={onSignUpPress} 
                type="TERTIARY"
            />
        </View>
    </ScrollView>    
    );
};

const styles = StyleSheet.create({
    root: {
        alignItems: 'center',
        padding: 20,
    },
    logo: {
        width: '70%',
        maxWidth: 300,
        maxHeight: 200,
    },
});

export default SignInScreen;

