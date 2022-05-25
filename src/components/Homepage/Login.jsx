import { useContext, useState } from "react";
import axios from "axios";
import "./Homepage.scss";
import { userContext } from "../../contexts/userContext.js";

function Login() {
  const [user, setUser, token, setToken] = useContext(userContext);

  const [loginData, setLoginData] = useState({
    email: "",
    password: "",
  });

  const updateLoginData = (e) => {
    setLoginData({
      ...loginData,
      [e.target.name]: e.target.value,
    });
  };
  const { email, password } = loginData;
  console.log(email);
  console.log(password);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const url = "http://localhost:8000/users/login";
    try {
      const res = await axios.post(url, { email, password });
      console.log(res.data);
      setUser(res.data.username);
      setToken(res.data.token);
    } catch (error) {
      console.log(error);
      alert(error?.response?.data?.error || "Login failed, try again");
    }
  };

  return (
    <form className="Login" onSubmit={handleSubmit}>
      <input
        value={email}
        onChange={(e) => updateLoginData(e)}
        placeholder="Email address"
        type="email"
        name="email"
        required
      />
      <input
        value={password}
        onChange={(e) => updateLoginData(e)}
        placeholder="Password"
        type="password"
        name="password"
        required
      />

      <button type="submit">Submit</button>

      <div>
        Not registered yet? <a href="">Create an account </a>
      </div>
    </form>
  );
}

export default Login;
