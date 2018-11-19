// @flow

import * as React from 'react'
import { TouchableOpacity, View, Image, StyleSheet, Text } from 'react-native'

const PrimaryButton = ({
  icon,
  title,
  onPress,
  disabled = false
}) => (
  <TouchableOpacity style={styles.root} onPress={disabled ? () => {} : onPress}>
    {title && (
      <Text style={[styles.title, disabled ? styles.disabled : {}]}>
        {title}
      </Text>
    )}

    <View style={[styles.button, disabled ? styles.disabled : {}]}>
      <Image source={icon} />
    </View>
  </TouchableOpacity>
)

const styles = StyleSheet.create({
  root: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    alignItems: 'center'
  },

  button: {
    justifyContent: 'center',
    alignItems: 'center',
    width: 64,
    height: 64,
    backgroundColor: '#4ECDC4',
    borderRadius: 32
  },

  title: {
    marginRight: 16,
    fontFamily: 'Work Sans',
    fontSize: 14,
    color: '#4ECDC4',
  },

  disabled: {
    opacity: 0.5
  }
})

export default PrimaryButton
