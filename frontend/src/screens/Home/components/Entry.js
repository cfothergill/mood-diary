// @flow

import React from 'react'
import { View, StyleSheet, Text, Image, Dimensions } from 'react-native'

type Props = {|

|}

const Entry = ({

}: Props) => (
  <View style={styles.root}>
    <View style={styles.header}>
      <Text style={styles.date}>16th November 2018</Text>
      <Text style={styles.time}>13:12</Text>
    </View>

    <Image style={styles.icon} source={icons.happy} />

    <Text style={styles.title}>
      feeling very happy
    </Text>

    <Text style={styles.content}>
      “Brevity is the soul of wit. The soul of wit is what brevity is. Brevity? Soul of wit? They're the same thing. Like if you had brevity in one hand and the soul of wit in the other, you’d be hard pressed to tell them apart.”
    </Text>
  </View>
)

const icons = {
  happy: require('../../../../assets/images/happy.png')
}

const styles = StyleSheet.create({
  root: {
    flex: 1,
    padding: 24,
    alignItems: 'center',
    width: 300,
    backgroundColor: '#fff',
    borderRadius: 8
  },

  header: {
    flexDirection: 'row'
  },

  date: {

  },

  time: {

  },

  icon: {

  },

  title: {

  },

  content: {

  }
})

export default Entry
