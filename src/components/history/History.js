import React from "react";
import "./History.css"


export default function History() {
  return (
    <div className="hist-container">
      <div className="box-txt">
        <p className="year description2">1921</p>
        <h2 className="title2">EL SABOR DE LA HISTORIA</h2>
        <p className="description2">
          Comienza una historia de desafíos y apuesta a persistir en la selva
          Misionera de entonces. Desde Japón traen consigo los valores de su
          cultura, sobre todo la perseverancia, que lo han aplicado en todas las
          actividades que emprendieron. Luego de un siglo y tres generaciones,
          estos valores permanecen como la herencia más valiosa de la familia
          Kaeriyama.
        </p>
      </div>
      <div className="img-history">
      <img src="/img-history.png" alt="historia" className='img-history' />
      </div>
    </div>
  );
}
