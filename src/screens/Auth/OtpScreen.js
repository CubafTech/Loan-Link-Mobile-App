import { StyleSheet, Text, TouchableOpacity, View, FlatList } from 'react-native'
import React from 'react'
import { COLORS, FONTS, SIZES } from '../../constants'
import FormButton from '../../components/Button/FormButton'
import { useNavigation } from '@react-navigation/native';

export default function OtpScreen() {
    const navigation = useNavigation();
    const otpData = [{ id: 1 }, { id: 2 }, { id: 3 }, { id: 4 }, { id: 5 }];
    return (
        <View style={styles.page}>
            <Text style={{ ...FONTS.body2c, color: COLORS.black }}>OTP Verification</Text>
            <View style={{ marginTop: SIZES.h1 * 6 }}>
                <Text style={{ ...FONTS.body4, color: COLORS.black, textAlign: 'center', marginBottom: SIZES.h1 * 1.2 }}>Please enter the OTP sent to johndoe@gmail.com or 08132****467</Text>
                <FlatList
                    data={otpData}
                    numColumns={5}
                    columnWrapperStyle={{ justifyContent: 'space-between' }}
                    renderItem={({ item }) => {
                        return (
                            <View style={styles.container}>

                            </View>
                        )
                    }}
                />
            </View>
            {/* BUTTON */}
            <FormButton title="Proceed" btnCtn={{ marginTop: SIZES.h1 * 2.3 }} onPress={() => navigation.navigate("AccountType")} />
            <View style={{ flexDirection: 'row', alignItems: 'center', marginTop: SIZES.h4 }}>
                <Text style={{ ...FONTS.body4, color: COLORS.black }}>Didn't receive OTP? </Text>
                <TouchableOpacity>
                    <Text style={{ ...FONTS.body4, color: COLORS.primary }}>Resend OTP</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
};

const styles = StyleSheet.create({
    page: {
        flex: 1,
        backgroundColor: COLORS.white,
        paddingHorizontal: SIZES.width * 0.05,
        paddingTop: SIZES.h2
    },
    container: {
        height: SIZES.h1 * 1.8,
        width: SIZES.h1 * 1.8,
        borderRadius: SIZES.base,
        borderWidth: 1,
    },
})