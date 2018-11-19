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

    <View style={styles.icon}>
      <Image source={icons.happy} />
    </View>

    <Text style={styles.title}>
      feeling very happy
    </Text>

    <Text style={styles.content} ellipsizeMode="tail">
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
    backgroundColor: '#fff',
    borderRadius: 8,
    shadowColor: "#000",
    shadowOffset: {
    	width: 0,
    	height: 8,
    },
    shadowOpacity: 0.2,
    shadowRadius: 32,
    elevation: 10
  },

  header: {
    flexDirection: 'row'
  },

  date: {
    width: '75%',
    fontFamily: 'Work Sans',
    fontSize: 12,
    fontWeight: '700',
    textTransform: 'uppercase',
    color: '#4F545A'
  },

  time: {
    width: '25%',
    fontFamily: 'Work Sans',
    fontSize: 12,
    fontWeight: '700',
    textTransform: 'uppercase',
    textAlign: 'right',
    color: '#4F545A'
  },

  icon: {
    padding: 32
  },

  title: {
    fontFamily: 'Work Sans',
    fontSize: 24,
    color: '#4ECDC4',
    textAlign: 'center',
    marginBottom: 16
  },

  content: {
    flex: 1,
    fontFamily: 'Work Sans',
    fontSize: 14,
    color: '#888B8F',
    lineHeight: 20
  }
})

export default Entry
