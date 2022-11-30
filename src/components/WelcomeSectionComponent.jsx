import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

import { globalStyles } from '../appTheme/globalStyles';

export const WelcomeSectionComponent = ( { name = '', cumpleaños = '' } ) => {
  return (
    <View style={[ styles.welcomeSection, globalStyles.shadow ]}>
        <Text style={ styles.txtHeader }>¡Bienvenido!</Text>
        <Text style={ styles.txtName }>{ name }</Text>
        <Text style={ styles.txtFecha }>Cumpleaños: { cumpleaños }</Text>
    </View>
  )
}

const styles = StyleSheet.create({
    welcomeSection: {
        height: 142,
        backgroundColor: '#afecff',
        borderBottomLeftRadius: 25,
        borderBottomRightRadius: 25,
        paddingTop: 30,
        paddingLeft: 10
    },

    txtHeader: {
        fontWeight: 'bold',
        fontSize: 20
    },

    txtName: {
        fontSize: 20,
        marginTop: 7,
        marginBottom: 10
    },
    
    txtFecha: {
    fontSize: 14
    },

});

