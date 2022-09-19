import { fireEvent, render, screen } from "@testing-library/react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ProductGrid } from "../../../src/components/Product/ProductGrid";
import { useFetchProduct } from "../../../src/hooks/useFetchProduct";

jest.mock('../../../src/hooks/useFetchProduct');

describe('Pruebas en ProductGrid', () => {
    const category = 'Samsung';
    test('Propiedades inciales', async() => { 
     
        useFetchProduct.mockReturnValue({
            products: [],
            isLoading: false
        });

        render( <ProductGrid category={ category } /> );
    });
    
    test('Mostra items cuando se carga el useFetchProduct', async() => { 
        const products = [
            {   title: 'Samsung Galaxy A33 5g 128 Gb Awesome White 6 Gb Ram',
                url: 'http://http2.mlstatic.com/D_963008-MLA50999956957_082022-I.jpg',
                id: 'MLA1137723021',
                prices: {
                    prices: {
                        0: {
                            amount: 99999,
                            conditions: {context_restrictions: Array(0), start_time: null, end_time: null, eligible: true},
                            currency_id: "ARS",
                            exchange_rate_context: "DEFAULT",
                            id: "11",
                            last_updated: "2022-08-01T14:18:09Z",
                            metadata: {},
                            regular_amount: null,
                            type: "standard"
                        },
                        1:{
                            amount: 84999,
                            conditions: {context_restrictions: Array(1), start_time: '2022-09-18T03:00:00Z', end_time: '2022-09-19T02:59:59Z', eligible: true},
                            currency_id: "ARS",
                            exchange_rate_context: "DEFAULT",
                            id: "26",
                            last_updated: "2022-09-16T20:04:45Z",
                            metadata: {promotion_id: 'OFFER-MLA1137723021-412721015', promotion_type: 'deal_of_the_day'},
                            regular_amount: 99999,
                            type: "promotion"
                        },
                        length: 2
                    }
                },
                shipping: {
                    free_shipping: true,
                    logistic_type: "fulfillment",
                    mode: "me2",
                    store_pick_up: false
                }
            }
        ]

        useFetchProduct.mockReturnValue({
            products: products,
            isLoading: false
        });
        render( 
              <Router>
                 <ProductGrid category={ category } />
              </Router>
        );
        //screen.debug();
        expect(screen.getAllByRole('img').length).toBe(1)
    })

});