import {ApolloClient, InMemoryCache} from '@apollo/client'
import {GENERA_LIST_QUERY} from './getGeneraQuery'
import {link} from './Link'
import {persistCache} from 'apollo-cache-persist-dev'
import AsyncStorage from '@react-native-community/async-storage'

const cache = new InMemoryCache()
// Initial state
cache.writeQuery({
  query: GENERA_LIST_QUERY,
  data: {
    genera: [],
  },
})

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
