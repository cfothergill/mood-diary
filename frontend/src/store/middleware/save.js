import axios from 'axios'
import {
  SAVE_ENTRY,
  SAVE_ENTRY_REQUEST,
  SAVE_ENTRY_SUCCESS,
  SAVE_ENTRY_FAILURE
} from '../actions'

const save = () => {
  return (store) => (next) => async (action) => {
    if (action.type !== SAVE_ENTRY) {
      return next(action)
    }

    store.dispatch({
      type: SAVE_ENTRY_REQUEST
    })

    try {
      const res = await axios.post('http://localhost:5000', {
        entry: action.payload
      })

    } catch (err) {
      store.dispatch({
        type: SAVE_ENTRY_FAILURE,
        payload: err
      })
    }
  }
}

const
