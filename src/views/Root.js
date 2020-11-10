import React from 'react';
import GlobalStyle from 'theme/GlobalStyle';
import { BrowserRouter, Route } from 'react-router-dom';
import Homepage from './Homepage';
import About from './About';
import Gallery from './Gallery';
import Contact from './Contact';
import Admin from './Admin';
import gsap from "gsap";
import ScrollToPlugin from 'gsap/ScrollToPlugin'


const Root = () => {

  gsap.registerPlugin(ScrollToPlugin)

  return (
    <>
      <BrowserRouter>
        <Route exact path="/" component={Homepage} />
        <Route path="/gallery" component={Gallery} />
        <Route path="/about" component={About} />
        <Route path="/contact" component={Contact} />
        <Route path="/admin" component={Admin} />
      </BrowserRouter>
      <GlobalStyle />
    </>
);
};

export default Root;
