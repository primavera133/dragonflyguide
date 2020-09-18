//App.js
import React from 'react'
import {StyleSheet, Text, View, SafeAreaView} from 'react-native'
import {ApolloProvider} from '@apollo/client'
import {client} from './src/graphql/Client'
import {Genera} from './src/components/Genera'

const App = () => {
  return (
    <ApolloProvider client={client}>
      <SafeAreaView style={styles.container}>
        <View style={styles.header}>
          <Text style={styles.headerText}>Page header</Text>
        </View>
        <View style={styles.contentContainer}>
          <Genera />
        </View>
      </SafeAreaView>
    </ApolloProvider>
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
