import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ProductList from '..//components/Product/ProductList';

const products = [
  { category: 'Fruits', price: '$1', number: 0, name: 'Banana' },
  { category: 'Fruits', price: '$1', number: 2, name: 'Mango' },
  { category: 'Fruits', price: '$2', number: 0, name: 'Pineapple' },
  { category: 'Vegetables', price: '$2', number: 4, name: 'Broccoli' },
  { category: 'Vegetables', price: '$4', number: 0, name: 'Carrot' },
  { category: 'Vegetables', price: '$1', number: 6, name: 'Zucchini' }
];

function AppRouter() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<ProductList products={products} />} />
      </Routes>
    </BrowserRouter>
  );
}

export default AppRouter;
