import "./../scss/Basket.scss";
import React from "react";
import ProductBasket from "./ProductBasket";
import { BsCart2 } from "react-icons/bs";
import Header from "./Header";
import { useSelector } from "react-redux";
import BasketEmpty from "./BasketEmpty";

function Basket() {
  const {totalPrice, items} = useSelector((state) => state.cart)
  const totalCount = items.reduce((sum, item) => sum + item.count, 0)
  if (!totalPrice) {
    return <BasketEmpty />;
  }
  return (
    <div className="container">
      <Header/>
      <div className="wrapper_basket">
        <div className="basket">
          <div className="basket_img">
            <BsCart2 />
          </div>

          <h1>Корзина</h1>
        </div>
        <div className="product_basket">
          
          {items.map((item) => (
            <ProductBasket key={item.id} {...item} />
          ))}
         
        </div>

        <div className="basket_total">
          <div className="basket_total_amount">
            <h3>Всего пицц: </h3>
            <b>{totalCount} шт</b>
          </div>
          <div className="basket_total_sum">
            <h3>Сумма заказа: </h3>
            <b>{totalPrice} С</b>
          </div>
        </div>
        <div className="basket_btn">
          <button>Вернуться назад</button>
          <button>Оплатить сейчас</button>
        </div>
      </div>
    </div>
  );
}

export default Basket;
