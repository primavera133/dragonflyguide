import React, {useState} from 'react'
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
import {Image} from 'react-native'
import cloudinary from 'cloudinary-core'

import getSpecieQuery from '../graphql/getSpecieQuery.js'
import actualDimensions from '../utils/actualDimensions'
import basicStyles from '../styles/basic'

const SpecieDetailsScreen = ({route}) => {
  const navigation = useNavigation()
  const {scientific_name} = route.params

  const {loading, error, data} = useQuery(getSpecieQuery, {
    variables: {scientific_name},
  })

  if (loading) return null
  if (error) cinsole.log(error)

  const sp = data.specieFromScientificName

  const cl = new cloudinary.Cloudinary({
    cloud_name: sp.images.cloud_name,
    secure: true,
  })
  const imageUrls = sp.images.all
    .map(img => img.public_id)
    .map(public_id => {
      return {
        public_id,
        uri: cl.url(public_id, {width: 1080, crop: 'scale'}),
      }
    })

  imageUrls.map(async img => {
    const availableWidth = actualDimensions.width - 20
    img.width = availableWidth
    img.height = Math.floor((availableWidth * 3) / 4)
  })

  // Image.queryCache(imageUrls.map(img => img.url)).then(console.log)

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
          <Text style={styles.h2}>Images</Text>
          {imageUrls.map(img => (
            <View style={styles.imageContainer} key={img.public_id}>
              <Image
                source={{uri: img.uri}}
                style={{
                  ...styles.image,
                  width: img.width,
                  height: img.height,
                }}
              />
            </View>
          ))}
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
  imageContainer: {
    paddingTop: 10,
    paddingBottom: 20,
  },
  image: {
    resizeMode: 'contain',
  },
  similar_species: {
    fontSize: 16,
  },
  redlist: {
    fontSize: 16,
  },
})

export default SpecieDetailsScreen
