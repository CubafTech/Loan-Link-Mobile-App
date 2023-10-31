import { StyleSheet, View, Dimensions, Image, Text } from 'react-native';
import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { COLORS, FONTS, icons, SIZES } from '../constants';
import HomeScreen from '../screens/Main/Home/HomeScreen';
import LoanScreen from '../screens/Main/Loan/LoanScreen';
import NotificationScreen from '../screens/Main/Notification/NotificationScreen';
import ProfileScreen from '../screens/Main/Profile/ProfileScreen';
import LenderHome from '../screens/Main/Home/LenderHome/LenderHome';


const Tab = createBottomTabNavigator();

const BottomTab = () => {
    return (
        <Tab.Navigator
            screenOptions={({ route }) => ({
                tabBarShowLabel: true,
                tabBarStyle: {
                    ...FONTS.h5,
                    // color: 'red'
                },
                tabBarStyle: {
                    height: SIZES.h1 * 1.9,
                    backgroundColor: COLORS.white,
                    borderTopWidth: 1,
                },
                tabBarLabel: ({ focused }) => <Text style={{ fontSize: SIZES.body5, color: focused ? COLORS.primary : COLORS.black, marginBottom: 5 }}>{route.name}</Text>,
                tabBarIcon: ({ focused, size, colour }) => {
                    let iconName;
                    if (route.name === 'Home') {
                        iconName = focused ? icons.home2 : icons.home
                        size = focused ? SIZES.h3 : SIZES.h3,
                            colour = focused ? COLORS.primary : COLORS.black
                    }
                    else if (route.name === 'Loan') {
                        iconName = focused ? icons.loan2 : icons.loan
                        size = focused ? SIZES.h3 : SIZES.h3,
                            colour = focused ? COLORS.primary : COLORS.black
                    } else if (route.name === 'Notification') {
                        iconName = focused ? icons.notification2 : icons.notification
                        size = focused ? SIZES.h3 : SIZES.h3,
                            colour = focused ? COLORS.primary : COLORS.black
                    } else if (route.name === 'Profile') {
                        iconName = focused ? icons.profile2 : icons.profile
                        size = focused ? SIZES.h3 : SIZES.h3,
                            colour = focused ? COLORS.primary : COLORS.black
                    }
                    return <Image source={iconName} style={{ height: SIZES.h2, width: SIZES.h2, tintColor: colour }} />
                },
                headerShown: false
            })}
        >
            {/* <Tab.Screen name='Home' component={LenderHome} /> */}
            <Tab.Screen name='Home' component={HomeScreen} />
            <Tab.Screen name='Loan' component={LoanScreen} />
            <Tab.Screen name='Notification' component={NotificationScreen} />
            <Tab.Screen name='Profile' component={ProfileScreen} />
        </Tab.Navigator>
    )
}

export default BottomTab

const styles = StyleSheet.create({})