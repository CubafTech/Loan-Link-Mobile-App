import { StyleSheet, Text, View } from 'react-native'
import React, { useEffect } from 'react'
import { COLORS, FONTS } from '../../constants'
import { useNavigation } from '@react-navigation/native'

const SplashScreen = () => {
    const navigation = useNavigation();
    useEffect(() => {
        setTimeout(() => {
            // navigation.navigate('Main', { screen: "Bottom" })
            navigation.navigate('IntroSlider')
        }, 2000)
    }, [])
    return (
        <View style={styles.page}>
            <Text style={{ ...FONTS.h2, }}>Splash Screen</Text>
        </View>
    )
}

export default SplashScreen

const styles = StyleSheet.create({
    page: {
        flex: 1,
        backgroundColor: COLORS.white,
        justifyContent: 'center',
        alignItems: 'center',
    },
})