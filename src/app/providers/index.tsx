import { BrowserRouter } from "react-router-dom";
import { Routing } from "@/pages";
import { Provider } from 'react-redux';
import { store } from '@/app/providers/store';
import { ReactNode } from "react";

export function Providers(): ReactNode {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Routing />
      </BrowserRouter>
    </Provider>
  );
}