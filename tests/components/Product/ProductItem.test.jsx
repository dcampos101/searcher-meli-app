import { render, screen } from "@testing-library/react"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ProductItem } from "../../../src/components/Product/ProductItem"

describe('Prueba en ProductItem', () =>{

    const title = 'Samsung Galaxy A33 5g 128 Gb Awesome White 6 Gb Ram';
    const url = 'http://http2.mlstatic.com/D_963008-MLA50999956957_082022-I.jpg';
    const id = 'MLA1137723021';
    const prices = {
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
    };
    const shipping = {
        free_shipping: true,
        logistic_type: "fulfillment",
        mode: "me2",
        store_pick_up: false
    };

    test('Debe hacer match con el snapshot', () =>{
      const { container } =  render (
            <Router>
                <ProductItem title={ title } url ={ url } id={ id } prices={ prices} shipping={ shipping } />)
            </Router>
        );
        expect(container).toMatchSnapshot();

    });

    test('Debe mostrar la imagen con sus propiedades', () =>{
        render (
            <Router>
                <ProductItem title={ title } url ={ url } id={ id } prices={ prices} shipping={ shipping } />
            </Router>
        );
        const { src, alt } = screen.getByRole('img');
        expect( src ).toBe(url);
        expect( alt ).toBe(title);
    });

    test('Debe mostrar titulo del componente', () =>{
        render (
            <Router>
                <ProductItem title={ title } url ={ url } id={ id } prices={ prices} shipping={ shipping } />)
            </Router>
        );
        
        expect( screen.getByText(title)).toBeTruthy;
    });

})