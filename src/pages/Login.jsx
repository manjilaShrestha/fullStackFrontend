import React, { useState } from "react";
import axios from "axios";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import { BASE_URL, publicAPI } from "../utils/config";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  async function handleSubmit(e) {
    e.preventDefault();

    try {
      const res = await publicAPI.post(`/auth/login`, {
        email,
        password,
      }, {
        withCredentials: true,
      });

      alert("Login successful");
      

      localStorage.setItem("token", res.data.data.token);
      localStorage.setItem("user", JSON.stringify(res.data.data.employee));
       navigate("/admin-dashboard");

      const{token,employee} = res.data.data;
      console.log("Token:", token);
      console.log("Employee:", employee); 

      Cookies.set("token",token,{
        expires:1,
        secure:false,
        sameSite:"Lax",
        path:"/",
      });

      Cookies.set("user",JSON.stringify(employee),{
        expires:1,
        secure: false,
        sameSite:"Lax",
        path:"/",
      });

      toast.success("Login successful 🎉", {
        position: "top-right",
        autoClose: 2000,
        hideProgressBar: false,
      });


      if (employee.role === "admin") {
        navigate("/admin-dashboard");
      } else if (employee.role === "employee") {
        navigate("/employee-dashboard");
      }

     
    } catch (err) {
      const message =
        err.response?.data?.message ||
        "Something went wrong. Please try again.";

      toast.error(message, {
        position: "top-right",
        autoClose: 2000,
        hideProgressBar: false,
      });
    }
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <form
        onSubmit={handleSubmit}
        className="bg-white p-6 rounded-lg shadow-md w-full max-w-sm"
      >
        <h2 className="text-2xl font-bold mb-4 text-center">Login</h2>

        <label className="block mb-1 text-sm font-medium text-gray-700 text-left">
          Email
        </label>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Email"
          className="w-full border rounded-lg px-3 py-2 mb-3 focus:outline-none focus:ring-2 focus:ring-blue-400"
          required
        />

        <label className="block mb-1 text-sm font-medium text-gray-700 text-left">
          Password
        </label>
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Password"
          className="w-full border rounded-lg px-3 py-2 mb-4 focus:outline-none focus:ring-2 focus:ring-blue-400"
          required
        />

        <button
          type="submit"
          className="w-full bg-blue-500 text-white rounded-lg py-2 hover:bg-blue-600 transition"
        >
          Login
        </button>
      </form>
    </div>
  );
}



