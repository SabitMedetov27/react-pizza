import { createContext } from "react";
import { useState } from "react";

export const CustomContext = createContext();

export const Context = (props) => {
  
  const [searchValue, setSearchValue] = useState("");
  const [isLoader, setIsLoader] = useState(true);
  const value = {
    searchValue,
    setSearchValue,
    isLoader,
    setIsLoader,
    
  };
  return (
    <CustomContext.Provider value={value}>
      {props.children}
    </CustomContext.Provider>
  );
};
