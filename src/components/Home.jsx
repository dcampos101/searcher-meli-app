import "./Home.css";

//import React, { useEffect, useState } from "react";
//import { useDispatch, useSelector } from "react-redux";

//import Filters from "../Filters/Filters";
//import MobileFilters from "../Filters/MobileFilters";
//import Product from "../Product/Product";
//import { get_category } from "../../redux/actions/CategoryActoin";
//import { order_by } from "../../redux/actions/OrderByAction";
import { SearcherApp } from "../SearcherApp";

function Home() {
  //const [orderValue, setOrderValue] = useState("relevance");
  //const [openDialogOrder, setOpenDialogOrder] = useState(false);
  /*const [openDialogFilters, setOpenDialogFilters] = useState(false);
  const search = useSelector((state) => state.products.search);
  const products = useSelector((state) => state.products.products);
  const cant_products = useSelector((state) => state.products.cant_products);
  const categories = useSelector((state) => state.categories);

  const dispatch = useDispatch();
    */
  /*useEffect(() => {
    window.innerWidth > 820 && dispatch(order_by(orderValue));

    // para obtener las categorias relacionadas con la busqueda
    dispatch(
      get_category(products.length > 0 ? products[0].category_id : null)
    );
  }, [dispatch, orderValue, products]);

  function capitalized(str) {
    return str.charAt(0).toUpperCase() + str.slice(1);
  }
  */
  return (
    <main>
        <>
          <section className="main_section">

          <SearcherApp />
 
          </section>
        </>
    </main>
  );
}

export default Home;
