import { StyleSheet, Text, View, Image, TouchableOpacity, FlatList } from 'react-native'
import React from 'react'
import { COLORS, FONTS, icons, SIZES, images } from '../../../constants'
import { useNavigation } from '@react-navigation/native';

const HomeScreen = () => {
    const navigation = useNavigation();
    const topData = [
        { id: 1, title: "Total Loans", amount: 0 },
        { id: 2, title: "Total Borrowed", amount: 0 },
        { id: 3, title: "Active Loan", amount: 0 },
    ];
    const actionData = [
        { id: 1, title: "Apply for Loan", iconName: icons.loan, color: "#F7EBFF", color2: "#7335EE", onPress: () => navigation.navigate("RequestLoan") },
        { id: 2, title: "Make Repayment", iconName: icons.payment, color: "#FFF1D1", color2: "#B26C00", onPress: () => navigation.navigate("RequestLoan2") },
    ];
    return (
        <View style={styles.page}>
            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                <Image source={icons.profile} style={{ height: SIZES.h2, width: SIZES.h2 }} />
                <Text style={{ ...FONTS.body4, color: COLORS.black, flex: 1, marginLeft: SIZES.base }}>Hi McClive</Text>
                <Image source={icons.profile} style={{ height: SIZES.h2, width: SIZES.h2 }} />
            </View>
            <View>
                <Text style={{ ...FONTS.body4, color: COLORS.black }}>Loan Limit: N5,000</Text>
            </View>

            <View style={{ marginTop: SIZES.h4 }}>
                <FlatList
                    data={topData}
                    numColumns={3}
                    columnWrapperStyle={{ justifyContent: 'space-between' }}
                    renderItem={({ item }) => {
                        return (
                            <View style={styles.container}>
                                <Text style={{ ...FONTS.body5, color: COLORS.grey3 }}>{item.title}</Text>
                                <Text style={{ ...FONTS.body3, color: COLORS.black }}>₦{item.amount}</Text>
                            </View>
                        )
                    }}
                />
                <View style={styles.topCtn}>
                    <Image source={images.analysis} style={{ height: SIZES.h1 * 2, width: SIZES.h1 * 4, }} />
                    <Text style={{ ...FONTS.body4, color: COLORS.white, marginTop: SIZES.base }}>No Transaction Available</Text>
                </View>
                {/* TOP SIDE */}
                <TouchableOpacity style={{ marginTop: SIZES.h5 }}>
                    <Text style={{ ...FONTS.body3, color: COLORS.black }}>Complete your Account Setup</Text>
                    <View style={styles.bvnCtn}>
                        <Image source={icons.circle} style={{ height: SIZES.h2, width: SIZES.h2, marginRight: SIZES.base }} />
                        <Text style={{ ...FONTS.body4, color: COLORS.grey3 }}>Add your BVN or NIN</Text>
                    </View>
                </TouchableOpacity>
                {/* QUICK ACTION */}
                <View style={{ marginTop: SIZES.h1 * 1.2 }}>
                    <Text style={{ ...FONTS.body3a, color: COLORS.black, marginBottom: SIZES.h4 }}>Quick Actions</Text>
                    <FlatList
                        data={actionData}
                        numColumns={2}
                        columnWrapperStyle={{ justifyContent: 'space-between' }}
                        contentContainerStyle={{ marginHorizontal: 2 }}
                        renderItem={({ item }) => {
                            return (
                                <TouchableOpacity onPress={item.onPress} style={[styles.quickCtn, { backgroundColor: item.color, borderColor: item.color2 }]}>
                                    <Image source={item.iconName} style={{ height: SIZES.h1 * 0.9, width: SIZES.h1 * 0.9, tintColor: item.color2 }} />
                                    <Text style={{ ...FONTS.body4, color: item.color2, marginTop: 2 }}>{item.title}</Text>
                                </TouchableOpacity>
                            )
                        }}
                    />
                </View>
            </View>
        </View>
    )
}

export default HomeScreen

const styles = StyleSheet.create({
    page: {
        flex: 1,
        backgroundColor: COLORS.white,
        paddingTop: SIZES.h5,
        paddingHorizontal: SIZES.width * 0.05,
    },
    container: {
        height: SIZES.h1 * 2.7,
        width: SIZES.width * 0.29,
        borderWidth: 1,
        borderRadius: SIZES.base,
        borderColor: COLORS.grey2,
        padding: SIZES.base
    },
    topCtn: {
        height: SIZES.height * 0.23,
        borderRadius: SIZES.base,
        backgroundColor: "#334E68",
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: SIZES.h1 * 1.2,
    },
    bvnCtn: {
        height: SIZES.h1 * 1.6,
        borderColor: COLORS.grey,
        borderWidth: 1,
        marginTop: SIZES.h5,
        borderRadius: SIZES.base,
        flexDirection: 'row',
        alignItems: 'center',
        paddingHorizontal: SIZES.h5,
    },
    quickCtn: {
        height: SIZES.h1 * 3,
        width: SIZES.width * 0.43,
        borderWidth: 0.3,
        borderRadius: SIZES.base * 1.1,
        padding: SIZES.h4,
        marginBottom: SIZES.h2,
    },
})