import React from 'react'
import {StyleSheet, Text, View, ActivityIndicator, FlatList} from 'react-native'
import {useQuery} from '@apollo/client'
import taxonomyQuery from '../graphql/getTaxonomy'
import FamilyList from './FamilyList'

export default () => {
  const {loading, error, data} = useQuery(taxonomyQuery)

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
      renderItem={({item}) => <FamilyList {...item} />}
      keyExtractor={item => `${item.family_name}`}
      ListHeaderComponent={() => <Text>FAMILIES</Text>}
    />
  )
}
