import React from 'react'
import {StyleSheet, Text, View, ActivityIndicator, FlatList} from 'react-native'
import {useQuery, gql} from '@apollo/client'
import Genus from './Genus'

const GENERA_LIST = gql`
  query GetGenera {
    genera {
      genus_name
    }
  }
`

export function Genera () {
  const {loading, error, data} = useQuery(GENERA_LIST)

  console.log(11111, error)
  console.log(22222, data)

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
