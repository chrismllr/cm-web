import { createStore, applyMiddleware, combineReducers } from 'redux'
import thunkMiddleware from 'redux-thunk'
import projects from './modules/projects.duck'
import lightbox from './modules/lightbox.duck'

export function initStore (initialState) {
  return createStore(
    combineReducers({ projects, lightbox }),
    initialState,
    applyMiddleware(thunkMiddleware)
  )
}
