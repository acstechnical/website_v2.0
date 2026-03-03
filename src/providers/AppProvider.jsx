import React from 'react';
import { BrowserRouter } from 'react-router-dom';

export const AppProvider = ({ children }) => {
  const basename = import.meta.env.BASE_URL;

  return (
    <BrowserRouter basename={basename}>
      {children}
    </BrowserRouter>
  );
};