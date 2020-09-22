import React from 'react'
import {StyleSheet, Text, View, ActivityIndicator, FlatList} from 'react-native'
import {useQuery} from '@apollo/client'
import {TAXONOMY_QUERY} from '../graphql/getTaxonomy'
import Family from './Family'

export default () => {
  const {loading, error, data} = useQuery(TAXONOMY_QUERY)

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
      data={data.taxonomy.families}
      renderItem={({item}) => <Family {...item} />}
      keyExtractor={item => `${item.family_name}`}
      ListHeaderComponent={() => <Text>FAMILIES</Text>}
    />
  )
}
