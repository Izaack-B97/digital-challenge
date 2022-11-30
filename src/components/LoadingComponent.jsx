import React from 'react'
import { ActivityIndicator, StyleSheet, View } from 'react-native'

export const LoadingComponent = () => {
  return (
    <View style={ styles.loadingContainer }>
        <ActivityIndicator size='large' style={ styles.loading } />
    </View>
  )
}

const styles = StyleSheet.create({
    loadingContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },

    loading: {
        marginBottom: 50
    }
})