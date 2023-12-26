import { BrowserRouter } from "react-router-dom";
import { Provider } from 'react-redux';
import { store } from '@/app/providers/store';
import { ThemeContext, themes } from "./themeContext";

type Props = {
  children?: React.ReactNode;
}

export function Providers({children}: Props) {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <ThemeContext.Provider value={themes.light}>
          {children}
        </ThemeContext.Provider>
      </BrowserRouter>
    </Provider>
  );
}