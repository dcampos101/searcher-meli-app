import { fireEvent, render, screen } from "@testing-library/react";
import { ProductSearch } from "../../../src/components/Product/ProductSearch";

describe('Pruebas en ProductSearch', () => {
    const inputValue = 'Samsung';
    const onNewCategory = jest.fn();
    test('Debe cambiar el valor en la caja de texto', async() => { 
     
        render( <ProductSearch onNewCategory={() =>{}} /> );
        //screen.debug();
        const input = screen.getByRole('textbox')
        fireEvent.input(input, {target: { value:inputValue}});

        expect(input.value).toBe(inputValue);
    })
    test('Debe llamar onNewCategory si el input tiene valor', async() => { 
     
        render( <ProductSearch onNewCategory={onNewCategory} /> );
        const input = screen.getByRole('textbox');
        const form = screen.getByRole('form');
        fireEvent.input(input, {target: { value:inputValue}});
        fireEvent.submit(form);

        expect(input.value).toBe('');
        expect(onNewCategory).toHaveBeenCalled();
        expect(onNewCategory).toHaveBeenCalledWith(inputValue);
    })
});