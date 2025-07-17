import { useState } from "react";
import axios from "axios";

export default function Signup() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSignup = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post("http://localhost:5000/signup", {
        email,
        password,
      });

      if (res.data.exists) {
        alert("Account already exists. Please login.");
        return;
      }

      if (res.data.token) {
        localStorage.setItem("token", res.data.token);
        alert("Signup successful");
      }
    } catch (err) {
      console.error(err);

      // Optional: Show more specific error if backend sends it
      if (err.response?.data?.message === "Account already exists") {
        alert("Account already exists. Please login.");
      } else {
        alert("Signup failed");
      }
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <form onSubmit={handleSignup} className="bg-white p-8 rounded-xl shadow-md w-full max-w-md">
        <h2 className="text-2xl font-bold mb-6 text-center">Signup</h2>
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
        <button className="bg-green-600 text-white w-full py-3 rounded-lg hover:bg-green-700">
          Signup
        </button>
      </form>
    </div>
  );
}
