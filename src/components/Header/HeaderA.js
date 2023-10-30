import { StyleSheet, Text, TouchableOpacity, Image } from 'react-native'
import React from 'react'
import { COLORS, FONTS, icons, SIZES } from '../../constants'
import { useNavigation } from '@react-navigation/native';

const HeaderA = ({ title }) => {
    const navigation = useNavigation();
    return (
        <TouchableOpacity onPress={() => navigation.goBack()} style={{ flexDirection: 'row', alignItems: 'center', marginBottom: SIZES.base }}>
            <Image source={icons.arrowleft} style={{ height: SIZES.h2 * 0.9, width: SIZES.h2 * 0.9 }} />
            <Text style={{ ...FONTS.body3a, color: COLORS.black, marginLeft: SIZES.base }}>{title}</Text>
        </TouchableOpacity>
    )
}

export default HeaderA

const styles = StyleSheet.create({

})