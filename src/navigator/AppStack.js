import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import BottomTab from './BottomTab';
import RequestLoan from '../screens/Main/Home/RequestLoan';
import RequestLoan2 from '../screens/Main/Home/RequestLoan2';


const AppStack = () => {
    const Stack = createNativeStackNavigator();
    return (
        <Stack.Navigator initialRouteName='Bottom' screenOptions={{ headerShown: false }}>
            <Stack.Screen name='Bottom' component={BottomTab} />

            {/* HOME */}
            <Stack.Screen name='RequestLoan' component={RequestLoan} />
            <Stack.Screen name='RequestLoan2' component={RequestLoan2} />

        </Stack.Navigator>



    )
}

export default AppStack

const styles = StyleSheet.create({})