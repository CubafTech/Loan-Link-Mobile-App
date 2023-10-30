import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { COLORS, SIZES, FONTS } from '../../../constants'
import HeaderA from '../../../components/Header/HeaderA'

const LoanScreen = () => {
  return (
    <View style={styles.page}>
      <HeaderA title="Loans" />
      <View>
        <View style={styles.topCtn}>
          <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }}>
            <Text style={{ ...FONTS.body4, color: COLORS.black }}>NGN80,000</Text>
            <Text style={{ ...FONTS.body4, color: COLORS.black }}>NGN20,000</Text>
          </View>
          <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }}>
            <Text style={{ ...FONTS.body5, color: COLORS.grey3 }}>Paid</Text>
            <Text style={{ ...FONTS.body5, color: COLORS.grey3 }}>Balance</Text>
          </View>
        </View>
      </View>
    </View>
  )
}

export default LoanScreen

const styles = StyleSheet.create({
  page: {
    flex: 1,
    backgroundColor: COLORS.white,
    paddingHorizontal: SIZES.width * 0.05,
    paddingTop: SIZES.h5,
  },
  topCtn: {
    height: SIZES.h1 * 2.8,
    borderWidth: 0.7,
    borderRadius: SIZES.base,
    borderColor: COLORS.black,
    padding: SIZES.base,
    justifyContent: 'center',
  },
})