import "./../scss/Navbar.scss";
import React from "react";
import Search from "./Search";

import { setCategoryId } from "../redux/slice/filterSlice";
import { useSelector, useDispatch } from "react-redux";

function Navbar() {
  const categoryId = useSelector((state) => state.filter.categoryId);
  const dispatch = useDispatch();
  const sortCategory = (i) => {
    dispatch(setCategoryId(i));
  };

  const categories = ["Все", "Мясные", "Вегетарианская", "Гриль", "Острые"];

  return (
    <div className="container">
      <div className="navbar">
        <div className="navbar_menu">
          <ul>
            {categories.map((item, i) => (
              <li
                key={item}
                onClick={() => sortCategory(i)}
                className={categoryId === i ? "active" : ""}
              >
                {item}
              </li>
            ))}
          </ul>
        </div>
        <Search />
      </div>
    </div>
  );
}

export default Navbar;
