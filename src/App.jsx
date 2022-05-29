// import logo from "./logo.svg";
import { useContext } from "react";
import Homepage from "../src/components/Homepage/Homepage.jsx";
import Categories from "./components/Categories/Categories.jsx";
import "./App.scss";
import { userContext } from "./contexts/userContext.js";

function App() {
  const [user] = useContext(userContext);

  return <div className="App">{user ? <Categories /> : <Homepage />}</div>;
}

export default App;
