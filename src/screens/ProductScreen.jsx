import React from 'react'
import { ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import { SafeAreaComponent } from '../components/SafeAreaComponent'

export const ProductScreen = () => {
  return (
    <SafeAreaComponent>
      <View style={ styles.container }>
          <View style={ styles.welcomeSection }>
            <Text style={ styles.txtHeader }>¡Bienvenido!</Text>
            <Text style={ styles.txtName }>Isaac Bustamante Ibarrola</Text>
            <Text style={ styles.txtFecha }>Cumpleaños: 25 de Octubre</Text>
          </View>

          <View style={ styles.productsSection }>
            <Text style={{ ...styles.txtHeader, marginLeft: 10, marginTop: 5 }}>Tus movimientos</Text>
            <ScrollView style={ styles.movementsContainer } showsVerticalScrollIndicator={ false }>
              {
                [1,2,3,4,,5,56,6,6,6,6,6,6,6,6,6,,6,5,,5,,,4,4,,4,4,44,4,44,4,44,4,44,4,44,4,44,4,44,4,44,4,44,4,44,4,44,4,44,4,44,4,44,4,44,4,44,4,44,4,44,4,44,4,4,,4,4,4,4,,4,4,,4,4,4,,4].map((item, index) => <Text key={ index }>Hola</Text>)
              }
            </ScrollView>
          </View>
          
      </View>
      <View style={ styles.buttonsContainer }>
        <TouchableOpacity style={ styles.btn }>
          <Text style={ styles.btnTxt } >Canjeados</Text>
        </TouchableOpacity>
        <TouchableOpacity style={ styles.btn }>
          <Text style={ styles.btnTxt } >Ganados</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaComponent>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    overflow: 'hidden'
  },

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

  movementsContainer: {
    marginLeft: 10,
    paddingTop: 15,
    paddingBottom: 30
  },

  buttonsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    padding: 5,
    paddingBottom: 17
  },

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
