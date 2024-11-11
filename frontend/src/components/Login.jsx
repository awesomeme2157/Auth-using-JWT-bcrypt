import { useState } from "react";
import { Link } from "react-router-dom";
import "./form.css";
import axios from "axios";
import cookies from "js-cookie";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post("http://localhost:8000/api/v1/login", {
        username,
        password,
      });

      cookies.set("token", response.data.token);

      console.log(response.data);
      alert("You are logged in");

      setUsername("");
      setPassword("");
    } catch (err) {
      console.log(err);
    }

    console.log("Username : ", username);
    console.log("Password : ", password);
  };

  return (
    <>
      <form className="form-container" onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Username"
          value={username}
          className="input-field"
          onChange={(e) => setUsername(e.target.value)}
          required
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          className="input-field"
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <button type="submit" className="login-button">
          Login
        </button>
        <p>
          Dont have an account? <Link to="/register">Register</Link>
        </p>
      </form>
    </>
  );
};

export default Login;
