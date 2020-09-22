import {ApolloClient, InMemoryCache} from '@apollo/client'
import {link} from './Link'
import {persistCache} from 'apollo-cache-persist-dev'
import AsyncStorage from '@react-native-community/async-storage'

const cache = new InMemoryCache()

export const createClient = async () => {
  await persistCache({
    cache,
    storage: AsyncStorage,
  })
  return new ApolloClient({
    cache,
    link,
  })
}
