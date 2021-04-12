import { all } from '@redux-saga/core/effects'
import { sagas as companiesSagas } from './authors/sagas'

export function * rootSagas () {
  yield all([...companiesSagas])
}
