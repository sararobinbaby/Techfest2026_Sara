import { useState } from "react";
import axios from "axios";

const API = "http://localhost:5001/api";

function Registration() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");

  const [errors, setErrors] = useState({});
  const [message, setMessage] = useState("");

  async function handleSubmit(e) {
    e.preventDefault();

    const newErrors = {};

    if (name.trim() === "") {
      newErrors.name = "Name is required";
    }

    if (!/^\S+@\S+\.\S+$/.test(email)) {
      newErrors.email = "Enter a valid email";
    }

    if (!/^[6-9]\d{9}$/.test(phone)) {
      newErrors.phone = "Enter a valid 10-digit Indian mobile number";
    }

    if (password.length < 6) {
      newErrors.password = "Password must be at least 6 characters";
    }

    setErrors(newErrors);

    if (Object.keys(newErrors).length !== 0) {
      return;
    }

    try {
      const res = await axios.post(API + "/auth/register", {
        name,
        email,
        password
      });

      setMessage(res.data.message);
    } catch (err) {
      if (err.response) {
        setMessage(err.response.data.message);
      } else {
        setMessage("Server not reachable");
      }
    }
  }

  return (
    <div className="page">
      <h1>Registration</h1>

      <form onSubmit={handleSubmit}>
        <label>Name</label>
        <input
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        {errors.name && (
          <p className="error-msg">{errors.name}</p>
        )}

        <label>Email</label>
        <input
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        {errors.email && (
          <p className="error-msg">{errors.email}</p>
        )}

        <label>Mobile Number</label>
        <input
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
        />
        {errors.phone && (
          <p className="error-msg">{errors.phone}</p>
        )}

        <label>Password</label>
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        {errors.password && (
          <p className="error-msg">{errors.password}</p>
        )}

        <button type="submit">Register</button>
      </form>

      {message && <p>{message}</p>}
    </div>
  );
}

export default Registration;