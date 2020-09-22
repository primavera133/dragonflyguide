import {gql} from '@apollo/client'
import specieDetailsFragment from './specieDetailsFragment'

export default gql`
  query SpecieDetails($scientific_name: String!) {
    specieFromScientificName(scientific_name: $scientific_name) {
      ...specieDetails
    }
  }
  ${specieDetailsFragment}
`
