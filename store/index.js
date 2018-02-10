import { createStore, applyMiddleware, combineReducers } from 'redux'
import thunkMiddleware from 'redux-thunk'
import entities, { STATE_KEY as ENTITIES_KEY } from '../modules/entities.duck'
import lightbox, { STATE_KEY as LIGHTBOX_KEY } from '../modules/lightbox.duck'

export function initStore(initialState) {
  return createStore(
    combineReducers({
      [ENTITIES_KEY]: entities,
      [LIGHTBOX_KEY]: lightbox
    }),
    initialState,
    applyMiddleware(thunkMiddleware)
  )
}
