import React from 'react';
import ReactDOM from 'react-dom/client';
import SearcherApp from "./components/Main/SearcherApp";
import ProductDetail from "./components/Product/ProductDetail";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>

    <Router>
      <Routes>
          <Route path="/" element={<SearcherApp/>} />
          <Route path="/:id" element={<ProductDetail />} />
      </Routes>
    </Router>
  </React.StrictMode>
);
