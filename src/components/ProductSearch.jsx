import { useState } from 'react';
import { BsSearch } from 'react-icons/bs';

export const ProductSearch = ({ onNewCategory }) => {

    const [ inputValue, setInputValue ] = useState('');

    const onInputChange = ({ target }) => {
        setInputValue( target.value );
    }

    const onSubmit = ( event ) => {
        event.preventDefault();
        if( inputValue.trim().length <= 1) return;

        // setCategories( categories => [ inputValue, ...categories ]);
        setInputValue('');
        onNewCategory( inputValue.trim() );
    }

    return (
        <form onSubmit={ onSubmit }>
            <input 
                type="text"
                placeholder="Buscar productos, marcas y más…"
                maxLength={ 100 }
                value={ inputValue }
                onChange={ onInputChange }
            />
            <BsSearch className="search_icon" color="#999" size={20} />
        </form>
    )
}
