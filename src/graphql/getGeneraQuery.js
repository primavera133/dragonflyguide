import {gql} from '@apollo/client'

export const GENERA_LIST_QUERY = gql`
  query GetGenera {
    genera {
      genus_name
    }
  }
`
