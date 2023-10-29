import { StyleSheet, Text, TextInput, View, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import { COLORS, FONTS, icons, SIZES } from '../../constants'

const FormInput = ({ title, placeholder, eye }) => {
    return (
        <View>
            <Text style={{ ...FONTS.body4, color: COLORS.grey3 }}>{title}</Text>
            <View style={styles.container}>
                <TextInput
                    placeholder={placeholder}
                    style={{ ...FONTS.body4, color: COLORS.grey, flex: 1 }}
                />
                {eye &&
                    <TouchableOpacity>
                        <Image source={icons.eye} style={{ height: SIZES.h2, width: SIZES.h2 }} />
                    </TouchableOpacity>
                }
            </View>
        </View>
    )
}

export default FormInput

const styles = StyleSheet.create({
    container: {
        height: SIZES.h1 * 1.6,
        borderWidth: 1,
        borderColor: COLORS.grey2,
        borderRadius: SIZES.base,
        paddingHorizontal: SIZES.base * 1.1,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginBottom: SIZES.base
    },
})