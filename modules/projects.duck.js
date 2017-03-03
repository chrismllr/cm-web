// import axios from 'axios'
import { projects } from '../db.json'

const initialState = {
  projects: []
}

const SET_PROJECTS = 'SET_PROJECTS'

const getProjects = () => (dispatch) => {
  // return axios.get('http://localhost:2000/projects')
  // .then((projects) => {
  dispatch({
    type: SET_PROJECTS,
    payload: projects
  })
  // })
}

export const actions = {
  getProjects
}

const ACTION_HANDLERS = {
  [SET_PROJECTS] (state, action) {
    return {
      ...state,
      projects: action.payload
    }
  }
}

export default function projectsReducer (state = initialState, action) {
  const handler = ACTION_HANDLERS[action.type]

  return handler ? handler(state, action) : state
}
