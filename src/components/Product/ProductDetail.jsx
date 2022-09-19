import { useParams } from "react-router-dom";
import React,{useState,useEffect} from 'react'
import Spinner from "../Spinner/Spinner";
import Feature from "../Feature/Feature";
import ImgDet from "../ImgDet/ImgDet";
import { Carousel } from 'react-responsive-carousel';
import './ProductDetail.css';
import "react-responsive-carousel/lib/styles/carousel.min.css";

export const ProductDetail =  () => {
  const { id } = useParams();
    
  const [details, setDetails] = useState([]);
  const [loading, setLoading] = useState(true);
  async function getProduct() {
      const data = await fetch(
          `https://api.mercadolibre.com/items/${ id }`
        );

        const dataJson = await data.json();
        setDetails(dataJson);
        setLoading(false);
  }

  useEffect(() => {
       getProduct();
  }, []);
 
      return (
        <>
          {loading ? (
            <Spinner />
          ) : (
            <section className="section-product">
              <div className="main-product">
                <div className="content-product">
                  <figure className="img-container">
                  <Carousel className="slider-wrapper.axis-vertical">
                    {
                      details.pictures.map((value, index) => {
                        return <img key="{index}" className="img" src={value.url}></img>
                      })
                    }
                  </Carousel>
                  </figure>
                </div>
                <div className="details-product">
                  <div className="item-details">
                    <span className="item-condition">
                      {details.condition === "new" ? "Nuevo" : ""}
                    </span>
                    <h1>{details.title}</h1>
                    <p className="text_price">
                      $
                      {new Intl.NumberFormat().format(
                        details.price
                      )}
                    </p>
                    <div className="item-shipping">
                      <figure className="img-shipping">
                        <div className="img-shipping-truck">
                          <ImgDet />
                        </div>
                      </figure>
                      <p className="item-free_shipping">
                        {details.shipping.free_shipping
                          ? "Envío gratis a todo el país "
                          : ""}
                      </p>
                      <button className="button">Comprar ahora</button>
                    </div>
                    <div className="item-shipping"> </div>
                  </div>
                  <div className="features-product">
                    <h2 className="features-text">
                      Características de {details.title}
                    </h2>
                    <div className="features-grid">
                      {details.attributes.slice(0, 12).map((attr, key) => {
                        return (
                          <Feature
                            name={attr.name}
                            value={attr.value_name}
                            key={key}
                          />
                        );
                      })}
                    </div>
                  </div>
                </div>
              </div>
            </section>
          )}
        </>
      );
}

export default ProductDetail;