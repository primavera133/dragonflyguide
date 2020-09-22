import React, {useState, useEffect} from 'react'
import {StyleSheet, Text, View, SafeAreaView} from 'react-native'
import {ApolloPersistentProvider} from './src/graphql/ApolloPersistentProvider'
import Taxonomy from './src/components/Taxonomy'

const App = () => {
  return (
    <ApolloPersistentProvider>
      <SafeAreaView style={styles.container}>
        <View style={styles.header}>
          <Text style={styles.headerText}>Page header</Text>
        </View>
        <View style={styles.contentContainer}>
          <Taxonomy />
        </View>
      </SafeAreaView>
    </ApolloPersistentProvider>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
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
export default App
