import React from 'react';
import ReactDOM from 'react-dom/client';
import { SearcherApp } from './SearcherApp';
import Header from "./components/Header";
import Home from './components/Home';
import './styles.css';


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Header />
 
  </React.StrictMode>
);
