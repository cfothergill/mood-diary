// @flow

import * as React from 'react'
import { View, StyleSheet, SafeAreaView } from 'react-native'

type Props = {|
  +header: React.Node,
  +children: React.Node,
  +footer: React.Node
|}

const Layout = ({
  header,
  children,
  footer
}: Props) => (
  <View style={styles.root}>
    <View style={styles.header}>{header}</View>
    <View style={styles.content}>{children}</View>
    <SafeAreaView>
      <View style={styles.footer}>{footer}</View>
    </SafeAreaView>
  </View>
)

const styles = StyleSheet.create({
  root: { flex: 1 },
  header: { height: '36%' },
  content: { flex: 1, paddingLeft: 24, paddingRight: 24 },
  footer: { height: 64, paddingLeft: 16, paddingRight: 16 }
})

export default Layout
