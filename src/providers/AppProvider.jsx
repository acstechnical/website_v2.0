import React from 'react';
import { HashRouter } from 'react-router-dom';

export const AppProvider = ({ children }) => {
  return (
    <HashRouter>
      {children}
    </HashRouter>
  );
};