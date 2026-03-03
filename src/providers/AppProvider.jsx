import React from 'react';
import { BrowserRouter } from 'react-router-dom';

export const AppProvider = ({ children }) => {
  return (
    <BrowserRouter basename="/website-version_3.0/">
      {children}
    </BrowserRouter>
  );
};