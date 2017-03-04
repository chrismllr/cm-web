const initialState = {
  isLightbox: false,
  lightboxProject: {}
}

const TOGGLE_LIGHTBOX = 'TOGGLE_LIGHTBOX'
const SET_LIGHTBOX_PROJECT = 'SET_LIGHTBOX_PROJECT'

const toggleLightbox = (val) => ({
  type: TOGGLE_LIGHTBOX,
  payload: val
})

const setLghtboxProject = (p = {}) => ({
  type: SET_LIGHTBOX_PROJECT,
  payload: p
})

export const actions = {
  toggleLightbox,
  setLghtboxProject
}

const ACTION_HANDLERS = {
  [SET_LIGHTBOX_PROJECT] (state, action) {
    return {
      ...state,
      lightboxProject: action.payload
    }
  },

  [TOGGLE_LIGHTBOX] (state) {
    return {
      ...state,
      isLightbox: !state.isLightbox
    }
  }
}

export default function lightboxReducer (state = initialState, action) {
  const handler = ACTION_HANDLERS[action.type]

  return handler ? handler(state, action) : state
}
