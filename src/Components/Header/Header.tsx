import React from 'react'
import { View, TouchableOpacity, Text, Image, ImageSourcePropType } from 'react-native'
import { Layout } from '@/Theme'

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
        <View style={[styles.container, style]}>
            <TouchableOpacity style={[styles.button]} onPress={onPress}>
                <Image source={uri} />
            </TouchableOpacity>
            <Text style={[styles.title]}>{title}</Text>
        </View>
    )
}

export default Header
