import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import SplashScreen from '../screens/Auth/SplashScreen';
import Login from '../screens/Auth/Login';
import CreateAccount from '../screens/Auth/CreateAccount';
import IntroSlider from '../screens/Auth/IntroSlider';



const AuthStack = () => {
    const Stack = createNativeStackNavigator();
    return (
        <Stack.Navigator initialRouteName='AuthStack' screenOptions={{ headerShown: false }}>
            <Stack.Screen name='Splash' component={SplashScreen} />
            <Stack.Screen name='IntroSlider' component={IntroSlider} />
            <Stack.Screen name='Login' component={Login} />
            <Stack.Screen name='CreateAccount' component={CreateAccount} />
        </Stack.Navigator>
    )
}

export default AuthStack

const styles = StyleSheet.create({})