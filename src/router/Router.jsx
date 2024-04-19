import React from 'react';
import { Route, Routes } from 'react-router-dom';
import MainPage from '../pages/MainPage/MainPage';
import NotFoundPage from '../pages/NotFoundPage/NotFoundPage';
import FilteredPage from '../pages/FilteredPage/FilteredPage';
import DetailPage from '../pages/DetailPage/DetailPage';
import AppLayout from '../layout/AppLayout';

export default function Router() {
  return (
    <Routes>
      <Route element={<AppLayout />}>
        <Route path='/' element={<MainPage />} />
        <Route path='/products/:isbn13' element={<DetailPage />} />
        <Route path='/books/:categoryId' element={<FilteredPage />} />
        <Route path='*' element={<NotFoundPage />} />
      </Route>
    </Routes>
  );
}
