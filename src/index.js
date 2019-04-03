import React, { Component } from 'react'
import { Platform, SafeAreaView, StyleSheet, Text, View } from 'react-native';
import { Fonts } from './Utils/Fonts'

export default class App extends Component {
  render() {
    return (
      <SafeAreaView style={styles.safe}>
        <View style={styles.container}>
          <Text style={styles.instructions}>멍이의 일상</Text>
          <Text style={styles.text}>반가워요~</Text>
        </View>
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  safe: {
    flex: 1,
    backgroundColor: "#efefef",
  },
  container: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  instructions: {
    ...Platform.select({
      ios: {
        fontFamily: Fonts.BMDOHYEON,
        fontWeight: '400',
        fontStyle: 'normal',
      },
      android: {
        fontFamily: Fonts.BMDOHYEON,
        fontWeight: '400',
        fontStyle: 'normal',
      }
    }),
    fontSize: 44,
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
  text: {
    ...Platform.select({
      ios: {
        fontFamily: Fonts.BMDOHYEON,
        fontWeight: '400',
        fontStyle: 'normal',
      },
      android: {
        fontFamily: Fonts.BMDOHYEON,
        fontWeight: '400',
        fontStyle: 'normal',
      }
    }),
    fontSize: 24,
  }
});
