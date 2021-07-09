import React from "react";
import cartIcon from "./shopping-cart.svg";
import "./FloatingCart.css";
import { Link } from "react-router-dom";

export default function FloatingCart() {
  return (
    <Link to="shoppingCart">
      <div className="floating-cart">
        <p>Votre Panier</p>
        <div className="img-notif-container">
          <img src={cartIcon} alt="icone panier" />
          <span className="notif">0</span>
        </div>
      </div>
    </Link>
  );
}
