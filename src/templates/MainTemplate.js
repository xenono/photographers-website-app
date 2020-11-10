import React from 'react';
import Navigation from 'components/Navigation/Navigation';
import Footer from 'components/Footer/Footer.js';

const MainTemplate = ({ children, admin }) => (
  <>
    <Navigation color="black" admin={admin} />
    {children}
    <Footer />
  </>
);

export default MainTemplate;
