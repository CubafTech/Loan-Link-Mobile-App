import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import BottomTab from './BottomTab';
import RequestLoan from '../screens/Main/Home/RequestLoan';
import RequestLoan2 from '../screens/Main/Home/RequestLoan2';
import LenderHome from '../screens/Main/Home/LenderHome/LenderHome';
import BottomTab2 from './BottomTab2';


const AppStack = () => {
    const Stack = createNativeStackNavigator();
    return (
        <Stack.Navigator screenOptions={{ headerShown: false }}>
            <Stack.Screen name='Bottom' component={BottomTab} />
            <Stack.Screen name='Bottom2' component={BottomTab2} />

            {/* HOME */}
            <Stack.Screen name='RequestLoan' component={RequestLoan} />
            <Stack.Screen name='RequestLoan2' component={RequestLoan2} />
            {/* <Stack.Screen name='LenderHome' component={LenderHome} /> */}

        </Stack.Navigator>



    )
}

export default AppStack

const styles = StyleSheet.create({})