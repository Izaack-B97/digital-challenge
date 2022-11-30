import React from 'react'
import { StyleSheet, Text, View, TouchableOpacity, Image } from 'react-native'

import { useNavigation } from '@react-navigation/native'

export const ListItem = ({ product = {} }) => {

    const { navigate } = useNavigation();

    const goToProduct = () => {
        navigate( 'ProductScreen', product );
    }

    return (
        <TouchableOpacity 
            style={[ 
                styles.itemContainer, 
                styles.row 
            ]} 
            activeOpacity={ 0.8 }
            onPress={ goToProduct } 
        >
            <View style={ styles.row }>
                <View style={ styles.blankCheck }>
                    <Image source={{ uri: product.image }} style={ styles.img } />
                </View>
                
                <Text style={ styles.txtItem }>{ product.product }</Text>
            </View>  
            <View style={{ ...styles.row, paddingRight: 5 }}>
                <Text style={{ ...styles.txtItem, marginRight: 10, marginTop: 1 }}>
                    { product.is_redemption ? '+ ' : '- ' } 
                    ${ product.price }
                </Text>
                <Text style={{ ...styles.txtItem, color: '#eee', fontWeight: 'bold' }}>></Text>
            </View>  
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    row: {
        flexDirection: 'row',
    },

    itemContainer: {
        backgroundColor: '#dcdcdc',
        marginTop: 3,
        padding: 5,
        justifyContent: 'space-between'
    },

    blankCheck: {
        height: 20,
        width: 20,
        backgroundColor: '#eeeeee',
        borderRadius: 100,
        marginHorizontal: 5,
        overflow: 'hidden'
    },
    img: {
        height: 20,
        width: 20,
    },
    txtItem: {
        fontWeight: '500'
    }
});
