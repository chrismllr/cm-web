function restrictScroll () {
  document.body.style.overflow = 'hidden'
}

function enableScroll () {
  document.body.style.overflow = 'auto'
}

export const STATE_KEY = 'lightbox'

const initialState = {
  isLightbox: false,
  lightboxProject: {}
}

const TOGGLE_LIGHTBOX = 'TOGGLE_LIGHTBOX'
const SET_LIGHTBOX_PROJECT = 'SET_LIGHTBOX_PROJECT'

const toggleLightbox = (newVal) => (dispatch) => {
  if (!newVal) {
    enableScroll()
  } else {
    restrictScroll()
  }

  dispatch({
    type: TOGGLE_LIGHTBOX,
    payload: newVal
  })
}

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

  [TOGGLE_LIGHTBOX] (state, action) {
    return {
      ...state,
      isLightbox: action.payload
    }
  }
}

export default function lightboxReducer (state = initialState, action) {
  const handler = ACTION_HANDLERS[action.type]

  return handler ? handler(state, action) : state
}
