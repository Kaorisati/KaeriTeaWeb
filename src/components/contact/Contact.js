import React from "react";
import "./Contact.css";
import Logo from "../../assets/Logo1.png";

export default function Contact() {
  return (
    <div className="contact-container">
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
    </div>
  );
}
