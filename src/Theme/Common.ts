import { StyleSheet } from 'react-native'
import { Metrics } from '@/Theme'
import { Colors } from '@/Theme/Variables'

const Common = {
    ...StyleSheet.create({
        backgroundPrimary: {
            backgroundColor: Colors.primary,
        },
        backgroundReset: {
            backgroundColor: Colors.transparent,
        },
        textInput: {
            borderWidth: 1,
            borderColor: Colors.text,
            backgroundColor: Colors.inputBackground,
            color: Colors.text,
            minHeight: 50,
            textAlign: 'center',
            marginTop: 10,
            marginBottom: 10,
        },
        basicShadow: {
            shadowColor: Colors.basicShadow,
            shadowOpacity: 0.15,
            shadowOffset: { width: 0, height: 3 },
            shadowRadius: 15,
        },
        basicPage: {
            flex: 1,
            paddingHorizontal: Metrics.paddingHorizontal,
            // paddingTop: Metrics.isIphoneX() ? 60 : 40,
            backgroundColor: Colors.background,
        },
    }),
}

export default Common
