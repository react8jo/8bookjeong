import React from 'react';
import { Route, Routes } from 'react-router-dom';
import MainPage from '../pages/MainPage/MainPage';
import NotFoundPage from '../pages/NotFoundPage/NotFoundPage';
import FilteredPage from '../pages/FilteredPage/FilteredPage';
import DetailPage from '../pages/DetailPage/DetailPage';
import ResultPage from '../pages/ResultPage/ResultPage';
import PaymentPage from '../pages/PaymentPage/PaymentPage';
import CartPage from '../pages/CartPage/CartPage';

export default function Router() {
  return (
    <Routes>
      <Route path='/' element={<MainPage />} />
      <Route path='/books/:categoryId' element={<FilteredPage />} />
      <Route path='result' element={<ResultPage />} />
      <Route path='/payment' element={<PaymentPage />} />
      <Route path='/cart' element={<CartPage />} />
      <Route path='/products/:isbn13' element={<DetailPage />} />
      <Route path='*' element={<NotFoundPage />} />
    </Routes>
  );
}
