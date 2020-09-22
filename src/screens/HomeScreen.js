import React from 'react'
import {StyleSheet, Text, View, SafeAreaView} from 'react-native'
import Taxonomy from '../components/Taxonomy'

const HomeScreen = () => (
  <SafeAreaView style={styles.container}>
    <View style={styles.header}>
      <Text style={styles.headerText}>Page header</Text>
    </View>
    <View style={styles.contentContainer}>
      <Taxonomy />
    </View>
  </SafeAreaView>
)
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

export default HomeScreen
