import { StyleSheet, Text, View, Image, TouchableOpacity, TextInput } from 'react-native'
import React from 'react'
import { COLORS, FONTS, SIZES, icons } from '../../constants'
import FormInput from '../../components/Input/FormInput'
import FormButton from '../../components/Button/FormButton'
import { useNavigation } from '@react-navigation/native';


const Login = () => {
    const navigation = useNavigation();
    return (
        <View style={styles.page}>
            <Text style={{ ...FONTS.body2c, color: COLORS.secondary, }}>Welcome Back</Text>
            <Text style={{ ...FONTS.body4, color: COLORS.secondary, }}>Glad to see you again</Text>
            {/* PHONE */}
            <View style={{ marginTop: SIZES.h1 * 2 }}>
                <View style={{ marginBottom: SIZES.base, }}>
                    <Text style={{ ...FONTS.body4, color: COLORS.grey3 }}>Phone Number</Text>
                    <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }}>
                        <View style={styles.container}>
                            <Text style={{ ...FONTS.body4, color: COLORS.grey3 }}>+234</Text>
                            <TouchableOpacity>
                                <Image source={icons.arrowdown} style={{ height: SIZES.h3, width: SIZES.h3 }} />
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
                <Text style={{ ...FONTS.body4, color: COLORS.primary, textAlign: 'right' }}>Forgot Password</Text>
                <View style={{ marginTop: SIZES.h1 * 2, flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }}>
                    <FormButton title="Log In" onPress={() => navigation.navigate('Main', { screen: "Bottom" })}
                        btnCtn={{ flex: 1, marginRight: SIZES.h5 }} />
                    <TouchableOpacity style={styles.thumbCtn}>
                        <Image source={icons.thumb} style={{ height: SIZES.h2 * 0.9, width: SIZES.h2 * 0.9 }} />
                    </TouchableOpacity>
                </View>
                <View style={{ flexDirection: 'row', alignItems: 'center', marginTop: SIZES.h1 }}>
                    <Text style={{ ...FONTS.body3c, color: COLORS.grey3, }}>New to LoanLink?</Text>
                    <TouchableOpacity onPress={() => navigation.navigate("CreateAccount")}>
                        <Text style={{ ...FONTS.body3c, color: COLORS.primary, }}> Create Account</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    )
}

export default Login

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
    thumbCtn: {
        height: SIZES.h1 * 1.6,
        width: SIZES.h1 * 1.6,
        backgroundColor: COLORS.primary,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: SIZES.h3
    },
})