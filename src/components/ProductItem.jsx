import {
  BsFillLightningFill,
  BsStar,
  BsStarFill,
  BsStarHalf,
} from "react-icons/bs";
import React, { useEffect, useState } from "react";


export const ProductItem = ({ title, url, id, condition, price, prices, shipping }) => {
  const [totalReviews, setTotalReviews] = useState(0);
  const [ratingAverage, setRatingAverage] = useState(0);

//          <img src={ url } alt={ title } />
//<p>{ title }</p>
/*
        id: product.id,
        title: product.title,
        condition: product.condition,
        price: product.price,
        //shipping: shipping.free_shipping,
        url: product.thumbnail
*/
function discount_rate(high_price, low_price) {
  const discount = (high_price - low_price) / high_price;
  return Math.floor(discount * 100);
}
    return (
        <article>
        <img src={url} alt={title} />
        <section>
          <h3>{title}</h3>
          <section className="details_product">
            <div>
              {prices.prices[0].amount !==
                prices.prices[prices.prices.length - 1].amount && (
                <span className="max_price">
                  ${new Intl.NumberFormat().format(prices.prices[0].amount)}
                </span>
              )}
              <div className="price_container">
                <p className="text_price">
                  $
                  {new Intl.NumberFormat().format(
                    prices.prices[prices.prices.length - 1].amount
                  )}
                </p>
                {prices.prices[0].amount !==
                  prices.prices[prices.prices.length - 1].amount && (
                  <span>
                    {discount_rate(
                      prices.prices[0].amount,
                      prices.prices[prices.prices.length - 1].amount
                    )}
                    % OFF
                  </span>
                )}
              </div>
              <div className="div_shipping_container">
                {shipping.free_shipping && (
                  <p className="text_envio">Envio gratis</p>
                )}
                {shipping.logistic_type === "fulfillment" && (
                  <div>
                    <BsFillLightningFill size={15} color="#00a650" />
                    <span className="full">FULL</span>
                  </div>
                )}
              </div>
            </div>
            <div className="reviews_container">
              {ratingAverage === 0 ? null : render_stars(ratingAverage)}
              {ratingAverage === 0 ? null : (
                <span className="total_reviews">{totalReviews}</span>
              )}
            </div>
          </section>
        </section>
      </article>
    )
  }
  