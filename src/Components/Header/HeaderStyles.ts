import { StyleSheet } from 'react-native'
import Metrics from '@/Theme/Metrics'
import { Colors } from '@/Theme/Variables'
import Fonts from '@/Theme/FontsTypes'

export default StyleSheet.create({
    button: {
        width: 35, 
        paddingTop: 10
    },
    title: {
        fontFamily: Fonts.type.bold,
        fontSize: 26,
        width: Metrics.widthPercentageToDP('75%'),
        textAlign: 'center',
        color: Colors.text,
    },
    container: {
        flexDirection: 'row',
        alignItems:"flex-start",
        alignContent:'space-around',
        marginTop: 15,
        height: 50,
    }
})
