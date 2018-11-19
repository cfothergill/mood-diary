// @flow

import moment from 'moment'

export const formattedDate = () =>
  moment().format('D MMMM YYYY').toUpperCase()
