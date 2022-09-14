import { useState } from 'react';
import { ProductSearch, ProductGrid } from './components';

export const SearcherApp = () => {
    console.log('nueva categoria');
    //console.log(newCategory);
    const [ categories, setCategories ] = useState([]);
    console.log(categories);
    const onAddCategory = ( newCategory ) => {
        console.log('ingresa new category');
        if ( categories.includes(newCategory) ) return;
        setCategories([ newCategory ]);
    }
    /*
                <ProductSearch 
                onNewCategory={ (value) => onAddCategory(value) }
            />
    */
    return (
        <>
 
            { 
                categories.map( ( category ) => (
                    <ProductGrid 
                        key={ category } 
                        category={ category } />
                ))
            }
        </>
    )
}
