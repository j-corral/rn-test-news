import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import { LoginScreen, NewsScreen } from '@/Containers'

const LoginStack = createStackNavigator()

const MainNavigator = () => {
    return (
        <LoginStack.Navigator screenOptions={{ headerShown: false }}>
            <LoginStack.Screen name="LoginScreen" component={LoginScreen} />
            <LoginStack.Screen name="NewsScreen" component={NewsScreen} />
        </LoginStack.Navigator>
    )
}

export default MainNavigator
