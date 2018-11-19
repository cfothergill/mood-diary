// @flow

import React, { Component } from 'react'
import { View, StyleSheet, FlatList, Dimensions } from 'react-native'
import PrimaryButton from '../../components/PrimaryButton'
import Layout from './components/Layout'
import GraphView from './components/GraphView'
import Entry from './components/Entry'

type Props = {||}

class Home extends Component<Props> {
  static navigationOptions = { header: null }

  _renderItem = ({ id }) => (
    <View
      key={id}
      style={{
        width: Dimensions.get('window').width - 48,
        paddingLeft: 8,
        paddingRight: 8,
      }}
    >
      <Entry />
    </View>
  )

  render() {
    const { navigation } = this.props

    return (
      <Layout
        header={<GraphView />}
        footer={(
          <PrimaryButton
            title="add new entry"
            icon={require('../../../assets/images/add-icon.png')}
            onPress={() => navigation.navigate('NewEntry')}
          />
        )}
      >
        <FlatList
          horizontal
          pagingEnabled
          showsHorizontalScrollIndicator={false}
          style={{
            overflow: 'visible',
            marginTop: -36,
            marginBottom: 36,
          }}
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
