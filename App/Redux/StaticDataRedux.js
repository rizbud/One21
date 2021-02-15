import { createReducer, createActions } from 'reduxsauce'
import Immutable from 'seamless-immutable'

/* ------------- Types and Action Creators ------------- */

const { Types, Creators } = createActions({
  getRootRequest: ['data'],
  getRootSuccess: ['data'],
  getRootFailure: ['error'],

  getListingRequest: ['data'],
  getListingSuccess: ['data'],
  getListingFailure: ['error'],

  getFavoriteRequest: ['data'],
  getFavoriteSuccess: ['data'],
  getFavoriteFailure: ['error'],

  getArchiveRequest: ['data'],
  getArchiveSuccess: ['data'],
  getArchiveFailure: ['error'],
})

export const StaticDataTypes = Types
export default Creators

export const INITIAL_STATE = Immutable({
  main: { data: null, fetching: false, error: null },
  listing: { data: null, fetching: false, error: null },
  favorite: { data: null, fetching: false, error: null },
  archive: { data: null, fetching: false, error: null },
})

export const GithubSelectors = {
  getStaticData: state => state.staticData.main
}

export const getRootRequest = (state, { data }) =>
  state.merge({ ...state, main: { ...state.main, fetching: true, error: null } })
export const getRootSuccess = (state, { data }) =>
  state.merge({ ...state, main: { ...state.main, data, fetching: false, error: null } })
export const getRootFailure = (state, { error }) =>
  state.merge({ ...state, main: { ...state.main, fetching: false, error } })

export const getListingRequest = (state) =>
  state.merge({ ...state, listing: { ...state.listing, fetching: true, error: null } })
export const getListingSuccess = (state, { data }) =>
  state.merge({ ...state, listing: { ...state.listing, data, fetching: false, error: null } })
export const getListingFailure = (state, { error }) =>
  state.merge({ ...state, listing: { ...state.listing, fetching: false, error } })

export const getFavoriteRequest = (state) =>
  state.merge({ ...state, favorite: { ...state.favorite, fetching: true, error: null } })
export const getFavoriteSuccess = (state, { data }) =>
  state.merge({ ...state, favorite: { ...state.favorite, data, fetching: false, error: null } })
export const getFavoriteFailure = (state, { error }) =>
  state.merge({ ...state, favorite: { ...state.favorite, fetching: false, error } })

export const getArchiveRequest = (state) =>
  state.merge({ ...state, archive: { ...state.archive, fetching: true, error: null } })
export const getArchiveSuccess = (state, { data }) =>
  state.merge({ ...state, archive: { ...state.archive, data, fetching: false, error: null } })
export const getArchiveFailure = (state, { error }) =>
  state.merge({ ...state, archive: { ...state.archive, fetching: false, error } })

export const reducer = createReducer(INITIAL_STATE, {
  [Types.GET_ROOT_REQUEST]: getRootRequest,
  [Types.GET_ROOT_SUCCESS]: getRootSuccess,
  [Types.GET_ROOT_FAILURE]: getRootFailure,

  [Types.GET_LISTING_REQUEST]: getListingRequest,
  [Types.GET_LISTING_SUCCESS]: getListingSuccess,
  [Types.GET_LISTING_FAILURE]: getListingFailure,

  [Types.GET_FAVORITE_REQUEST]: getFavoriteRequest,
  [Types.GET_FAVORITE_SUCCESS]: getFavoriteSuccess,
  [Types.GET_FAVORITE_FAILURE]: getFavoriteFailure,

  [Types.GET_ARCHIVE_REQUEST]: getArchiveRequest,
  [Types.GET_ARCHIVE_SUCCESS]: getArchiveSuccess,
  [Types.GET_ARCHIVE_FAILURE]: getArchiveFailure,
})