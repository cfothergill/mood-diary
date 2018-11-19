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
        entries: [{
          key: id.generate(),
          score: payload.score,
          value: payload.value,
          createdAt: new Date(),
          title: payload.title
        }, ...state.entries]
      }

    default:
      return state
  }
}

export default entries
