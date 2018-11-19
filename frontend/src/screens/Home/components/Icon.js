// @flow

import React from 'react'
import { View, Image, StyleSheet } from 'react-native'
import * as icons from '../../../resources/icons'

const images = {
  0: icons.distraught,
  1: icons.sad,
  2: icons.sad,
  3: icons.neutral,
  4: icons.happy,
  5: icons.happy,
  6: icons.euphoric
}

const Icon = ({
  score,
}) => (
  <View style={styles.root}>
    <Image
      style={styles.image}
      source={images[score]}
    />
  </View>
)

const styles = StyleSheet.create({
  root: {
    justifyContent: 'center',
    alignItems: 'center',
    width: 104,
    height: 104,
    backgroundColor: '#4ECDC4',
    borderRadius: 104 / 2,
  },

  image: {
    width: 56,
    height: 56
  }
})

export default Icon
