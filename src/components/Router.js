import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Companies from './Companies';
import Errorpage from './Errorpage';
import Navbar from './Navbar';
import Categories from './Categories';

function RouterNav() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route exact path="/" element={<Companies />} />
          <Route path="/categories" element={<Categories />} />

          <Route path="*" element={<Errorpage />} />
        </Routes>
      </BrowserRouter>
    </>

  );
}

export default RouterNav;
