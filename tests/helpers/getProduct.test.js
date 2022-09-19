import { getProduct } from "../../src/helpers/getProduct";

describe('Pruebas en getProduct', () => {
    test('Debe retornar un arraglo de productos', async() => { 
        
        const products = await getProduct('Samsung');
        console.log(products);
        expect(products.length).toBeGreaterThan(0);
        expect(products[0]).toEqual({
            title: expect.any(String),
            url: expect.any(String),
            id: expect.any(String),
            condition: expect.any(String),
            price: expect.any(Number),
            prices: expect.any(Object),
            shipping: expect.any(Object)
        })
    })

});