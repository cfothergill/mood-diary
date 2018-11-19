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
import { Provider } from 'react-redux'
import { createStore } from './src/store'
import Navigation from './src/services/navigation'
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

const AppContainer = createAppContainer(RootStack)
const store = createStore()

const App = () => (
  <Provider store={store}>
    <AppContainer />
  </Provider>
)

export default App
