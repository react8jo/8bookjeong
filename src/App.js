import React from 'react';
import { GlobalStyle } from './assets/style/globalStyle.styled';
import { BrowserRouter } from 'react-router-dom';
import Router from './router/Router';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <GlobalStyle />
        <Router />
      </BrowserRouter>
    </QueryClientProvider>
  );
}

export default App;
