import React from 'react'
import {Text, FlatList} from 'react-native'
import GenusList from './GenusList'

export default ({family_name, genera}) => {
  return (
    <FlatList
      data={genera}
      renderItem={({item}) => <GenusList {...item} />}
      keyExtractor={item => `${item.genus_name}`}
      ListHeaderComponent={() => <Text>{family_name}</Text>}
    />
  )
}
