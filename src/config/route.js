import React from 'react'
import { SafeAreaView, StyleSheet } from 'react-native'
import { NativeRouter, Route } from 'react-router-native'

import Title from '@/Components/Title'

import Home from '@/Pages/Home'

export default () => {
  return (
    <NativeRouter>
      <SafeAreaView style={styles.safe}>
        <Title label="멍이의 일상" />
        <Route exact path="/" component={Home} />
      </SafeAreaView>
    </NativeRouter>
  )
}

const styles = StyleSheet.create({
  safe: {
    flex: 1,
    backgroundColor: "#fff",
  },
});
