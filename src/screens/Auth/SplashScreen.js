import { StyleSheet, Text, View, Image, StatusBar } from 'react-native'
import React, { useEffect } from 'react'
import { COLORS, FONTS, images, SIZES } from '../../constants'
import { useNavigation } from '@react-navigation/native'

const SplashScreen = () => {
    const navigation = useNavigation();
    useEffect(() => {
        setTimeout(() => {
            // navigation.navigate('Main', { screen: "Bottom" })
            navigation.replace('IntroSlider')
        }, 2000)
    }, [])
    return (
        <View style={styles.page}>
            <StatusBar backgroundColor={COLORS.primary} barStyle='light-content' />
            <Image source={images.splash} style={{ height: SIZES.height, width: SIZES.width }} />
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