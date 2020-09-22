import React from 'react'
import {Text, FlatList} from 'react-native'
import Specie from './Specie'

export default ({genus_name, species}) => {
  return (
    <FlatList
      data={species}
      renderItem={({item}) => <Specie {...item} />}
      keyExtractor={item => `${item.scientific_name}`}
      ListHeaderComponent={() => <Text> - {genus_name}</Text>}
    />
  )
}
