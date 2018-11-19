/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Component } from 'react';
import { Platform, StyleSheet, Text, View, StatusBar } from 'react-native';
import { createStackNavigator, createAppContainer } from 'react-navigation'
import Home from './src/screens/Home'
import NewEntry from './src/screens/NewEntry'

StatusBar.setBarStyle('light-content')

const MainStack = createStackNavigator({
  Home: Home,
})

const RootStack = createStackNavigator({
  Main: MainStack,
  NewEntry: NewEntry,
}, {
  mode: 'modal',
  headerMode: 'none',
  transparentCard: true
})

export default createAppContainer(RootStack)
