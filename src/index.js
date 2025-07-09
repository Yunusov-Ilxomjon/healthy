import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import Navbar from './navbar/Navbar';
import About from './about/About';
import Product from './products/Product';
import Clients from './mijoz/Clients'
import Servise from './servise/Servise';
import Registr from './registr/Registr'
import Footer from './footer/Footer';




const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Navbar />
    <App />
    <About/>
    <Product/>
    <Clients/>
    <Servise/>
    <Registr/>
    <Footer/>
  </React.StrictMode>
);


