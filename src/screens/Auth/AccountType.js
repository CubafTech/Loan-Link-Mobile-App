import { StyleSheet, Text, View, Image, FlatList, TouchableOpacity } from 'react-native'
import React from 'react'
import { COLORS, FONTS, images, SIZES } from '../../constants'
import { useNavigation } from '@react-navigation/native';

const AccountType = () => {
    const navigation = useNavigation();
    const describeData = [
        {
            id: 1,
            title: "Borrower(MSMEs)",
            description: "Request for loans to boost your business goals",
            point1: 'Means of identification',
            point2: "Bank Verification Number (BVN)",
            onPress: () => navigation.navigate('Main', { screen: "Bottom" })
        }, {
            id: 2,
            title: "Lender(Investor)",
            description: "Support a small business owner and earn profits",
            point1: 'Means of identification',
            point2: "Bank Verification Number (BVN)",
            onPress: () => navigation.navigate('Main', { screen: "Bottom2" })
        },
    ];
    return (
        <View style={styles.page}>
            <Text style={{ ...FONTS.body2, color: COLORS.black, marginBottom: SIZES.h4 }}>Which best describes you?</Text>
            <FlatList
                data={describeData}
                renderItem={({ item }) => {
                    return (
                        <TouchableOpacity onPress={item.onPress} style={styles.container}>
                            <Image source={images.rec} style={{ height: SIZES.h1 * 4.5, width: SIZES.width * 0.83, borderRadius: SIZES.base }} />
                            <Text style={{ ...FONTS.body3, fontWeight: '700', color: COLORS.black, marginTop: SIZES.base }}>{item.title}</Text>
                            <Text style={{ ...FONTS.body4b, color: COLORS.grey3, marginTop: SIZES.base }}>{item.description}</Text>
                            <Text style={{ ...FONTS.body4b, color: COLORS.grey3, marginTop: SIZES.h5 }}>For a successful application you'll need</Text>
                            <View style={{ flexDirection: 'row', alignItems: 'center', marginLeft: SIZES.base * 0.8 }}>
                                <View style={{ height: SIZES.base * 0.7, width: SIZES.base * 0.7, backgroundColor: COLORS.black, borderRadius: 100 }} />
                                <Text style={{ ...FONTS.body4b, color: COLORS.grey3, marginLeft: SIZES.base * 0.8 }}>{item.point1}</Text>
                            </View>
                            <View style={{ flexDirection: 'row', alignItems: 'center', marginLeft: SIZES.base * 0.8 }}>
                                <View style={{ height: SIZES.base * 0.7, width: SIZES.base * 0.7, backgroundColor: COLORS.black, borderRadius: 100 }} />
                                <Text style={{ ...FONTS.body4b, color: COLORS.grey3, marginLeft: SIZES.base * 0.8 }}>{item.point2}</Text>
                            </View>
                        </TouchableOpacity>
                    )
                }}
            />
        </View>
    )
}

export default AccountType

const styles = StyleSheet.create({
    page: {
        flex: 1,
        backgroundColor: COLORS.white,
        paddingHorizontal: SIZES.width * 0.05,
        paddingTop: SIZES.h4,
    },
    container: {
        height: SIZES.height * 0.39,
        borderWidth: 1,
        borderColor: COLORS.grey2,
        borderRadius: SIZES.base,
        marginBottom: SIZES.h3,
        padding: SIZES.h5,
    },
})