import { StyleSheet } from 'react-native'
import Metrics from '@/Theme/Metrics'
import { Colors } from '@/Theme/Variables'
import Fonts from '@/Theme/FontsTypes'

export default StyleSheet.create({
    title: {
        fontFamily: Fonts.type.bold,
        fontSize: 26,
        width: '100%',
        textAlign: 'center',
        color: Colors.text,
        paddingTop: Metrics.heightPercentageToDP('3%'),
    },
})
