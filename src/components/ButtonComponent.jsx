import React from 'react'
import { StyleSheet, Text, TouchableOpacity } from 'react-native'

import { globalStyles } from '../appTheme/globalStyles';

export const ButtonComponent = ({ text = '', handleAction = () => {} }) => {
  return (
    <TouchableOpacity 
        style={[ styles.btn, globalStyles.shadow ]}
        onPress={ handleAction }
    >
          <Text style={ styles.btnTxt } >{ text }</Text>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
    btn: {
        backgroundColor: '#afecff',
        width: '48%',
        justifyContent: 'center',
        alignItems: 'center',
        padding: 1,
        borderRadius: 5
      },
    
    btnTxt: {
        fontWeight: 'bold'
    }
}); 