import { createStore, applyMiddleware, combineReducers } from 'redux'
import thunkMiddleware from 'redux-thunk'
import projects from './modules/projects.duck'

export function initStore (initialState) {
  return createStore(
    combineReducers({ projects }),
    initialState,
    applyMiddleware(thunkMiddleware)
  )
}
