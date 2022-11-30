import React from 'react'

import { NavigationContainer } from '@react-navigation/native'
import { StackNavigator } from './src/navigators/StackNavigator'

export const AppChallenge = () => {
  return (
    <NavigationContainer>
        <StackNavigator />
    </NavigationContainer>
  )
}
