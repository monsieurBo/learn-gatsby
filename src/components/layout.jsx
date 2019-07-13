import React from 'react';
import { Header } from './header';
import './layout.css'; // highlight-line

export const Layout = ({ children }) => {
  return (
    <>
      <Header />
      <main className="layout-container">{children}</main>
    </>
  );
};
