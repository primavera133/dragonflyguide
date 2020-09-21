import React from 'react'
import {StyleSheet, Text, View, ActivityIndicator, FlatList} from 'react-native'
import {useQuery} from '@apollo/client'
import {GENERA_LIST_QUERY} from '../graphql/getGeneraQuery'
import Genus from './Genus'

export function Genera () {
  const {loading, error, data} = useQuery(GENERA_LIST_QUERY)

  // console.log('genera.js; data', data)
  // console.log('genera.js; data.genera', data && data.genera)

  if (loading)
    return (
      <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
        <ActivityIndicator size='large' />
      </View>
    )
  if (error) {
    console.log(error)
    return <Text>Error :(</Text>
  }
  return (
    <FlatList
      data={data.genera}
      renderItem={({item}) => <Genus {...item} />}
      keyExtractor={item => `${item.genus_name}`}
      ListHeaderComponent={() => <Text>GENERA</Text>}
    />
  )
}
