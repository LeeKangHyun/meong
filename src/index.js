// @flow
import React, { Component } from 'react'
import { SafeAreaView, StyleSheet } from 'react-native';

import Home from './Pages/Home'

export default class App extends Component {
  render() {
    return (
      <SafeAreaView style={styles.safe}>
        <Home />
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  safe: {
    flex: 1,
    backgroundColor: "#fff",
  },
});
