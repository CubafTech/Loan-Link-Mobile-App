import { StyleSheet, Text, View, Image, TouchableOpacity, FlatList } from 'react-native'
import React from 'react'
import { COLORS, FONTS, icons, SIZES, images } from '../../../../constants'
import FormButton from '../../../../components/Button/FormButton';

const LenderHome = () => {
    const topData = [
        { id: 1 }, { id: 2 }
    ];
    const recommededData = [
        { id: 1 }, { id: 2 }, { id: 3 }
    ];
    const recentData = [
        { id: 1 },
        { id: 2 },
        { id: 3 },
    ];
    return (
        <View style={styles.page}>
            <View style={{ flexDirection: 'row', alignItems: 'center', paddingHorizontal: SIZES.width * 0.03 }}>
                <Image source={icons.avatar} style={{ height: SIZES.h2, width: SIZES.h2 }} />
                <Text style={{ ...FONTS.body4, color: COLORS.black, flex: 1, marginLeft: SIZES.base }}>Hi McClive</Text>
                <Image source={icons.notification} style={{ height: SIZES.h2, width: SIZES.h2 }} />
            </View>
            {/* TOP DATA */}
            <View style={{ paddingLeft: SIZES.width * 0.03, marginTop: SIZES.h2 }} >
                <FlatList
                    data={topData}
                    horizontal={true}
                    renderItem={({ item }) => {
                        return (
                            <View style={styles.container}>
                                <TouchableOpacity style={styles.fundCtn}>
                                    <Text style={{ ...FONTS.body4b, color: COLORS.white }}>Fund Account</Text>
                                </TouchableOpacity>
                                <Text style={{ ...FONTS.body5, color: COLORS.white }}>Wallet Balance</Text>
                                <Text style={{ fontSize: SIZES.body2 * 1.3, fontWeight: 'bold', color: COLORS.white }}>₦20,675.45</Text>
                            </View>
                        )
                    }}
                />
            </View>
            {/* RECOMMENDED FOR YOU */}
            <View style={{ marginTop: SIZES.h3, paddingLeft: SIZES.width * 0.03 }}>
                <View style={{ paddingRight: SIZES.width * 0.03, flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', marginBottom: SIZES.base, }}>
                    <Text style={{ ...FONTS.body4, color: COLORS.black }}>Recommended for you</Text>
                    <Text style={{ ...FONTS.body4, color: COLORS.primary }}>See more</Text>
                </View>
                <FlatList
                    data={recommededData}
                    horizontal={true}
                    showsHorizontalScrollIndicator={false}
                    renderItem={({ item }) => {
                        return (
                            <View style={styles.recCtn}>
                                <Image source={images.home1} style={{ height: SIZES.h1 * 3, width: SIZES.width * 0.39, borderRadius: SIZES.base * 0.9, }} />
                                <Text style={{ ...FONTS.body5, color: COLORS.black }}>Engineering</Text>
                                <Text numberOfLines={2} style={{ ...FONTS.body4b, color: COLORS.black }}>Help Favour buy a cattle for his milk industry</Text>
                                <Text style={{ ...FONTS.body3, color: COLORS.black, marginVertical: SIZES.base * 0.5 }}>₦50,000</Text>
                                <FormButton title="Fund" btnCtn={{ height: SIZES.h1 * 1.3, marginTop: SIZES.base }} />
                            </View>
                        )
                    }}
                />
            </View>
            {/* RECENT TRANSACTION */}
            <View style={{ marginTop: SIZES.h5 }}>
                <View style={{ paddingHorizontal: SIZES.width * 0.03, flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', marginBottom: SIZES.base, }}>
                    <Text style={{ ...FONTS.body4, color: COLORS.black }}>Recent Transactions</Text>
                    <Text style={{ ...FONTS.body4, color: COLORS.primary }}>See more</Text>
                </View>
                <FlatList
                    data={recentData}
                    contentContainerStyle={{ paddingHorizontal: SIZES.width * 0.03 }}
                    renderItem={({ item }) => {
                        return (
                            <View style={{ marginBottom: SIZES.h4, flexDirection: 'row', alignItems: 'center', marginRight: SIZES.h1 }}>
                                <Image source={icons.up} style={{ height: SIZES.h4, width: SIZES.h4 }} />
                                <View style={{ flexDirection: 'row', alignItems: 'center', marginLeft: SIZES.h4 }}>
                                    <View style={{ flex: 1 }}>
                                        <Text style={{ ...FONTS.body4, color: COLORS.black }}>LoanLink</Text>
                                        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                                            <Text style={{ ...FONTS.body5, color: COLORS.grey3 }}>17-03-2023</Text>
                                            <Text style={{ ...FONTS.body5, color: COLORS.grey3, marginLeft: SIZES.h5 }}>6.45</Text>
                                        </View>
                                    </View>
                                    <Text style={{ ...FONTS.body3, color: COLORS.black }}>₦40,000</Text>
                                </View>
                            </View>
                        )
                    }}
                />
            </View>
        </View>
    )
}

export default LenderHome

const styles = StyleSheet.create({
    page: {
        flex: 1,
        backgroundColor: COLORS.white,
        paddingTop: SIZES.h5
    },
    container: {
        height: SIZES.h1 * 3.7,
        width: SIZES.width * 0.8,
        borderRadius: SIZES.base,
        backgroundColor: COLORS.primary,
        marginRight: SIZES.base,
        paddingHorizontal: SIZES.width * 0.03,
        justifyContent: 'center',
    },
    fundCtn: {
        height: SIZES.h1 * 1.1,
        width: SIZES.width * 0.3,
        backgroundColor: COLORS.secondary,
        borderRadius: SIZES.h4,
        justifyContent: 'center',
        alignItems: 'center',
        alignSelf: 'flex-end',
    },
    recCtn: {
        height: SIZES.height * 0.33,
        width: SIZES.width * 0.43,
        marginRight: SIZES.base,
        borderRadius: SIZES.base,
        padding: SIZES.base * 0.8,
        margin: 2,
        backgroundColor: COLORS.white,
        elevation: 4

    },
})