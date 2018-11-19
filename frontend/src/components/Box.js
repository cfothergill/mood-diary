// @flow

import * as React from 'react'
import { View, StyleSheet } from 'react-native'

const Box = ({
  children,
  p = 1
}) => (
  <View style={styles[`p${p}`]}>
    {children}
  </View>
)

const styles = StyleSheet.create({
  p1: { padding: 8 },
  p2: { padding: 16 },
  p3: { padding: 24 },
  p4: { padding: 36 }
})

export default Box
