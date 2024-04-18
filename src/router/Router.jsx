import React from 'react';
import { Route, Routes } from 'react-router-dom';
import MainPage from '../pages/MainPage/MainPage';
import NotFoundPage from '../pages/NotFoundPage/NotFoundPage';
import DetailPage from '../pages/DetailPage/DetailPage';
import AppLayout from '../layout/AppLayout';

export default function Router() {
  return (
    <Routes>
      <Route path='/' element={<AppLayout />}>
        <Route index element={<MainPage />}></Route>
        <Route path='/products/:isbn13' element={<DetailPage />} />
      </Route>
      <Route path='*' element={<NotFoundPage />} />
    </Routes>
  );
}
