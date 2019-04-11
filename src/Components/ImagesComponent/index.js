import React from 'react'
import { View, Image, StyleSheet } from 'react-native'

export default ({ source = '' }) => {
  return (
    <View style={styles.container}>
      <Image
       style={styles.image}
        source={source}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  image: {
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
  }
})


