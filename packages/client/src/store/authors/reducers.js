import { initialState } from './initialState'
import * as types from './types'

const companiesReducer = (state = initialState, action) => {
  switch(action.type) {
    case types.getAuthorById:
    case types.getAuthorByIds:
    case types.getAuthorOne:
    case types.getAuthorMany:
      return {
        ...state,
        fetching: true,
        filter: action.payload
      }
    case types.getAuthorByIdSuccess:
    case types.getAuthorByIdsSuccess:
    case types.getAuthorOneSuccess:
    case types.getAuthorManySuccess:
      return {
        ...state,
        fetching: false,
        fetchedData: true,
        countTotal: action.payload.count,
        list: {
          page: 1,
          count: action.payload.data.length,
          data: action.payload.data
        }
      }
    case types.getAuthorByIdError:
    case types.getAuthorByIdsError:
    case types.getAuthorOneError:
    case types.getAuthorManyError:
      return {
        ...state,
        fetching: false,
        fetchedData: false,
        error: action.payload
      }
    default: {
      return state
    }
  }
}

export default companiesReducer
