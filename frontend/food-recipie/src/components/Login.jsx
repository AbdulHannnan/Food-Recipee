import { useState } from "react";
import { useNavigate } from "react-router-dom";

import axios from "axios";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();


  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post("http://localhost:5000/login", {
        email,
        password,
      });

     if (res.data.token) {
  localStorage.setItem("token", res.data.token);
  alert("Login successful");
  navigate("/");
}

    } catch (err) {
      console.error(err);
      alert("Login failed");
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <form onSubmit={handleLogin} className="bg-white p-8 rounded-xl shadow-md w-full max-w-md">
        <h2 className="text-2xl font-bold mb-6 text-center">Login</h2>
        <input
          type="email"
          placeholder="Email"
          className="w-full mb-4 p-3 border border-gray-300 rounded-lg"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="password"
          placeholder="Password"
          className="w-full mb-4 p-3 border border-gray-300 rounded-lg"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button className="bg-blue-600 text-white w-full py-3 rounded-lg hover:bg-blue-700">
          Login
        </button>
      </form>
    </div>
  );
}
