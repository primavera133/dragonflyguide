import {NavigationContainer} from '@react-navigation/native'
import React from 'react'
import {View, Text, Button} from 'react-native'
import {useNavigation} from '@react-navigation/native'

export default ({scientific_name}) => {
  const navigation = useNavigation()
  return (
    <View>
      <Text>{scientific_name}</Text>
      <Button
        title={`Go to ${scientific_name}`}
        onPress={() => {
          navigation.navigate('SpecieDetails', {scientific_name})
        }}
      />
    </View>
  )
}
