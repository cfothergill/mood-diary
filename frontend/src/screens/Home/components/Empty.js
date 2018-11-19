// @flow

import * as React from 'react'
import { View, StyleSheet, Image, Text } from 'react-native'
import * as icons from '../../../resources/icons'

const Empty = () => (
  <View style={styles.root}>
    <Image source={icons.empty} />

    <Text style={styles.text}>
      Start logging how you’re feeling every day and we’ll…
    </Text>
  </View>
)

const styles = StyleSheet.create({
  root: {
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
    padding: 32
  },

  text: {
    marginTop: 24,
    fontFamily: 'Work Sans',
    fontSize: 16,
    color: '#4F545A',
    textAlign: 'center'
  }
})

export default Empty
