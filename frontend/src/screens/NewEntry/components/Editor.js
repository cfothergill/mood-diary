// @flow

import * as React from 'react'
import { TextInput, StyleSheet } from 'react-native'

const Editor = ({
  value,
  onChange,
}) => (
  <TextInput
    multiline
    placeholder="Start typing your thoughts..."
    style={styles.root}
    value={value}
    onChangeText={onChange}
  />
)

const styles = StyleSheet.create({
  root: {
    flex: 1,
    padding: 24,
    fontFamily: 'Work Sans',
    fontSize: 16,
    color: '#888B8F'
  }
})

export default Editor
