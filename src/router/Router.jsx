import React from 'react';
import { Route, Routes } from 'react-router-dom';
import MainPage from '../pages/MainPage/MainPage';
import NotFoundPage from '../pages/NotFoundPage/NotFoundPage';
import FilteredPage from '../pages/FilteredPage/FilteredPage';
import AppLayout from '../layout/AppLayout';
import DetailPage from '../pages/DetailPage/DetailPage';
import ResultPage from '../pages/ResultPage/ResultPage';

export default function Router() {
  return (
    <Routes>
      <Route path='/' element={<AppLayout />}>
        <Route index element={<MainPage />}></Route>
        <Route path='result' element={<ResultPage />} />
      </Route>
      <Route path='/books/:categoryId' element={<FilteredPage />} />
      <Route path='/products/:isbn13' element={<DetailPage />} />
      <Route path='*' element={<NotFoundPage />} />
    </Routes>
  );
}
