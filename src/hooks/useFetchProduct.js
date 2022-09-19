import { useEffect, useState } from 'react';
import { getProduct } from '../helpers/getProduct';

export const useFetchProduct = ( category ) => {
 
    const [products, setProducts] = useState([]);
    const [isLoading, setIsLoading] = useState( true );

    const getData = async() => {
        const newData = await getProduct( category );
        setProducts(newData);
        setIsLoading(false);
    }
    
    useEffect( () => {
        getData();
    }, []);

    return {
        products,
        isLoading
    }
}
