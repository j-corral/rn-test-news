import { StyleSheet } from 'react-native'
import { Colors } from '@/Theme/Variables'
import Metrics from '@/Theme/Metrics'
import Fonts from '@/Theme/FontsTypes'

export default StyleSheet.create({
    container: {
        backgroundColor: Colors.primary,
        height: Metrics.buttonHeight,
        borderRadius: Metrics.buttonRadius,
    },
    secondaryContainer: {
        backgroundColor: Colors.white,
    },
    disabled: {
        opacity: 0.3,
    },
    text: {
        color: Colors.white,
        fontFamily: Fonts.type.bold,
        fontSize: Fonts.size.regular,
    },
    textSecondary: {
        color: Colors.primary,
    },
})
