import React from 'react';
import Header from './Header';
import Footer from './Footer';
import Home from './Home';

const Layout = () => {
  return (
    <>
      <Header />
      <div className="container">
        <main role="main">
            <Home/>
        </main>
        <Footer />
      </div>
    </>
  );
};

export default Layout;
