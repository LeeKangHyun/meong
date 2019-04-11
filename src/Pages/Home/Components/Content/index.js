import React from 'react'
import { View, StyleSheet } from 'react-native'

import Text from '@/Components/Text'

export default ({

}) => {
  return (
    <View style={styles.theme}>
      <Text style={styles.text}>
        하얀말티즈
      </Text>
      <Text style={styles.text}>
        멍이를 소개합니다!
      </Text>
    </View>
  )
}

const styles = StyleSheet.create({
  theme: {
    marginBottom: 10,
    backgroundColor: 'rgba(221, 133, 133, 0.07)',
    height: 100,
  },
  text: {
    height: 50,
    fontSize: 18,
    lineHeight: 50,
    textAlign: 'center',
  }
})
