import React from 'react'
import {Text, FlatList} from 'react-native'
import SpecieList from './SpecieList'

export default ({genus_name, species}) => {
  return (
    <FlatList
      data={species}
      renderItem={({item}) => <SpecieList {...item} />}
      keyExtractor={item => `${item.scientific_name}`}
      ListHeaderComponent={() => <Text> - {genus_name}</Text>}
    />
  )
}
