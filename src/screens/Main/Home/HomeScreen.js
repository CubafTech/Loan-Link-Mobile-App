import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { COLORS } from '../../../constants'

const HomeScreen = () => {
    return (
        <View style={styles.page}>
            <Text>HomeScreen</Text>
        </View>
    )
}

export default HomeScreen

const styles = StyleSheet.create({
    page: {
        flex: 1,
        backgroundColor: COLORS.white,
    },
})