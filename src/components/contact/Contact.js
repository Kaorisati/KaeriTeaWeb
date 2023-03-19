import React from "react";
import "./Contact.css"
import Logo from '../../assets/Logo1.png'


export default function History() {
  return (
    <div className="contact-container">
        <h3>REGRESO A LA ESENCIA</h3>
        <p>Kaeriyama 1921 - Watanabe 1930
            Misiones, Argentina.
            89 años de experiencia en producción de té</p>
        <p>Oberá, Misiones</p>

        <img src={ Logo } alt="logo" className='logo' />
        <h4>CONTACTANOS</h4>
        <p>info@tekaeriyama.com.ar</p>
        <p>+54 9 3755 552990</p>
        <p>address, Oberá, Misiones</p>
        <p>Lunes a Viernes de 07.00 a 18.00hs</p>
    </div>
  );
}
