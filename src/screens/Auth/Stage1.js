import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native';
import { COLORS, FONTS, SIZES } from '../../constants';
import HeaderA from '../../components/Header/HeaderA';
import FormInput from '../../components/Input/FormInput';

const Stage1 = () => {
    const navigation = useNavigation();
    return (
        <View style={styles.page}>
            <HeaderA />
            <View>
                <Text style={{ ...FONTS.body2c, color: COLORS.black }}>Set up your profile in few steps</Text>
                <Text style={{ ...FONTS.body4, color: COLORS.black }}>Let's get started</Text>
            </View>
            {/* FORM INPUT */}
            <View>
                <Text>Business Owner Information</Text>
                <FormInput title="First Name" placeholder="Enter First Name" />
                <FormInput title="Last Name" placeholder="Enter Last Name" />
                <FormInput title="Gender" placeholder="Select Gender" />
                <FormInput title="Country" placeholder="Select Country" />
                <FormInput title="How much is your income" placeholder="Select Income Range" />
            </View>
        </View>
    )
}

export default Stage1

const styles = StyleSheet.create({
    page: {
        flex: 1,
        backgroundColor: COLORS.white,
        paddingHorizontal: SIZES.width * 0.05,
        paddingTop: SIZES.h4,
    },
})