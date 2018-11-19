import axios from 'axios'
import Navigation from '../../services/navigation'
import {
  SAVE_ENTRY,
  SAVE_ENTRY_REQUEST,
  SAVE_ENTRY_SUCCESS,
  SAVE_ENTRY_FAILURE
} from '../actions'

const scores = {
  euphoric: 6,
  happy: 5,
  mildlyhappy: 4,
  neutral: 3,
  mildlyunhappy: 2,
  unhappy: 1,
  downrightmiserable: 0
}

const save = () => {
  return (store) => (next) => async (action) => {
    const { type, payload: entry } = action

    if (type !== SAVE_ENTRY) {
      return next(action)
    }

    store.dispatch({
      type: SAVE_ENTRY_REQUEST
    })

    const data = new FormData()
    data.append('entry', entry)

    try {
      const res = await axios.request({
        url: 'http://localhost:5000',
        method: 'POST',
        data
      })

      store.dispatch({
        type: SAVE_ENTRY_SUCCESS,
        payload: {
          value: entry,
          score: scores[res.data]
        }
      })

    } catch (err) {
      store.dispatch({
        type: SAVE_ENTRY_FAILURE,
        payload: err
      })
    }
  }
}

export default save
