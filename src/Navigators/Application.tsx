import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import { NavigationContainer } from '@react-navigation/native'
import { navigationRef } from '@/Navigators/Root'
import { StatusBar, View } from 'react-native'
import Layout from '@/Theme/Layout'
import MainNavigator from '@/Navigators/Main'

const Stack = createStackNavigator()

const ApplicationNavigator = () => {
    return (
        <View style={Layout.fill}>
            <NavigationContainer ref={navigationRef}>
                <StatusBar barStyle={'dark-content'} />
                <Stack.Navigator headerMode={'none'}>
                    <Stack.Screen
                        name="Main"
                        component={MainNavigator}
                        options={{
                            animationEnabled: false,
                        }}
                    />
                </Stack.Navigator>
            </NavigationContainer>
        </View>
    )
}

export default ApplicationNavigator
