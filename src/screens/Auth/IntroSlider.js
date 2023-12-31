import { StyleSheet, Text, View, Image, Dimensions, StatusBar } from 'react-native'
import React from 'react'
import { COLORS, images, icons, SIZES, COLORSONTS } from '../../constants/';
import AppIntroSlider from 'react-native-app-intro-slider';
import { useNavigation } from '@react-navigation/native';
let screenHeight = Dimensions.get('window').height;
import { FONTS } from '../../constants/';


const IntroSlider = ({ ...props }) => {
    const navigation = useNavigation();
    const slides = [
        {
            key: 'slide1',
            image: images.slide1,
            title: "Empowering your Business Financial Journey",
            text: "Apply for loans to boost your business",
        }, {
            key: 'slide2',
            image: images.slide2,
            title: "Put a smile on faces while earning points ",
            text: "Apply for loans to boost your business",
        },
    ];
    const _renderItem = ({ item }) => {
        return (
            <View
                style={{
                    // height: screenHeight,
                    // flex: 1,
                    backgroundColor: COLORS.white,
                }}>
                <View style={{ paddingHorizontal: SIZES.width * 0.03, paddingTop: SIZES.h1 }}>
                    <Image source={item.image} style={{ width: SIZES.width * 0.94, height: SIZES.height * 0.5, borderRadius: SIZES.base, }} />
                </View>
                <View style={{ paddingHorizontal: SIZES.width * 0.03, paddingTop: SIZES.h1 * 1.7, paddingRight: SIZES.width * 0.1 }}>
                    <Text style={{ fontSize: SIZES.h1, color: COLORS.dark, fontFamily: "Satoshi-Black", textAlign: 'center' }}>{item.title}</Text>
                    <Text style={{ ...FONTS.body3a, color: "#040B1B", marginTop: SIZES.h4, textAlign: 'center' }}>{item.text} </Text>
                </View>
            </View>
        )
    }
    const _renderNextButton = () => {
        return (
            <View style={styles.buttonCircle}>
                <Text style={{ ...FONTS.body3a, color: COLORS.white }}>Get Started</Text>
            </View>
        )
    }

    const _renderDoneButton = () => {
        return (
            <View>
                <View style={styles.buttonCircle}>
                    <Text style={{ ...FONTS.body3, color: COLORS.white }}>Get Started</Text>
                </View>
            </View>
        )
    }

    const _renderSkipButton = () => {
        return (
            <View style={{ marginTop: SIZES.h4, marginBottom: SIZES.h5 }}>
                <Text style={{ ...FONTS.body3a, color: COLORS.black, textAlign: 'center', fontFamily: "Satoshi-Medium" }}>Skip</Text>
            </View>
        )
    }

    const _onEndReached = () => {
        navigation.replace("CreateAccount")
    }
    return (
        <View style={{ flex: 1, backgroundColor: COLORS.white }}>
            <StatusBar backgroundColor={COLORS.white} barStyle="dark-content" />
            <AppIntroSlider
                data={slides}
                renderItem={_renderItem}
                renderDoneButton={_renderDoneButton}
                renderNextButton={_renderNextButton}
                renderSkipButton={_renderSkipButton}
                onDone={_onEndReached}
                onSkip={_onEndReached}
                dotClickEnabled={true}
                showNextButton={true}
                showDoneButton={true}
                // showSkipButton={true}
                dotStyle={{ height: 7, width: 7, backgroundColor: '#D6D6D6', borderRadius: 100, }}
                activeDotStyle={{ backgroundColor: "#001EC5", height: 7, width: 7, borderRadius: 100, }}
                bottomButton={true}
            />
        </View>
    )
};

export default IntroSlider;

const styles = StyleSheet.create({
    buttonCircle: {
        height: SIZES.h1 * 1.8,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: COLORS.primary,
        borderRadius: SIZES.base,
    },
    skipView: {
        width: 40,
        height: 40,
        borderRadius: 20,
        justifyContent: 'center',
        alignItems: 'center',
        marginLeft: SIZES.h4,
    },
    imageSlide: {
        height: SIZES.height * 0.919,
        width: SIZES.width * 0.9,
        marginTop: SIZES.base * 1.3,
        borderRadius: SIZES.h1 * 1.2,
    },
    slideText: {
        // ...FONTS.navTitle,
        fontSize: SIZES.navTitle * 1.3,
        color: COLORS.white,
        fontWeight: 'bold',
    },
});