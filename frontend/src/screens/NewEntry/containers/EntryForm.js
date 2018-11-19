// @flow

import * as React from 'react'

class EntryForm extends React.Component {
  state = { value: '' }

  _handleChange = (value) =>
    this.setState({ value })

  render() {
    const { children } = this.props
    const { value } = this.state

    return children({
      isValid: !!value,
      onChange: this._handleChange,
      value,
    })
  }
}

export default EntryForm
