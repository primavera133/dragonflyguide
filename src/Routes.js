// import 'react-native-gesture-handler'

import React from 'react'
import {NavigationContainer} from '@react-navigation/native'
import {createStackNavigator} from '@react-navigation/stack'

import HomeScreen from './screens/HomeScreen'
import SpecieDetailsScreen from './screens/SpecieDetailsScreen'

const AppStack = createStackNavigator()

export const Routes = () => {
  return (
    <NavigationContainer>
      <AppStack.Navigator headerMode='none'>
        <AppStack.Screen name='Home' component={HomeScreen} />
        <AppStack.Screen name='SpecieDetails' component={SpecieDetailsScreen} />
      </AppStack.Navigator>
    </NavigationContainer>
  )
}
