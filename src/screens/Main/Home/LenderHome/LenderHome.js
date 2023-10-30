import { StyleSheet, Text, View, Image, TouchableOpacity, FlatList } from 'react-native'
import React from 'react'
import { COLORS, FONTS, icons, SIZES, images } from '../../../../constants'

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
                                <Text style={{ fontSize: SIZES.body2 * 1.3, fontWeight: 'bold', color: COLORS.white }}>NGN20,675.45</Text>
                            </View>
                        )
                    }}
                />
            </View>
            {/* RECOMMENDED FOR YOU */}
            <View style={{ marginTop: SIZES.h3, paddingLeft: SIZES.width * 0.03 }}>
                <View>
                    <Text></Text>
                </View>
                <FlatList
                    data={recommededData}
                    horizontal={true}
                    showsHorizontalScrollIndicator={false}
                    renderItem={({ item }) => {
                        return (
                            <View style={styles.recCtn}>
                                <Image source={images.home1} style={{ height: SIZES.h1 * 3, width: SIZES.width * 0.43 }} />
                            </View>
                        )
                    }}
                />
            </View>
            {/* RECENT TRANSACTION */}
            <View>
                <FlatList
                    data={recentData}
                    renderItem={({ item }) => {
                        return (
                            <View>

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
        height: SIZES.h1 * 5,
        width: SIZES.width * 0.43,
        borderWidth: 1,
        marginRight: SIZES.base,
        borderRadius: SIZES.base
    },
})