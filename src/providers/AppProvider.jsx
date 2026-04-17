// import { BrowserRouter } from 'react-router-dom';
import { HashRouter } from "react-router-dom";

export const AppProvider = ({ children }) => {
  return (
    // <BrowserRouter basename={import.meta.env.BASE_URL}>
    //   {children}
    // </BrowserRouter>
    <HashRouter>
      {children}
    </HashRouter>
  );
};