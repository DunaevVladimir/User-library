import { BrowserRouter } from "react-router-dom";
import { Provider } from 'react-redux';
import { store } from '@/app/providers/store';

type Props = {
  children?: React.ReactNode;
}

export function Providers({children}: Props) {
  return (
    <Provider store={store}>
      <BrowserRouter>
        {children}
      </BrowserRouter>
    </Provider>
  );
}