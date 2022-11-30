import React from 'react'

import { createStackNavigator } from '@react-navigation/stack';

import { WelcomeScreen } from '../screens/WelcomeScreen';
import { ProductScreen } from '../screens/ProductScreen';

const Stack = createStackNavigator();

export const StackNavigator = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
        {/* <Stack.Screen name="WelcomeScreen" component={ WelcomeScreen } /> */}
        <Stack.Screen name="ProductScreen" component={ ProductScreen } />
    </Stack.Navigator>
  )
}
