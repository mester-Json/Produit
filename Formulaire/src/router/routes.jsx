import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ProductList from '..//components/Product/ProductList';



function AppRouter() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<ProductList />} />
        <Route path='*' element={<h1> 418 Je Suis un cafetiére</h1>} />
      </Routes>
    </BrowserRouter>
  );
}

export default AppRouter;
