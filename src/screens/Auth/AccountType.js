import { StyleSheet, Text, View, Image, } from 'react-native'
import React from 'react'
import { COLORS, FONTS, SIZES } from '../../constants'

const AccountType = () => {
    const describeData = [
        {
            id: 1,
            title: "Borrower(MSMEs)",
            description: "Request for loans to boost your business goals",
            point1: 'Means of identification',
            point2: "Bank Verification Number (BVN)",
        }, {
            id: 2,
            title: "Lender(Investor)",
            description: "Support a small business owner and earn profits",
            point1: 'Means of identification',
            point2: "Bank Verification Number (BVN)",
        },
    ];
    return (
        <View>
            <Text style={{ ...FONTS.body3, color: COLORS.black }}>Which best describes you?</Text>
        </View>
    )
}

export default AccountType

const styles = StyleSheet.create({
    page: {
        flex: 1,
        backgroundColor: COLORS.white,
        paddingTop: SIZES.h5,
        paddingHorizontal: SIZES.width * 0.05,
    }
})