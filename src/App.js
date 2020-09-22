import React from 'react'
import {StyleSheet} from 'react-native'
import {ApolloPersistentProvider} from './graphql/ApolloPersistentProvider'
import {Routes} from './Routes'

const App = () => {
  return (
    <ApolloPersistentProvider>
      <Routes />
    </ApolloPersistentProvider>
  )
}

export default App
