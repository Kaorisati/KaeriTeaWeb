import React from "react";
import "./Contact.css";
import {FaInstagram, FaFacebookSquare, FaWhatsapp} from "react-icons/fa"

import Logo from "../../assets/Logo1.png";

export default function Contact() {
  return (
    <div className="contact-container">
      <div className="box-txt contact">
        <p className="year description2">1921</p>
        <h2 className="title2">REGRESO A LA ESENCIA</h2>
        <p className="description2">
          Kaeriyama 1921 - Watanabe 1930
          <br />
          Misiones, Argentina.
          <br />
          89 años de experiencia en producción de té.
          <br />
          <strong>Oberá, Misiones</strong>
        </p>
      </div>
      <div className="content-mapa">
        <img src={Logo} alt="logo" className="logo" />
        <a href="https://goo.gl/maps/WepGBKtTvt9LuyvJ6" target="_blank">
          <img src="/mapa-provisorio.png" alt="mapa" className="mapa" />
        </a>
      </div>
      <h2 className="title2">CONTACTANOS</h2>
      <p className="description2">info@tekaeriyama.com.ar</p>
      <p className="description2">+54 9 3755 552990</p>
      <a href="https://goo.gl/maps/WepGBKtTvt9LuyvJ6" target="_blank">
        <p className="description2">El Mensu 1178, Oberá, Misiones</p>
      </a>
      <p className="description2">Lunes a Viernes de 07.00 a 18.00hs</p>
      <div className="redes">
        <a href="#">
        <FaFacebookSquare color="#274A39"/>
      </a>
      <a href="#">
      <FaInstagram color="#274A39"/>
      </a>
      <a href="#">
      <FaWhatsapp color="#274A39"/>
      </a>
      </div>
    </div>
  );
}
