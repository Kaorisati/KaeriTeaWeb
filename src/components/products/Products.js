import React from "react";
import "./Products.css"


export default function Products() {
  return (
    <div className="section-products">
      <h2 className="title2">EN CADA TAZA, UNA HISTORIA</h2>
      <p className="description2">Productos Kaeriyama, en cada mesa.</p>

      <div className="content-products">
        <div className="card products">
        <img src="/product2.png" alt="historia" className='img-product' />
          <h4 className="title-product">TÉ NEGRO</h4>
        </div>
        <div className="card products">
        <img src="/product1.png" alt="historia" className='img-product' />
          <h4 className="title-product">TÉ VERDE</h4>
        </div>
        <div className="card products">
        <img src="/product3.png" alt="historia" className='img-product' />
          <h4 className="title-product">YERBA MATE</h4>
        </div>
      </div>
    </div>
  );
}
