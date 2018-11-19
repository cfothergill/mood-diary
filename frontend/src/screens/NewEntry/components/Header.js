// @flow

import * as React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import { formattedDate } from '../util/date'

const Header = () => (
  <View style={styles.root}>
    <Text style={styles.title}>
      how are you feeling?
    </Text>

    <Text style={styles.date}>
      {formattedDate()}
    </Text>
  </View>
)

const styles = StyleSheet.create({
  root: {
    padding: 32,
  },

  title: {
    fontFamily: 'Work Sans',
    fontSize: 24,
    color: '#4ECDC4',
    textAlign: 'center',
    marginBottom: 24
  },

  date: {
    fontFamily: 'Work Sans',
    fontSize: 12,
    fontWeight: '700',
    color: '#4F545A'
  }
})

export default Header
