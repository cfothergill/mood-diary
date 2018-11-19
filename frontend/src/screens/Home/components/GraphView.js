// @flow

import React from 'react'
import { View, StyleSheet, Text, SafeAreaView, Dimensions, ScrollView } from 'react-native'
import LinearGradient from 'react-native-linear-gradient'
import LineChart from '../../../components/LineChart'

type Props = {|
  +scores: number[],
|}

const GraphView = ({
  scores = []
}: Props) => (
  <View style={styles.root}>
    <LinearGradient
      style={styles.gradient}
      start={{x: 0, y: 0}}
      end={{x: 1, y: 1}}
      colors={[
        '#FFC371',
        '#FF5F6D'
      ]}
    />

    <SafeAreaView style={{ flex: 1 }}>
      <Text style={styles.title}>
        your week
      </Text>

      {scores.length > 0 && (
        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
          <LineChart
            width={Math.max(Dimensions.get('window').width, 70 * 7)}
            height={120}
            data={{
              datasets: [{
                data: scores
              }]
            }}
            chartConfig={{
              decimalPlaces: 2, // optional, defaults to 2dp
              color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
              style: { borderRadius: 16, backgroundColor: 'red' }
            }}
          />
        </ScrollView>
      )}

      {scores.length === 0 && (
        <Text style={styles.placeholder}>
          you’ll be able to see an overview of your feelings this week here
        </Text>
      )}
    </SafeAreaView>
  </View>
)

const styles = StyleSheet.create({
  root: {
    flex: 1,
    position: 'relative'
  },

  gradient: {
    flex: 1,
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%'
  },

  title: {
    fontFamily: 'Work Sans',
    fontWeight: '300',
    fontSize: 24,
    textAlign: 'center',
    color: '#fff',
    padding: 8,
    marginBottom: 16
  },

  placeholder: {
    fontFamily: 'Work Sans',
    fontSize: 16,
    color: '#fff',
    textAlign: 'center',
    marginTop: 120
  }
})

export default GraphView
