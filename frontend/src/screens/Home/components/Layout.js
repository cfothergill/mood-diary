// @flow

import * as React from 'react'
import { View, StyleSheet } from 'react-native'

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
    <View style={styles.footer}>{footer}</View>
  </View>
)

const styles = StyleSheet.create({
  root: { flex: 1 },
  header: { height: '36%', backgroundColor: 'red' },
  content: { flex: 1, backgroundColor: '#e5e5e5' },
  footer: { height: 64, backgroundColor: 'green' }
})

export default Layout
