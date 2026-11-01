
import { useState } from "react";
import axios from "axios";

const API = "http://localhost:5001/api";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");

  async function handleSubmit(e) {
    e.preventDefault();
    setMessage("");

    try {
      const res = await axios.post(
        API + "/auth/login",
        { email, password },
        { withCredentials: true }
      );

      // Remove the old token stored by Experiment 4
      localStorage.removeItem("token");
      localStorage.removeItem("role");

      setMessage("Welcome " + res.data.name);
    } catch (err) {
      setMessage(
        err.response?.data?.message || "Server not reachable"
      );
    }
  }

  return (
    <div className="page">
      <h1>Login</h1>

      <form onSubmit={handleSubmit}>
        <label htmlFor="login-email">Email</label>
        <input
          id="login-email"
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />

        <label htmlFor="login-password">Password</label>
        <input
          id="login-password"
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />

        <button type="submit">Login</button>
      </form>

      {message && <p>{message}</p>}
    </div>
  );
}

export default Login;
