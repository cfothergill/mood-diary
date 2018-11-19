// @flow

import React, { Component, Fragment } from 'react'
import { View, SafeAreaView } from 'react-native'
import { connect } from 'react-redux'
import { saveEntry } from '../../store'
import * as icons from '../../resources/icons'
import PrimaryButton from '../../components/PrimaryButton'
import Box from '../../components/Box'
import EntryForm from './containers/EntryForm'
import Root from './components/Root'
import Header from './components/Header'
import Editor from './components/Editor'

class NewEntry extends Component {
  render() {
    const { saveEntry, navigation } = this.props

    return (
      <Root>
        <Header />

        <EntryForm>
          {config => (
            <Fragment>
              <Editor
                value={config.value}
                onChange={config.onChange}
              />

              <Box p={2}>
                <PrimaryButton
                  disabled={!config.isValid}
                  title="save this entry"
                  icon={icons.save}
                  onPress={() => {
                    saveEntry(config.value)
                    navigation.navigate('Home')
                  }}
                />
              </Box>
            </Fragment>
          )}
        </EntryForm>
      </Root>
    )
  }
}

export default connect(undefined, { saveEntry })(NewEntry)
