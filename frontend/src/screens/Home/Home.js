// @flow

import React, { Component } from 'react'
import { View, StyleSheet, FlatList, Dimensions } from 'react-native'
import { connect } from 'react-redux'
import { getEntries, getScores } from '../../store'
import PrimaryButton from '../../components/PrimaryButton'
import Layout from './components/Layout'
import GraphView from './components/GraphView'
import Entry from './components/Entry'
import Empty from './components/Empty'

type Props = {||}

class Home extends Component<Props> {
  static navigationOptions = { header: null }

  _renderItem = ({
    item: {
      key,
      createdAt,
      score,
      value,
      title
    }
  }) => (
    <View
      key={key}
      style={{
        width: Dimensions.get('window').width - 48,
        paddingLeft: 8,
        paddingRight: 8,
      }}
    >
      <Entry
        createdAt={createdAt}
        score={score}
        value={value}
        title={title}
      />
    </View>
  )

  render() {
    const { navigation, entries, scores } = this.props

    return (
      <Layout
        header={<GraphView scores={scores} />}
        footer={(
          <PrimaryButton
            title="add new entry"
            icon={require('../../../assets/images/add-icon.png')}
            onPress={() => navigation.navigate('NewEntry')}
          />
        )}
      >
        {scores.length > 0 ? (
          <FlatList
            horizontal
            pagingEnabled
            showsHorizontalScrollIndicator={false}
            style={{
              overflow: 'visible',
              marginTop: -36,
              marginBottom: 36,
            }}
            data={entries}
            renderItem={this._renderItem}
          />
        ) : (
          <Empty />
        )}
      </Layout>
    )
  }
}

export default connect(
  state => ({
    entries: getEntries(state),
    scores: getScores(state)
  })
)(Home)
