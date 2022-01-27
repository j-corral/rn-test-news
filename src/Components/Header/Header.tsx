import React from 'react'
import { View, TouchableOpacity, Text, Image, ImageSourcePropType } from 'react-native'
import { Layout, Fonts, Common } from '@/Theme'

// Styles
import styles from './HeaderStyles'

interface Props {
    title: string
    onPress: () => void
    // eslint-disable-next-line react/require-default-props
    style?: Object
    // eslint-disable-next-line react/require-default-props
    uri: ImageSourcePropType
}

const Header = ({ title, onPress, style, uri }: Props) => {
    return (
        <View style={[Layout.rowWrap, {alignItems:"flex-end"}]}>
            <TouchableOpacity style={[{flex:1}]} onPress={onPress}>
                <Image style={[Layout.row]} source={uri} />
            </TouchableOpacity>
            <Text style={[styles.title, {flex:10}]}>{title}</Text>
        </View>
    )
}

export default Header
