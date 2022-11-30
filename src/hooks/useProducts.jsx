import { useEffect, useState } from 'react';

import MockApi from '../api/MockApi';

export const useProducts = () => {
    
    const [ products, setProducts ] = useState( [] );
    const [ isLoading, setIsLoading ] = useState( true );

    const getProducts = async () => {
        console.log( 'Getting products...' );
        try {
            setIsLoading( true );
            const { data } = await MockApi.get('products');
            setProducts( data );
            setIsLoading( false );
            console.log( data );
        } catch ( err ) {
            console.log( err );
        }
    }

    useEffect(() => {
        getProducts();
    }, []);


    return { 
        products,
        isLoading
    }
}
