import React, { useRef } from 'react'
import {  Alert, StyleSheet, View } from 'react-native'

import { 
  SafeAreaComponent, 
  WelcomeSectionComponent, 
  ProductsSectionComponent, 
  ButtonComponent 
} from '../components';

export const WelcomeScreen = () => {
  
  const userRef = useRef({
    name: 'Jose Perez Joglar',
    cumpleaños: '18 de Octubre'
  });
  
  const showAlert = ( title = '', body ='' ) => {
    Alert.alert(
      title,
      body
    );
  }

  return (
    <SafeAreaComponent>
      <View style={ styles.container }>
          <WelcomeSectionComponent name={ userRef.current.name } cumpleaños={ userRef.current.cumpleaños } />
          <ProductsSectionComponent />          
      </View>
      <View style={ styles.buttonsContainer }>
        <ButtonComponent text='Canjeados' handleAction={ () => showAlert( 'Canjear', 'Felicidades haz canjeado tus puntos!' ) } />
        <ButtonComponent text='Ganados' handleAction={ () => showAlert( 'Ganados', 'Felicidades haz ganado puntos para ti!' ) } />
      </View>
    </SafeAreaComponent>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    overflow: 'hidden'
  },

  buttonsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    padding: 5,
    paddingBottom: 8
  },
  
});