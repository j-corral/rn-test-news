import { StyleSheet } from 'react-native'
import Metrics from '@/Theme/Metrics'
import { Colors } from '@/Theme/Variables'
import Fonts from '@/Theme/FontsTypes'

export default StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
        // alignItems: "center",
        // justifyContent: "center",
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
    newsContainer: {
        flex: 1,
        paddingTop: 40,
        paddingHorizontal: 20
    },
    newsItem: {
        marginTop: 30,
        padding: 30,
        height: 176,
        resizeMode:'cover',
    },
    newsItemContent: {
        flexDirection: 'column',
        flex: 1,
    },
    newsTitle: {
        flex: 1,
        fontFamily: Fonts.type.bold,
        fontSize: 18,
        color: Colors.white,
        justifyContent: 'flex-end',
        alignSelf: 'flex-start',
        direction: 'ltr',
    },
    newsDate: {
        flex: 1,
        fontFamily: Fonts.type.base,
        fontSize: 11,
        color: Colors.white,
        justifyContent: 'flex-start',
        alignSelf: 'flex-end',
        direction: 'rtl',
        padding: 10,
        backgroundColor: Colors.black,
        borderRadius: 10,
    },
})
