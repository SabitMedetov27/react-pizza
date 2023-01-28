import HomePage from "./pages/HomePage";
import "./App.scss";
import Basket from "./component/Basket";
import { Route, Routes } from "react-router-dom";
import { useContext, useEffect } from "react";
import { CustomContext } from "./context";
import { useDispatch, useSelector } from "react-redux";
import { setItems } from "./redux/slice/pizzaSlice";
import axios from "axios";

function App() {
  const dispatch = useDispatch();
  const categoryId = useSelector((state) => state.filter.categoryId);
 
  const { setIsLoader } = useContext(CustomContext);

  useEffect(() => {
    setIsLoader(true);

    axios
      .get(
        `https://63385404132b46ee0bee422f.mockapi.io/lalafo?${
          categoryId > 0 ? `category=${categoryId}` : " "
        }`
      )
      .then(({ data }) => {
        dispatch(setItems(data));
        setIsLoader(false);
      })
      .catch((err) => {
        alert(err);
      });

    window.scrollTo(0, 0);
  }, [categoryId, setIsLoader]);

  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/basket" element={<Basket />} />
      </Routes>
    </div>
  );
}

export default App;
