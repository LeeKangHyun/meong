import React from 'react'
import { Platform, Text, StyleSheet } from 'react-native'
import { Fonts } from '../../Utils/Fonts'

export default ({ children, style }) => {
  return (
    <Text style={{ ...styles.text, ...style }}>{children}</Text>
  )
}

const styles = StyleSheet.create({
  text: {
    ...Platform.select({
      android: {
        fontFamily: 'BMDOHYEON'
      },
      ios: {
        fontFamily: Fonts.BMDOHYEON
      }
    }),
    fontSize: 40,
    fontWeight: '400',
  }
})
