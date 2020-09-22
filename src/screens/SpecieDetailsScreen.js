import React from 'react'
import {StyleSheet, Text, View, SafeAreaView, Button} from 'react-native'
import {useQuery} from '@apollo/client'
import {useNavigation} from '@react-navigation/native'

import getSpecieQuery from '../graphql/getSpecieQuery.js'

const SpecieDetailsScreen = ({route}) => {
  const navigation = useNavigation()
  const {scientific_name} = route.params

  const {loading, error, data} = useQuery(getSpecieQuery, {
    variables: {scientific_name},
  })

  if (loading) return null

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerText}>Page header</Text>
      </View>
      <View style={styles.contentContainer}>
        <Text>{data.specieFromScientificName.scientific_name}</Text>
        <Text>{data.specieFromScientificName.description}</Text>
        <Button
          title='back to list'
          onPress={() => {
            navigation.navigate('Home', {})
          }}
        />
      </View>
    </SafeAreaView>
  )
}
const styles = StyleSheet.create({
  header: {
    marginTop: 50,
    alignItems: 'center',
    borderBottomWidth: StyleSheet.hairlineWidth,
  },
  headerText: {
    marginBottom: 5,
    fontSize: 30,
    fontWeight: 'bold',
  },
  container: {
    flex: 1,
    backgroundColor: '#fff',
    marginBottom: 70,
  },
  contentContainer: {
    marginTop: 30,
    alignItems: 'center',
    justifyContent: 'center',
  },
})

export default SpecieDetailsScreen
