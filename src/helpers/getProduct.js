export const getProduct = async( category ) => {

    //const url = `https://api.giphy.com/v1/gifs/search?api_key=kaJ1JwD4CuQgYun7YpTQpTr5p1qs1sQn&q=${ category }&limit=10`;
    const url = `https://api.mercadolibre.com/sites/MLA/search?q=${ category }&limit=10`;
    const resp = await fetch( url );
    //const { data } = await resp.json();
    const { results } = await resp.json();
    console.log(results);
    //console.log(data);
    /*const product = data.map( img => ({
        id: img.id,
        title: img.title,
        url: img.images.downsized_medium.url
    }));
    */
    const product = results.map( product => ({
        id: product.id,
        title: product.title,
        condition: product.condition,
        price: product.price,
        prices: product.prices,
        //shipping: shipping.free_shipping,
        url: product.thumbnail,
        shipping: product.shipping
    }));
    
    return product;
}