import "./../scss/Basket.scss";
import React from "react";
import Header from "./Header";

function BasketEmpty() {
  return (
    <div>
      <Header/>
       <div className="basket_empty">
      <h1>Корзина пустая </h1>
      <b>
        Вероятней всего, вы не заказывали ещё пиццу.<br/>
        Для того, чтобы заказать пиццу, перейди на главную страницу.
      </b>
      <img src="./img/vector.jpg" alt="cart_img" />
      <button>Вернуться назад</button>
    </div>
    </div>
   
  );
}

export default BasketEmpty;
