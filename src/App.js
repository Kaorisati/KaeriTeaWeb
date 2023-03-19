import React from "react";
import Header from "./components/header/Header";
import History from "./components/history/History";
import Products from "./components/products/Products";
import Contact from "./components/contact/Contact"
import {Route, Routes} from 'react-router-dom'
import './index.css'

function App() {
  return (
    <div className="body-app" >
    <Header/>
    <History id='historia'/>
    <Products id='productos' />
    <Contact/>
    {/* <Routes>
      <Route path="/" exact />
      <Route path='/historia' element={<History />}/>
      <Route path='/productos' element={<Products  />}/>
   </Routes> */}
   </div>
  );
}

export default App;

