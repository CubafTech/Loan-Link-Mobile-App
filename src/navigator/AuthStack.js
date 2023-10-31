import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import SplashScreen from '../screens/Auth/SplashScreen';
import Login from '../screens/Auth/Login';
import CreateAccount from '../screens/Auth/CreateAccount';
import IntroSlider from '../screens/Auth/IntroSlider';
import AccountType from '../screens/Auth/AccountType';
import OtpScreen from '../screens/Auth/OtpScreen';
import Stage1 from '../screens/Auth/Stage1';
import Stage2 from '../screens/Auth/Stage2';

const AuthStack = () => {
    const Stack = createNativeStackNavigator();
    return (
        <Stack.Navigator initialRouteName='AuthStack' screenOptions={{ headerShown: false }}>
            <Stack.Screen name='Splash' component={SplashScreen} />
            <Stack.Screen name='IntroSlider' component={IntroSlider} />
            <Stack.Screen name='Login' component={Login} />
            <Stack.Screen name='CreateAccount' component={CreateAccount} />
            <Stack.Screen name='AccountType' component={AccountType} />
            <Stack.Screen name='OtpScreen' component={OtpScreen} />
            <Stack.Screen name='Stage1' component={Stage1} />
            <Stack.Screen name='Stage2' component={Stage2} />
        </Stack.Navigator>
    );
};

export default AuthStack

const styles = StyleSheet.create({})
