import id from 'shortid'
import {
  SAVE_ENTRY_REQUEST,
  SAVE_ENTRY_SUCCESS,
  SAVE_ENTRY_FAILURE
} from '../actions'

const INITIAL = {
  saving: false,
  entries: [],
  error: null
}

const entries = (state = INITIAL, action) => {
  const { type, payload } = action

  switch (type) {
    case SAVE_ENTRY_REQUEST:
      return { ...state, saving: true }

    case SAVE_ENTRY_FAILURE:
      return { ...state, saving: false, error: payload }

    case SAVE_ENTRY_SUCCESS:
      return {
        ...state,
        saving: false,
        entries: [...state.entries, {
          key: id.generate(),
          scrore: payload.score,
          value: payload.value
        }]
      }

    default:
      return state
  }
}

export default entries
