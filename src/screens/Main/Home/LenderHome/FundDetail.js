import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { COLORS, SIZES } from '../../../../constants'
import HeaderA from '../../../../components/Header/HeaderA'

const FundDetail = () => {
    return (
        <View style={styles.page}>
            <HeaderA />
        </View>
    )
}

export default FundDetail

const styles = StyleSheet.create({
    page: {
        flex: 1,
        backgroundColor: COLORS.white,
        paddingHorizontal: SIZES.width * 0.03,
        paddingTop: SIZES.h5,
    },
})