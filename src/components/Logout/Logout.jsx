import { useContext } from "react";
import { userContext } from "../../contexts/userContext.js";
import "./Logout.scss";
function Logout() {
  const [user, setUser, token, setToken] = useContext(userContext);
  function handleLogout() {
    setToken(null);
    setUser(null);
  }

  return (
    <div className="Logout">
      <div className="button_container">
        <button onClick={handleLogout}>Log out</button>
      </div>
    </div>
  );
}

export default Logout;
