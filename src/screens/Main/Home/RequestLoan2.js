import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { COLORS, FONTS, SIZES } from '../../../constants'
import HeaderA from '../../../components/Header/HeaderA'
import FormInput from '../../../components/Input/FormInput'
import FormButton from '../../../components/Button/FormButton'
import { useNavigation } from '@react-navigation/native';

const RequestLoan2 = () => {
    const navigation = useNavigation();
    return (
        <View style={styles.page}>
            <HeaderA title="Request Loan" />
            <View>
                <View style={styles.stepCtn}>
                    <Text style={{ ...FONTS.body5, color: COLORS.black }}>STEP 2 OF 2</Text>
                </View>
                <Text style={{ ...FONTS.body3, color: COLORS.black, marginBottom: SIZES.h4, marginTop: SIZES.base }}>Reference Information</Text>
                <Text style={{ ...FONTS.body4, color: COLORS.black }}>Please provde 2 referees with their functional emails. They MUST be people you know and willing to fulfill your loan requests.</Text>
                {/* INPUT */}
                <View>

                </View>
                <View>

                    <FormButton title="Proceed" onPress={() => navigation.navigate("RequestLoan2")}
                        btnCtn={{ marginTop: SIZES.h4 }} />
                </View>
            </View>
        </View>
    )
}

export default RequestLoan2

const styles = StyleSheet.create({
    page: {
        flex: 1,
        backgroundColor: COLORS.white,
        paddingTop: SIZES.h5,
        paddingHorizontal: SIZES.width * 0.05,
    },
    stepCtn: {
        height: SIZES.h1 * 0.8,
        width: SIZES.h1 * 3,
        backgroundColor: COLORS.white2,
        borderRadius: SIZES.base * 0.8,
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: SIZES.base,
    },
})