import React from "react";
import "./Home.css";
import imgHomeShop from "./shopimg.jpg";

export default function Home() {
  return (
    <div className="global-container">
      <h1 className="home-title">
        Bienvenue au <span>Shop</span>
      </h1>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi commodi
        ea, laboriosam est quia, officiis laudantium dolorem, fuga temporibus ut
        provident! Facilis recusandae sit quos nostrum cum alias possimus
        officia!
      </p>
      <img src={imgHomeShop} alt="accueil-shop" />
    </div>
  );
}
