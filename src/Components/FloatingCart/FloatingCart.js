import React from "react";
import cartIcon from "./shopping-cart.svg";
import "./FloatingCart.css";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

export default function FloatingCart() {
  // Permet de nous envoyer le state du shopping cart //
  const shoppingCart = useSelector((state) => state);
  // console.log(shoppingCart);
  let totalItems = 0;
  for (const item of shoppingCart.cart) {
    totalItems += item.quantity;
  }
  return (
    <Link to="/panier">
      <div className="floating-cart">
        <p>Votre Panier</p>
        <div className="img-notif-container">
          <img src={cartIcon} alt="icone panier" />
          <span className="notif">{totalItems}</span>
        </div>
      </div>
    </Link>
  );
}
