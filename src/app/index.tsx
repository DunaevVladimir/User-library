import React from 'react';
import ReactDOM from 'react-dom/client';
import { App } from './app';
import { Providers } from './providers';
import '@/app/index.scss';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <Providers>
    <App />
  </Providers>
);