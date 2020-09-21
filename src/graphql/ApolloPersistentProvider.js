import React, {useEffect, useState} from 'react'
import {createClient} from './Client'
import {ApolloProvider} from '@apollo/client'

export const ApolloPersistentProvider = props => {
  const [client, setClient] = useState(null)

  useEffect(() => {
    if (client) return
    // Do not return the result of this function, as useEffect functions
    // cannot return a promise.
    // https://github.com/facebook/react/issues/14326#issuecomment-441680293
    createClient().then(newClient => {
      setClient(newClient)
    })
  }, [client])

  return (
    !!client && (
      <ApolloProvider client={client}>{props.children}</ApolloProvider>
    )
  )
}
