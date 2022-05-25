import { useContext } from "react";
import { userContext } from "../../contexts/userContext.js";
import "./Homepage.scss";

function Register() {
  const [user, setUser, token, setToken] = useContext(userContext);
  const [isShowing, setIsShowing] = useState(false);

  function toggle() {
    setIsShowing(!isShowing);
  }

  return {};

  return (
    <div className="Register">
      <h1>Register</h1>
      {(isShowing, toggle)}
    </div>
  );
}

export default Register;
