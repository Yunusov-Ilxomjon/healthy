import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route, Outlet } from 'react-router-dom';
import './i18n';

import App from './App';
import Navbar from './navbar/Navbar';
import About from './about/About';
import Product from './products/Product';
import Clients from './mijoz/Clients';
import Servise from './servise/Servise';
import Registr from './registr/Registr';
import Footer from './footer/Footer';
// import Instal from './isntall/Instal';

function Layout() {
  return (
    <>
      <Navbar />
      <Outlet /> {/* Routes ichidagi elementlar shu yerga render bo‘ladi */}
      <Footer />
    </>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        {/* Layout barcha sahifalar uchun */}
        <Route path="/" element={<Layout />}>
          <Route index element={
            <>
              <App />
              <About />
              <Product />
              <Clients />
              <Servise />
              <Registr />
            </>
          } />
          {/* <Route path="installation" element={<Instal />} /> */}
        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);