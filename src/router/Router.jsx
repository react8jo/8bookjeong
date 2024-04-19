import React from 'react';
import { Route, Routes } from 'react-router-dom';
import MainPage from '../pages/MainPage/MainPage';
import NotFoundPage from '../pages/NotFoundPage/NotFoundPage';
import FilteredPage from '../pages/FilteredPage/FilteredPage';
import DetailPage from '../pages/DetailPage/DetailPage';
import AppLayout from '../layout/AppLayout';
import PaymentPage from '../pages/PaymentPage/PaymentPage';
import CartPage from '../pages/CartPage/CartPage';
import ResultPage from '../pages/ResultPage/ResultPage';

export default function Router() {
  return (
    <Routes>
      <Route path='/' element={<AppLayout />}>
        <Route index element={<MainPage />} />
        <Route path='result' element={<ResultPage />} />
        <Route path='/payment' element={<PaymentPage />} />
        <Route path='/cart' element={<CartPage />} />
        <Route path='/products/:isbn13' element={<DetailPage />} />
        <Route path='/books/:categoryId' element={<FilteredPage />} />
        <Route path='*' element={<NotFoundPage />} />
      </Route>
    </Routes>
  );
}
