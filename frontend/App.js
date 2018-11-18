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

StatusBar.setBarStyle('light-content')

const AppNavigator = createStackNavigator({
  Home: Home,
})

export default createAppContainer(AppNavigator)