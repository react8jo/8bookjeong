import React from 'react';
import Banner from '../../components/MainPage/Banner/Banner';
import BestsellerBook from '../../components/MainPage/BestsellerBook/BestsellerBook';
import ChoiceBook from '../../components/MainPage/ChoiceBook/ChoiceBook';
import NewBook from '../../components/MainPage/NewBook/NewBook';

export default function MainPage() {
  return (
    <>
      {/* <Banner /> */}
      <BestsellerBook />
      <ChoiceBook />
      <NewBook />
    </>
  );
}
