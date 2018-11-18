// @flow

import React, { Component } from 'react'
import { View, StyleSheet, FlatList } from 'react-native'
import Layout from './components/Layout'
import GraphView from './components/GraphView'
import Entry from './components/Entry'

type Props = {||}

class Home extends Component<Props> {
  static navigationOptions = { header: null }

  _renderItem = ({ id }) => (
    <Entry key={id} />
  )

  render() {
    return (
      <Layout
        header={<GraphView />}
        footer={<View style={{ backgroundColor: 'transparent' }} />}
      >
        <FlatList
          horizontal
          pagingEnabled
          decelerationRate={0}
          snapToInterval={300} //your element width
          snapToAlignment={"center"}
          data={[
            { key: '1' },
            { key: '2' },
            { key: '3' },
            { key: '4' },
            { key: '5' },
            { key: '6' },
            { key: '7' },
            { key: '8' },
            { key: '9' }
          ]}
          renderItem={this._renderItem}
        />
      </Layout>
    )
  }
}

export default Home
