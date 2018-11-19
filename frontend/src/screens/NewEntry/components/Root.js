// @flow

import * as React from 'react'
import { View, SafeAreaView, StyleSheet, KeyboardAvoidingView } from 'react-native'

const Root = ({
  children,
}) => (
  <View style={styles.root}>
    <KeyboardAvoidingView style={{ flex: 1 }} behavior="padding" enabled>
      <SafeAreaView style={styles.content}>
          {children}
      </SafeAreaView>
    </KeyboardAvoidingView>
  </View>
)

const styles = StyleSheet.create({
  root: { flex: 1, paddingTop: 44 },
  content: { flex: 1, backgroundColor: '#fff' }
})

export default Root
