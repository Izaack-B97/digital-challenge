import React from 'react'
import { ScrollView, StyleSheet, Text, View } from 'react-native'

import { ListItem } from './ListItem'

import { useProducts } from '../hooks/useProducts'
import { LoadingComponent } from './LoadingComponent'

export const ProductsSectionComponent = () => {

    const { products, isLoading } = useProducts();

    return (
        <View style={ styles.productsContainerSection }>
            <Text style={{ ...styles.txtHeader, marginLeft: 10, marginTop: 5 }}>Tus movimientos</Text>
            {
                isLoading 
                ? <LoadingComponent /> 
                : (
                    <ScrollView style={ styles.movementsContainer } showsVerticalScrollIndicator={ false }>
                        {
                            products.map( ( product, index ) => <ListItem key={ index } product={ product } /> )
                        }
                    </ScrollView>
                )
            }
            
        </View>
    )
}

const styles = StyleSheet.create({
    productsContainerSection: {
        flex: 1,
        
    },
    txtHeader: {
        fontWeight: 'bold',
        fontSize: 20
    },
    
    movementsContainer: {
        paddingTop: 10,
        // paddingBottom: 50
    },
})
