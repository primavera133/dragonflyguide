import React from 'react'
import {Text, FlatList} from 'react-native'
import Genus from './Genus'

export default ({family_name, genera}) => {
  return (
    <FlatList
      data={genera}
      renderItem={({item}) => <Genus {...item} />}
      keyExtractor={item => `${item.genus_name}`}
      ListHeaderComponent={() => <Text>{family_name}</Text>}
    />
  )
}
