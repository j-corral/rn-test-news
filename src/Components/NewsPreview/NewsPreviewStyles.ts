import { StyleSheet } from 'react-native'
import { Colors } from '@/Theme/Variables'
import Fonts from '@/Theme/FontsTypes'

export default StyleSheet.create({
    newsContainer: {
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-around",
        alignItems: "center",
        height: 176,
        marginTop: 20,
        marginBottom: 20,
    },
    newsItem: {
        flex: 1,
        justifyContent: "center",
        height: 176,
        borderRadius: 15,
    },
    newsItemContent: {
        backgroundColor: 'rgba(23, 65, 101, 0.56)',
        borderRadius: 15,
        height: 176,
    },
    newsTitle: {
        flex:1,
        fontFamily: Fonts.type.bold,
        fontSize: 18,
        color: Colors.white,
        padding: 25,
        marginTop: 20,
    },
    newsDate: {
        fontFamily: Fonts.type.base,
        fontSize: 11,
        color: Colors.white,
        justifyContent: 'flex-start',
        alignSelf: 'flex-end',
        direction: 'rtl',
        backgroundColor: 'rgba(7, 29, 47, 0.68)',
        borderRadius: 20,
        height: 35,
        padding: 10,
        margin: 15,
    },
})
