import companies from '../__mocks__/customers'

import { gql } from '@apollo/client'
import client from './apolloClient'

export const getAuthorById = id => {
  return companies
}

export const getAuthorByIds = ids => {
  return companies
}

export const getAuthorOne = search => {
  return companies
}

export const getAuthorMany = async ({ page, limit, filter }) => {
  const result = await client.query({
    query: gql`
      query {
        authorMany(
          skip: ${page * limit},
          limit: ${limit}
        ) {
          _id,
          firstName,
          lastName,
          email
        }
      }
    `
  })

  const count = await client.query({
    query: gql`
      query {
        authorCount
      }
    `
  })

  const res = {
    data: result.data?.authorMany || [],
    count: count.data?.authorCount || 0
  }

  return res
}

export const getAuthorCount = () => {
  return companies
}
