import { call, put, takeLatest } from 'redux-saga/effects'

import * as types from './types'
import * as api from '../../api/authors'

function * getAuthorByIdSaga ({ payload }) {
  try {
    const result = yield call(api.getAuthorById, payload)

    yield put({
      type: types.getAuthorByIdSuccess,
      payload: result
    })
  } catch (ex) {
    yield put({
      type: types.getAuthorByIdError,
      payload: ex.message
    })
  }
}

function * getAuthorByIdsSaga ({ payload }) {
  try {
    const result = yield call(api.getAuthorByIds, payload)

    yield put({
      type: types.getAuthorByIdsSuccess,
      payload: result
    })
  } catch (ex) {
    yield put({
      type: types.getAuthorByIdsError,
      payload: ex.message
    })
  }
}

function * getAuthorOneSaga ({ payload }) {
  try {
    const result = yield call(api.getAuthorOne, payload)

    yield put({
      type: types.getAuthorOneSuccess,
      payload: result
    })
  } catch (ex) {
    yield put({
      type: types.getAuthorOneError,
      payload: ex.message
    })
  }
}

function * getAuthorManySaga ({ payload }) {
  try {
    const result = yield call(api.getAuthorMany, payload)

    yield put({
      type: types.getAuthorManySuccess,
      payload: result
    })
  } catch (ex) {
    yield put({
      type: types.getAuthorManyError,
      payload: ex.message
    })
  }
}

function * getAuthorCountSaga ({ payload }) {
  try {
    const result = yield call(api.getAuthorCount, payload)

    yield put({
      type: types.getAuthorCountSuccess,
      payload: result
    })
  } catch (ex) {
    yield put({
      type: types.getAuthorCountError,
      payload: ex.message
    })
  }
}


export const sagas = [
  takeLatest(types.getAuthorById, getAuthorByIdSaga),
  takeLatest(types.getAuthorByIds, getAuthorByIdsSaga),
  takeLatest(types.getAuthorOne, getAuthorOneSaga),
  takeLatest(types.getAuthorMany, getAuthorManySaga),
  takeLatest(types.getAuthorCount, getAuthorCountSaga)
]
