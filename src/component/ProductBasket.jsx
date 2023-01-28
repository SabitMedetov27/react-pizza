import React from "react";
import { IoMdClose } from "react-icons/io";
import { useDispatch, useSelector } from "react-redux";
import { addItems, minusItem, removeItems } from "../redux/slice/cartSlice";
import "./../scss/Basket.scss";


function ProductBasket({ id, title, price, image, count }) {
  const { totalPrice } = useSelector((state) => state.cart);
  const dispatch = useDispatch();
  const onClickPlus = () => {
    dispatch(addItems({ id }));
  };
  const onClickRemove = () => {
    dispatch(removeItems(id));
  };
  const onClickMin = () => {
    dispatch(minusItem(id));
  };
  
  return (
    <div>
      <div className="basket_product">
        <img src={image} alt="img_basket" width={150} />
        <div className="basket_name">
          <h3>{title}</h3>
          <p>тонкое тесто, 26 см.</p>
        </div>
        <div className="basket_amount">
          <p onClick={onClickMin}>-</p>
          <b>{count}</b>
          <p onClick={onClickPlus}>+</p>
        </div>
        <div className="basket_price">
          <b>
            {price * count} <span>С</span>
          </b>
        </div>
        <div onClick={onClickRemove} className="basket_close">
          <IoMdClose />
        </div>
      </div>
    </div>
  );
}

export default ProductBasket;
