import { projects } from '../db.json'
import { normalize } from 'normalizr'
import * as schema from './schema'

export const STATE_KEY = 'entities'

const initialState = {
  projects: {}
}

const ADD_ENTITIES = 'ADD_ENTITIES'

// Can probably change this to `addEntities`,
// bring `getProjects` into a separate Projects duck
// and only manage the actual state of entities here
const getProjects = () => dispatch => {
  const data = normalize(projects, schema.projectList)

  dispatch({
    type: ADD_ENTITIES,
    payload: data.entities
  })
}

export const actions = {
  getProjects
}

const ACTION_HANDLERS = {
  [ADD_ENTITIES](entities, action) {
    return {
      ...entities,
      ...action.payload
    }
  }
}

export default function entitiesReducer(state = initialState, action) {
  const handler = ACTION_HANDLERS[action.type]

  return handler ? handler(state, action) : state
}
