import './SearcherApp.css';
import { BsBell, BsCart2, BsGeoAlt } from 'react-icons/bs';
import React, { useEffect, useState } from 'react';
import { ProductSearch } from '../Product/ProductSearch';
import { ProductGrid } from '../Product/ProductGrid';

function SearcherApp() {
  const [search, setSearch] = useState("");
  const [ categories, setCategories ] = useState([]);
    
  const onAddCategory = ( newCategory ) => {
    if ( categories.includes(newCategory) ) return;
    setCategories([ newCategory ]);
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
    <section className="first_section_main">
            <ul className="ul_categories">
            </ul>
            <section className="section_order">
              <span>Ordenar por </span>
              <select
                name="select"
                className="select_order"
                >
                <option className="option_order" value="relevance">
                  Mas relevantes
                </option>
                <option className="option_order" value="price_asc">
                  Menor precio
                </option>
                <option className="option_order" value="price_desc">
                  Mayor precio
                </option>
              </select>
            </section>
          </section>
        <section className="first_section_main">
            <section className="ul_categories">
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

export default SearcherApp;
