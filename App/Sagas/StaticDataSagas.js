import { call, put, select } from 'redux-saga/effects'
import StaticDataActions from '../Redux/StaticDataRedux'

export function * getRoot (api, action) {
  const { data } = action
  const response = yield call(api.getRoot, data)

  if (response.ok) {
    yield put(StaticDataActions.getRootSuccess(response))
  } else {
    yield put(StaticDataActions.getRootFailure(response))
  }
}

export function * getListing (api) {
  const response = yield call(api.getListing)

  if (response.ok) {
    yield put(StaticDataActions.getListingSuccess(response.data))
  } else {
    yield put(StaticDataActions.getListingFailure(response))
  }
}

export function * getFavorite (api) {
  const response = yield call(api.getFavorite)

  if (response.ok) {
    yield put(StaticDataActions.getFavoriteSuccess(response.data))
  } else {
    yield put(StaticDataActions.getFavoriteFailure(response))
  }
}

export function * getArchive (api) {
  const response = yield call(api.getArchive)

  if (response.ok) {
    yield put(StaticDataActions.getArchiveSuccess(response.data))
  } else {
    yield put(StaticDataActions.getArchiveFailure(response))
  }
}