"use client";
import React, { ReactNode } from 'react';
import { Provider } from 'react-redux';
import store from '../Redux/store';

interface ReduxProvidersProps {
  children: ReactNode; // Accepts React nodes as children
}

const ReduxProviders: React.FC<ReduxProvidersProps> = ({ children }) => {
  return (
    <Provider store={store}>
      {children}
    </Provider>
  );
};

export default ReduxProviders;
