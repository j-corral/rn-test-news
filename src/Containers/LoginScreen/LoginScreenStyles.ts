import { StyleSheet } from 'react-native'
import Metrics from '@/Theme/Metrics'
import { Colors } from '@/Theme/Variables'
import Fonts from '@/Theme/FontsTypes'

export default StyleSheet.create({
    input: {
        height: Metrics.buttonHeight,
        backgroundColor: Colors.white,
        paddingLeft: 20,
        borderRadius: Metrics.buttonRadius,
        shadowColor: "#1A3252",
        shadowOffset: {
            width: 0,
            height: 1,
        },
        shadowOpacity: 0.22,
        shadowRadius: 2.22,
        elevation: 5,
    },
    contentContainer: {
        width: Metrics.widthPercentageToDP('100%'),
        height: Metrics.heightPercentageToDP('80%'),
        paddingHorizontal: Metrics.paddingHorizontal,
        backgroundColor: Colors.white,
        borderTopLeftRadius: 15,
        borderTopRightRadius: 15,
        position: 'absolute',
        bottom: 0,
    },
    contentContainerSmall: {
        width: '100%',
        height: Metrics.heightPercentageToDP('100%'),
        backgroundColor: Colors.white,
        borderTopLeftRadius: 15,
        borderTopRightRadius: 15,
        position: 'absolute',
        bottom: 0,
    },
    content: {
        width: '100%',
        justifyContent: 'space-between',
        paddingBottom: Metrics.isIphoneX()
            ? Metrics.heightPercentageToDP('5%')
            : Metrics.heightPercentageToDP('1%'),
    },
    backgroundImage: {
        width: Metrics.widthPercentageToDP('54%'),
        height: Metrics.heightPercentageToDP('29%'),
        resizeMode: 'contain',
        position: 'absolute',
        right: -15,
        top: -25,
    },
    title: {
        fontFamily: Fonts.type.bold,
        fontSize: 26,
        width: '100%',
        textAlign: 'center',
        color: Colors.text,
        paddingTop: Metrics.heightPercentageToDP('3%'),
    },
    mailContainer: {
        marginTop: 37,
    },
    passwordContainer: {
        marginTop: 19,
    },
    sectionTitle: {
        fontFamily: Fonts.type.medium,
        fontSize: 14,
        color: Colors.text,
        opacity: 0.4,
        marginBottom: 10,
    },
    forgetPasswordContainer: {
        paddingLeft: 11,
        paddingTop: 9,
        paddingBottom: 19,
    },
    forgetPasswordText: {
        fontSize: 14,
        fontFamily: Fonts.type.light,
        color: Colors.primary,
    },
    noAccountText: {
        marginTop: 52,
        marginBottom: 23,
        width: '100%',
        textAlign: 'center',
        fontSize: 19,
        fontFamily: Fonts.type.base,
        color: Colors.text,
        opacity: 0.7,
    },
})
