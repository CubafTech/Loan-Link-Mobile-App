import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import React from 'react'
import { COLORS, FONTS, SIZES } from '../../constants'

const FormButton = ({ title, btnCtn, onPress }) => {
    return (
        <TouchableOpacity onPress={onPress} style={[styles.container, btnCtn]}>
            <Text style={{ ...FONTS.body3, color: COLORS.white }}>{title}</Text>
        </TouchableOpacity>
    )
}

export default FormButton

const styles = StyleSheet.create({
    container: {
        height: SIZES.h1 * 1.7,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: COLORS.primary,
        borderRadius: SIZES.h4,
    },
})