import React from 'react'
import { View, StyleSheet } from 'react-native'

import Text from '@/Components/Text'

export default ({
  label,
}) => {
  return (
    <View style={styles.title}>
      <Text style={styles.instructions}>{label}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  title: {
    height: 60,
    marginBottom: 10,
    justifyContent: 'flex-start',
    alignItems: 'center',
    backgroundColor: 'rgba(211, 252, 191, 0.51)',
  },
  instructions: {
    flex: 1,
    fontSize: 24,
    justifyContent: 'center',
    textAlign: 'center',
    lineHeight: 60,
    color: '#515151',
  },
})
