import "./../scss/Cart.scss";
import React from "react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addItems } from "./../redux/slice/cartSlice";

function Cart({ id, image, title, price, types, sizes }) {
  const [sizePizza, setSizePizza] = useState(null);
  const [sizePizzaOne, setSizePizzaTwo] = useState(null);
  
  const cartItem = useSelector(state => state.cart.items.find((obj) => obj.id === id))
  const callPizza = () => {
    
    onClickAdd()
  };
  const addedCont = cartItem ? cartItem.count : 0
  const dispatch = useDispatch();

  const onClickAdd = () => {
    const item = {
      id,
      title,
      price,
      image,
      types,
      sizes,
    };
    dispatch(addItems(item));
  };
  return (
    <div className="container">
      <div className="cart">
        <div className="cart_img">
          <img src={image} alt="product_img" width={170} />
        </div>
        <h3>{title}</h3>
        <div className="cart_menu">
          <div className="cart_blog_one">
            <b
              onClick={() => setSizePizza(0)}
              className={sizePizza === 0 ? "sizePizza" : ""}
            >
              тонкое
            </b>
            <b
              onClick={() => setSizePizza(1)}
              className={sizePizza === 1 ? "sizePizza" : ""}
            >
              традиционное
            </b>
          </div>
          <div className="cart_blog_two">
            <b
              onClick={() => setSizePizzaTwo(0)}
              className={sizePizzaOne === 0 ? "sizePizza" : ""}
            >
              26 см.
            </b>
            <b
              onClick={() => setSizePizzaTwo(1)}
              className={sizePizzaOne === 1 ? "sizePizza" : ""}
            >
              30 см.
            </b>
            <b
              onClick={() => setSizePizzaTwo(2)}
              className={sizePizzaOne === 2 ? "sizePizza" : ""}
            >
              40 см.
            </b>
          </div>

          <div className="cart_price">
            <p>{price} c</p>
            <button onClick={callPizza}>
              Добавить
              <h4> {addedCont} шт</h4>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Cart;
