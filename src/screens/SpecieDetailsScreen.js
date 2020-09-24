import React from 'react'
import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  Button,
  ScrollView,
} from 'react-native'
import {useQuery} from '@apollo/client'
import {useNavigation} from '@react-navigation/native'
import Markdown from 'react-native-markdown-display'

import getSpecieQuery from '../graphql/getSpecieQuery.js'
import basicStyles from '../styles/basic'
import markdownStyles from '../styles/markdown'

const SpecieDetailsScreen = ({route}) => {
  const navigation = useNavigation()
  const {scientific_name} = route.params

  const {loading, error, data} = useQuery(getSpecieQuery, {
    variables: {scientific_name},
  })

  if (loading) return null

  const sp = data.specieFromScientificName

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerText}>{sp.scientific_name}</Text>
        <Text style={styles.authorcitation}>{sp.author_citation}</Text>
        {sp.local_names.map(n => (
          <Text style={styles.localnames} key={n}>
            {n}
          </Text>
        ))}
      </View>
      <ScrollView
        contentInsetAdjustmentBehavior='automatic'
        style={styles.contentContainer}
        contentContainerStyle={styles.contentContainerStyle}>
        <View style={styles.textBlock}>
          <Text style={styles.h2}>Description</Text>
          <Markdown style={{body: styles.mdParagraphBody}}>
            {sp.description}
          </Markdown>
        </View>

        <View style={styles.textBlock}>
          <Text style={styles.h2}>Flight period</Text>
          <Markdown style={{body: styles.mdParagraphBody}}>
            {sp.flight_period}
          </Markdown>
        </View>

        <View style={styles.textBlock}>
          <Text style={styles.h2}>Behaviour</Text>
          <Markdown style={{body: styles.mdParagraphBody}}>
            {sp.behaviour}
          </Markdown>
        </View>

        <View style={styles.textBlock}>
          <Text style={styles.h2}>Habitat</Text>
          <Markdown style={{body: styles.mdParagraphBody}}>
            {sp.habitat}
          </Markdown>
        </View>

        <View style={styles.textBlock}>
          <Text style={styles.h2}>Distribution</Text>
        </View>

        <View style={styles.textBlock}>
          <Text style={styles.h2}>Similar species</Text>
          {sp.similar_species.map(ssp => (
            <Button
              title={ssp}
              style={styles.similar_species}
              key={ssp}
              onPress={() =>
                navigation.navigate('SpecieDetails', {scientific_name: ssp})
              }
            />
          ))}
        </View>

        <View style={styles.textBlock}>
          <Text style={styles.h2}>Red list status</Text>
          <Text style={styles.redlist}>
            EU27 Endemic: {sp.red_list.EU27_endemic}
          </Text>
          <Text style={styles.redlist}>
            Habitats directive: {sp.red_list.habitats_directive}
          </Text>
          <Text style={styles.redlist}>
            Red list EU27: {sp.red_list.red_list_EU27}
          </Text>
          <Text style={styles.redlist}>
            Red list Europe endemic: {sp.red_list.red_list_europe_endemic}
          </Text>
          <Text style={styles.redlist}>
            Red list Europe: {sp.red_list.red_list_europe}
          </Text>
          <Text style={styles.redlist}>
            Red list Mediterranean: {sp.red_list.red_list_mediterranean}
          </Text>
          <Text style={styles.redlist}>
            Tend Europe: {sp.red_list.trend_europe}
          </Text>
        </View>

        <Button
          title='back to list'
          onPress={() => {
            navigation.navigate('Home', {})
          }}
        />
      </ScrollView>
    </SafeAreaView>
  )
}
const styles = StyleSheet.create({
  ...basicStyles,
  authorcitation: {
    fontSize: 12,
    marginBottom: 5,
  },
  localnames: {
    fontSize: 16,
  },
  similar_species: {
    fontSize: 16,
  },
  redlist: {
    fontSize: 16,
  },
})

export default SpecieDetailsScreen
