import { useState } from "react";
import { Link } from "react-router-dom";
import "./form.css";
import axios from "axios";

const Signup = () => {
  const [username, setUsername] = useState("");
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post(
        "http://localhost:8000/api/v1/register",
        {
          username,
          name,
          password,
        }
      );
      console.log(response);

      alert("User is registered");

      setUsername("");
      setName("");
      setPassword("");
    } catch (err) {
      console.log(err);
    }

    console.log("Username : ", username);
    console.log("Name : ", name);
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
          type="text"
          placeholder="Name"
          value={name}
          className="input-field"
          onChange={(e) => setName(e.target.value)}
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
          Register
        </button>
        <p>
          Alreadt a user? <Link to="/login">Login</Link>
        </p>
      </form>
    </>
  );
};

export default Signup;
