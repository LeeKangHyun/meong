import React, { Component } from 'react'
import { SafeAreaView, StyleSheet, View } from 'react-native';

import Text from './Components/Text'

export default class App extends Component {
  render() {
    return (
      <SafeAreaView style={styles.safe}>
        <View style={styles.title}>
          <Text style={styles.instructions}>멍이의 일상</Text>
        </View>
        <View style={styles.container}>
          <Text style={{fontSize: 24, color: '#222'}}>
            반가워요~
          </Text>
          <Text style={{fontSize: 24, color: '#222'}}>
            멍이의 일상을 보여드립니다~
          </Text>
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
  title: {
    height: 60,
    justifyContent: 'flex-start',
    alignItems: 'center',
    backgroundColor: 'rgba(135, 179, 171, 0.51)',
  },
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  instructions: {
    flex: 1,
    fontSize: 24,
    justifyContent: 'center',
    textAlign: 'center',
    lineHeight: 60,
    color: '#515151',
  },
});
