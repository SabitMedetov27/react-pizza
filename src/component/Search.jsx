import React from "react";
import { useContext } from "react";
import { IoCloseSharp } from "react-icons/io5";
import { CustomContext } from "../context";

function Search() {
  const { searchValue, setSearchValue } = useContext(CustomContext);
  return (
    <div className="search_blog">
      <input
        value={searchValue}
        onChange={(e) => setSearchValue(e.target.value)}
        className="search_input"
        type="text"
        placeholder="Поиск пиццы..."
      />
      {searchValue && (
        <span>
          <IoCloseSharp onClick={() => setSearchValue("")} />
        </span>
      )}
    </div>
  );
}

export default Search;
