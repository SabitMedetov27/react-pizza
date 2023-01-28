import React from "react";
import { Link } from "react-router-dom";
import { BsCart3 } from "react-icons/bs";
import "./../scss/Header.scss";

import { useSelector } from "react-redux";
function Header() {
  const { items, totalPrice } = useSelector((state) => state.cart);
  const totalCount = items.reduce((sum, item) => sum + item.count, 0)
  return (
    <div className="container">
      <div className="wrapper">
        <div className="wrapper_menu">
          <Link to="/">
            <img src="./img/logo.jpg" alt="logo" width={80} />
          </Link>

          <div className="wrapper_logo">
            <h3>REACT PIZZA</h3>
            <p>самая вкусная пицца во вселенной</p>
          </div>
        </div>
        <Link to="/basket">
          <div className="wrapper_card">
            <div className="card_price">
              <b>{totalPrice} ₽</b>
            </div>
            <div className="card_icon">
              <BsCart3 className="icon" />
              <b>{totalCount}</b>
            </div>
          </div>
        </Link>
      </div>
    </div>
  );
}

export default Header;
