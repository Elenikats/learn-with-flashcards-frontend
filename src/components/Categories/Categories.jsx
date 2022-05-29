import categ from "../../images/categ.jpg";
import Logout from "../Logout/Logout.jsx";
import { useContext, useRef, useState } from "react";
import { userContext } from "../../contexts/userContext.js";
import "./Categories.scss";

function Categories() {
  const [user, setUser, token, setToken] = useContext(userContext);
  const [showInput, setShowInput] = useState(false);
  const [categoryName, setCategoryName] = useState([]);
  const inputValue = useRef("");

  const handleCategoryBtn = () => {
    setShowInput(!showInput);
  };

  const handleAddCatBtn = () => {
    setShowInput(false);
    console.log(inputValue);
    setCategoryName([...categoryName, inputValue.current.value]);
  };

  const handleKeyDown = (e) => {
    if (e.key == "Enter") {
      setShowInput(false);
      console.log(inputValue);
      setCategoryName([...categoryName, inputValue.current.value]);
    }
  };

  return (
    <div
      className="Categories"
      style={{
        backgroundImage: `url(${categ})`,
      }}
    >
      <div className="addCategory">
        <button onClick={handleCategoryBtn}>+ Add Category</button>
        {showInput && (
          <span>
            <input
              type="text"
              placeholder="name of category"
              ref={inputValue}
              onKeyDown={handleKeyDown}
            />
            <button onClick={handleAddCatBtn} id="addbtn">
              add
            </button>
          </span>
        )}
      </div>
      <ul>
        {categoryName.map((cat, i) => (
          <li key={i}>
            {cat}
            <button>edit</button>
            <button id="deletebtn">delete</button>
          </li>
        ))}
      </ul>

      <Logout />
    </div>
  );
}

export default Categories;
