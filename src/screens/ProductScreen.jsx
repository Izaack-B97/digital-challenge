import React from 'react'
import { Text, StyleSheet, View, Image } from 'react-native'

import { SafeAreaComponent, ButtonComponent } from '../components'

import { globalStyles } from '../appTheme/globalStyles';

export const ProductScreen = ({ navigation, route }) => {

  const item = route.params;

  return (
    <SafeAreaComponent>
      <View style={ styles.container }>  
        <Text style={ styles.h1 }>{ item.product }</Text>
        <View style={[ styles.pointsContainer, globalStyles.shadow ]}>
          <View style={[ styles.imgContainer, globalStyles.shadow ]}>
            <Image source={{ uri: item.image }} style={ styles.img } />
          </View>
          <Text style={ styles.h1 }>{ item.is_redemption ? 'Ganaste' : 'Perdiste' }</Text>
          <Text style={ styles.h2 }>{ item.price.substring( 0, 3 ) } puntos</Text>
        </View>
        <View style={ styles.btnContainer }>
          <ButtonComponent text='Regresar' handleAction={ () => navigation.goBack() }/>
        </View>
      </View>
    </SafeAreaComponent>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginHorizontal: 10,
    paddingTop: 25
  },

  pointsContainer: {
    flex: 1,
    backgroundColor: '#afecff',
    borderRadius: 20,
    marginTop: 10,
    justifyContent: 'center',
    alignItems: 'center'
  },  

  btnContainer: {
    padding: 20, 
    alignItems: 'center'
  },
  
  imgContainer: {
    height: 120,
    width: 120,
    borderRadius: 100,
    overflow: 'hidden',
    
    
  },

  img: {
    flex: 1
  },

  h1: {
    fontSize: 30,
    fontWeight: 'bold'
  },

  h2: {
    fontSize: 25,
    fontWeight: 'bold'
  },

});