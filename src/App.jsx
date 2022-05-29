// import logo from "./logo.svg";
import { useContext } from "react";
import { Routes, Route } from "react-router-dom";
import Homepage from "../src/components/Homepage/Homepage.jsx";
import Categories from "./components/Categories/Categories.jsx";
import Flashcards from "./components/Flashcards/Flashcards.jsx";
import "./App.scss";
import { userContext } from "./contexts/userContext.js";

function App() {
  const [user] = useContext(userContext);

  return (
    <div>
      <Routes>
        <Route
          path="/"
          element={
            <div className="App">{user ? <Categories /> : <Homepage />}</div>
          }
        />
        <Route path="flashcards" element={<Flashcards />} />
      </Routes>
    </div>
  );
}

export default App;
