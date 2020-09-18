import {gql} from '@apollo/client'

export const Rates = gql`
  query GetRates {
    rates(currency: "USD") {
      currency
    }
  }
`
