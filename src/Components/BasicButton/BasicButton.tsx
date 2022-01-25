import React from 'react'
import { TouchableOpacity, Text } from 'react-native'
import { Layout, Fonts, Common } from '@/Theme'

// Styles
import styles from './BasicButtonStyles'

interface Props {
    text: string
    onPress: () => void
    // eslint-disable-next-line react/require-default-props
    style?: Object
    // eslint-disable-next-line react/require-default-props
    disabled?: boolean
}

const BasicButton = ({ text, onPress, style, disabled = false }: Props) => {
    return (
        <TouchableOpacity
            style={[
                Layout.fullWidth,
                Layout.colCenter,
                styles.container,
                Common.basicShadow,
                disabled && styles.disabled,
                style,
            ]}
            disabled={disabled}
            onPress={onPress}
        >
            <Text style={[Fonts.textRegular, styles.text]}>{text}</Text>
        </TouchableOpacity>
    )
}

export default BasicButton
