import {ApolloClient, InMemoryCache, createHttpLink} from '@apollo/client'
import {setContext} from '@apollo/client/link/context'

import Config from 'react-native-config'

const httpLink = createHttpLink({
  uri: Config.DRAGONFLY_API_URL,
})

const authLink = setContext((_, {headers}) => {
  // TODO: get the authentication token from local storage?
  const token = Config.DRAGONFLY_API_KEY
  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : '',
    },
  }
})
export const client = new ApolloClient({
  link: authLink.concat(httpLink),
  cache: new InMemoryCache(),
})
