import React from 'react';

import {
  BrowserRouter,
  Routes, // instead of "Switch"
  Route,
} from "react-router-dom";

import App from './components/App';
import Page from "./components/Page";


function Ayan() {
  return (
    <>
      
        <BrowserRouter>
          <Routes>
            <Route exact path="/" element={<App />} />
          </Routes>
          {/* <Routes>
            <Route exact path="/pages" element={<Page />} />
          </Routes> */}

        </BrowserRouter>
      

    </>
  );
}

export default Ayan;