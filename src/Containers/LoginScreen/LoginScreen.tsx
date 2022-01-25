import React, { useEffect } from 'react'
import { View, Text } from 'react-native'
import { Common } from '@/Theme'

import styles from './LoginScreenStyles'

const LoginScreen = () => {
    useEffect(() => {}, [])

    return (
        <View style={[Common.basicPage]}>
            <Text>Good luck</Text>
        </View>
    )
}

export default LoginScreen
