import React from 'react';

import {Footer, Blog, Possibility, Features, WhatGTP3, Header} from './containers';
import {CTA, Brand, Navbar } from './components';
import './App.css';

const App = () => {
  return (
    <div className="App">
      <Navbar />
      <Header />
      <div className="gradient__bg">
      </div>
      <Brand />
      <WhatGTP3 />
      <Features />
      <Possibility />
      <CTA />
      <Blog />
      <Footer />
    </div>
  )
}

export default App
