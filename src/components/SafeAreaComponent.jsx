import React from 'react'
import { SafeAreaView, StyleSheet } from 'react-native'

export const SafeAreaComponent = ({ children }) => {
  return (
    <SafeAreaView style={ styles.container }>
        { children }
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
    container: { 
        flex: 1,
        backgroundColor: '#ffffff'
    }
})