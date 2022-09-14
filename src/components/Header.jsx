import './Header.css';
import { BsBell, BsCart2, BsGeoAlt } from 'react-icons/bs';
import React, { useEffect, useState } from 'react';
//import {  useSelector } from 'react-redux';
import { SearcherApp } from '../SearcherApp';
import { ProductSearch } from './ProductSearch';
import Home from './Home';
import { ProductGrid } from './ProductGrid';
//import { ProductGrid } from './productGrid';

//import { get_products } from "../../redux/actions/ProductsAction";

function Header() {
  const [search, setSearch] = useState("");
  /*const order_by = useSelector((state) => state.orderBy);
  const filters = useSelector((state) => state.filters);
  //const dispatch = useDispatch();

  /*useEffect(() => {
    dispatch(get_products(search, order_by, filters));
  }, [dispatch, search, order_by, filters]);
*/
const [ categories, setCategories ] = useState([]);
    
  function handleSubmit(e) {
    e.preventDefault();
  }
  console.log('header');
  const onAddCategory = ( newCategory ) => {
    if ( categories.includes(newCategory) ) return;
    setCategories([ newCategory ]);
    console.log(newCategory);
    //Home(newCategory);
  }
  return (
    <>
    <header>
      <section className="header">
        <img
          src="https://http2.mlstatic.com/frontend-assets/ui-navigation/5.18.9/mercadolibre/logo__large_plus.png"
          alt="mercadolibre_logo"
          onClick={() => setSearch("")}
        />
        <section className="section_envio">
        <BsGeoAlt size={25} />
          <div className="header_nav">
            <span>Ingresa tu</span>
            <p>ubicación</p>
          </div>
        </section>
      </section>
      <section className="section_header_container">
        <section className="first_section">
        <ProductSearch 
                onNewCategory={ (value) => onAddCategory(value) }
            />
          <nav className="header_nav">
            <ul>
              <li>Categorias</li>
              <li>Ofertas</li>
              <li>Historial</li>
              <li>Supermercado</li>
              <li>Moda</li>
              <li>Vender</li>
              <li>Ayuda</li>
            </ul>
          </nav>
        </section>
        <section className="last_section">
          <img
            src="https://http2.mlstatic.com/D_NQ_921393-MLA51371540772_092022-OO.webp"
            alt="disney_plus"
            className="img_disney"
          />
          <nav className="header_nav--2">
            <ul className="ul_section_2">
              <li>Crea tu cuenta</li>
              <li>Ingresa</li>
              <li>Mis compras</li>
              <li>
              <BsBell size={18} />
              </li>
              <li>
              <BsCart2 size={20} />
              </li>
            </ul>
          </nav>
        </section>
      </section>
    </header>
    <main>
 
          <section className=" ">
            <section>
          { 
                categories.map( ( category ) => (
                    <ProductGrid
                        key={ category } 
                        category={ category } />
                ))
            }
            </section>
          </section>
     
    </main>
    </>
  );
}

export default Header;
