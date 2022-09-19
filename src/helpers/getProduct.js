export const getProduct = async( category ) => {
    try{
        const url = `https://api.mercadolibre.com/sites/MLA/search?q=${ category }&limit=10`;
        const resp = await fetch( url );
        const { results } = await resp.json();
        
        const product = results.map( product => ({
            id: product.id,
            title: product.title,
            condition: product.condition,
            price: product.price,
            prices: product.prices,
            url: product.thumbnail,
            shipping: product.shipping
        }));
        
        return product;
    }catch(error){
        console.error(error);
    }
}