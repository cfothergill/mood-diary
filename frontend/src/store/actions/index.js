
export const SAVE_ENTRY = 'SAVE_ENTRY'
export const SAVE_ENTRY_REQUEST = 'SAVE_ENTRY_REQUEST'
export const SAVE_ENTRY_SUCCESS = 'SAVE_ENTRY_SUCCESS'
export const SAVE_ENTRY_FAILURE = 'SAVE_ENTRY_FAILURE'

export const saveEntry = (value) => ({
  type: SAVE_ENTRY,
  payload: value
})
