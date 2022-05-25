// import logo from "./logo.svg";
import { useContext } from "react";
import Homepage from "../src/components/Homepage/Homepage.jsx";
import Categories from "./components/Categories/Categories.jsx";
import Navigation from "./components/Navigation/Navigation.jsx";
import "./App.css";
import { userContext } from "./contexts/userContext.js";

function App() {
  const [user] = useContext(userContext);

  return <div className="App">{user ? <Categories /> : <Homepage />}</div>;
}

export default App;
