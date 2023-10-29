import { StyleSheet, Text, View } from 'react-native'
import React, { useEffect } from 'react'
import { COLORS, FONTS } from '../../constants'
import { useNavigation } from '@react-navigation/native'

const SplashScreen = () => {
    const navigation = useNavigation();
    useEffect(() => {
        navigation.navigate('Main', { screen: "Bottom" })
    }, [])
    return (
        <View style={styles.page}>
            <Text style={{ ...FONTS.h2, }}>Instagram</Text>
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