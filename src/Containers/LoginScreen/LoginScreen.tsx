import React, { useEffect, useState } from 'react'
import { View, Text, Image, TextInput, ActivityIndicator } from 'react-native'
import { useDispatch, useSelector } from 'react-redux'
import { Common, Images } from '@/Theme'
import i18n from '@/Translations'
import { BasicButton } from '@/Components'
import Tools from '@/Tools/Tools'
import { login } from '@/ActionCreators/AuthActionCreator'

import styles from './LoginScreenStyles'

const LoginScreen = (props) => {
    const [email, setEmail] = useState('contact@gmail.com')
    const [password, setPassword] = useState('2383')
    const dispatch = useDispatch()

    const auth = useSelector(state => state.auth)

    const onLogin = () => {
        dispatch(login(email, password, Tools.getUDID()))
    }

    useEffect(() => {
        if(auth.refreshToken?.length > 0) {
            props.navigation.navigate('NewsScreen')
        } else {
            props.navigation.navigate('LoginScreen')
        }
    }, [onLogin])

    return (
        <View style={[Common.basicPage]}>
            <Image
                style={[styles.backgroundImage]}
                source={Images.loginBackground}
            />
            {!auth.isLoading && (
                <View style={[styles.contentContainer]}>
                    <View style={[styles.content]}>
                        <Text style={[styles.title]}>
                            {i18n.t('authentification.connection')}
                        </Text>
                        <View style={[styles.mailContainer]}>
                            <Text style={[styles.sectionTitle]}>{i18n.t('authentification.mail')}</Text>
                            <TextInput style={[styles.input, Common.basicShadow]} onChangeText={text => setEmail(text)} value={email} placeholder="jean.dupont@mail.com"></TextInput>
                        </View>
                        <View style={[styles.passwordContainer]}>
                            <Text style={[styles.sectionTitle]}>{i18n.t('authentification.password')}</Text>
                            <TextInput style={[styles.input, Common.basicShadow]} onChangeText={text => setPassword(text)} value={password} placeholder="2383"></TextInput>
                        </View>
                        <View style={[styles.passwordContainer]}>
                            <BasicButton text={i18n.t('authentification.connect')} onPress={onLogin} />
                        </View>
                    </View>
                </View>
            )}
            {auth.isLoading && (
                <View style={[styles.contentContainer,{flex:1, justifyContent: "center"}]}>
                    <ActivityIndicator size="large" color="#2479C2" />
                </View>
            )}
        </View>
    )
}

export default LoginScreen
