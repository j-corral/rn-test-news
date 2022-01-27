import { StyleSheet } from 'react-native'
import Metrics from '@/Theme/Metrics'
import { Colors } from '@/Theme/Variables'
import Fonts from '@/Theme/FontsTypes'

export default StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
    },
    content: {
        flex:1, marginBottom: 50
    },
    meta: {
        flex:1, 
        flexDirection:'row', 
        alignContent:'space-between'
    },
    date: {
        fontFamily: Fonts.type.base,
        fontSize: Fonts.size.medium,
        fontStyle: 'italic',
        color: Colors.text,
        width: '75%',
    },
    body: {
        fontFamily: Fonts.type.base,
        fontSize: Fonts.size.regular,
        lineHeight: Fonts.size.regular * 1.5,
        width: '100%',
        textAlign: 'left',
        color: Colors.text,
        marginTop: 50,
        marginBottom: 35,
        paddingRight: Metrics.heightPercentageToDP('3%'),
    },
    share: {
        marginLeft: 15,
        fontFamily: Fonts.type.medium,
        fontSize: Fonts.size.medium,
        lineHeight: Fonts.size.medium * 1.2,
    },
   
})
