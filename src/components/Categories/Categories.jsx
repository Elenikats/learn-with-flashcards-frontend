import categ from "../../images/categ.jpg";
import Logout from "../Logout/Logout.jsx";
import { useContext } from "react";
import { userContext } from "../../contexts/userContext.js";

function Categories() {
  const [user, setUser, token, setToken] = useContext(userContext);
  return (
    <div
      className="Categories"
      style={{
        width: "100%",
        height: "100vh",
        backgroundImage: `url(${categ})`,
        backgroundPosition: "center",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
      }}
    >
      Categories
      <div>
        <Logout />
      </div>
    </div>
  );
}

export default Categories;
