import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import { LoginScreen, NewsScreen, NewsDetailScreen } from '@/Containers'

const LoginStack = createStackNavigator()

const MainNavigator = () => {
    return (
        <LoginStack.Navigator screenOptions={{ headerShown: false }}>
            <LoginStack.Screen name="LoginScreen" component={LoginScreen} />
            <LoginStack.Screen name="NewsScreen" component={NewsScreen} />
            <LoginStack.Screen name="NewsDetailScreen" component={NewsDetailScreen} />
        </LoginStack.Navigator>
    )
}

export default MainNavigator
