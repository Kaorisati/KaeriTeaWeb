import React from "react";
import Header from "./components/header/Header";
import History from "./components/history/History";
import Products from "./components/products/Products";
import {Route, Routes} from 'react-router-dom'

import './index.css'
import About from "./components/about/About";
function App() {
  return (
    <div className="body-app" >
    <Header/>
    <About/>
    <History id='historia'/>
    <Products id='productos' />
    {/* <Routes>
      <Route path="/" exact />
      <Route path='/historia' element={<History />}/>
      <Route path='/productos' element={<Products  />}/>
   </Routes> */}
   </div>
  );
}

export default App;

