import { StyleSheet, Text, View, Image, TouchableOpacity, TextInput } from 'react-native'
import React from 'react'
import { COLORS, FONTS, SIZES, icons } from '../../constants'
import FormInput from '../../components/Input/FormInput'

const CreateAccount = () => {
    return (
        <View style={styles.page}>
            <Text style={{ ...FONTS.body2c, color: COLORS.secondary, }}>Welcome Back</Text>
            <Text style={{ ...FONTS.body4, color: COLORS.secondary, }}>Glad to see you again</Text>
            {/* PHONE */}
            <View style={{ marginTop: SIZES.h1 }}>
                <View style={{ marginBottom: SIZES.base, }}>
                    <Text style={{ ...FONTS.body4, color: COLORS.grey3 }}>Phone Number</Text>
                    <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }}>
                        <View style={styles.container}>
                            <Text style={{ ...FONTS.body4, color: COLORS.grey3 }}>+234</Text>
                            <TouchableOpacity>
                                <Image source={icons.eye} style={{ height: SIZES.h2, width: SIZES.h2 }} />
                            </TouchableOpacity>
                        </View>
                        {/* THE INPUT  */}
                        <View style={[styles.container, { width: SIZES.width * 0.58 }]}>
                            <TextInput
                                placeholder="Phone Number"
                                style={{ ...FONTS.body4, color: COLORS.grey, flex: 1 }}
                            />
                        </View>
                    </View>
                </View>
                <FormInput title="Password" placeholder="Enter Password" eye={true} />
            </View>
        </View>
    )
}

export default CreateAccount

const styles = StyleSheet.create({
    page: {
        flex: 1,
        backgroundColor: COLORS.white,
        paddingTop: SIZES.h5,
        paddingHorizontal: SIZES.width * 0.05,
    },
    container: {
        height: SIZES.h1 * 1.6,
        width: SIZES.width * 0.3,
        borderWidth: 1,
        borderColor: COLORS.grey2,
        borderRadius: SIZES.base,
        paddingHorizontal: SIZES.base * 1.1,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
    },
})