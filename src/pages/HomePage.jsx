import "./../scss/HomePage.scss";
import React from "react";
import Header from "../component/Header";
import Navbar from "../component/Navbar";
import Cart from "../component/Cart";
import { useContext } from "react";
import { CustomContext } from "../context";
import { useSelector } from "react-redux";

function HomePage() {
  const { searchValue, isLoader } = useContext(CustomContext);
  const items = useSelector((state) => state.pizza.items);

  return (
    <div>
      <Header />
      <Navbar />
      <h1>Все пиццы</h1>
      <div className="container">
        <div className="cart_home_page">
          {isLoader ? (
            <img
              src="https://calc.superkopilka.com/img/spin.gif"
              alt="loading"
            />
          ) : (
            items
              .filter((obj) => {
                if (
                  obj.title.toLowerCase().includes(searchValue.toLowerCase())
                ) {
                  return true;
                }
                return false;
              })
              .map((item) => (
                <Cart
                  key={item.id}
                  id={item.id}
                  image={item.image}
                  title={item.title}
                  price={item.price}
                  types={item.types}
                  sizes={item.sizes}
                />
              ))
          )}
        </div>
      </div>
    </div>
  );
}

export default HomePage;
