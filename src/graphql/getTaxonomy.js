import {gql} from '@apollo/client'

export default gql`
  query GetFamilies {
    taxonomy {
      families {
        family_name
        genera {
          genus_name
          species {
            scientific_name
            local_names
            author_citation
            description
            behaviour
            similar_species
            size {
              length
              wingspan
            }
            distribution
            habitat
            flight_period
            red_list {
              habitats_directive
              red_list_EU27
              red_list_europe
              red_list_mediterranean
              EU27_endemic
              red_list_europe_endemic
              trend_europe
            }
            images {
              cloud_name
              all {
                public_id
                caption
                license
                lic_url
                by
                url
              }
            }
            sources
            links {
              label
              link
            }
            meta {
              label
              value
            }
          }
        }
      }
    }
  }
`
