import React from 'react';
import { Route, Routes } from 'react-router-dom';
import MainPage from '../pages/MainPage/MainPage';
import NotFoundPage from '../pages/NotFoundPage/NotFoundPage';

export default function Router() {
  return (
    <Routes>
      <Route path='/' element={<MainPage />} />
      <Route path='*' element={<NotFoundPage />} />
    </Routes>
  );
}
