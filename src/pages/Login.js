import React, { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../logos/logo.png";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async (e) => {
    e.preventDefault();

    const userData = {
      email,
      password,
    };

    try {
      const response = await fetch("http://localhost:5001/api/user/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(userData),
      });

      if (!response.ok) {
        throw new Error("Login failed");
      }

      // Login successful, extract access token from response
      const data = await response.json();

      if (!data.accesstoken) {
        throw new Error("Access token not found in response");
      }

      const accessToken = data.accesstoken;
      const id = data.id;
      const accountType = data.accountType;
      const phone = data.phone;

      // Store the access token in local storage
      localStorage.setItem("accessToken", accessToken);
      localStorage.setItem("id", id);
      localStorage.setItem("accountType", accountType);
      localStorage.setItem("phone", phone);
      console.log(accessToken);
      console.log(id);
      console.log(accountType);
      console.log(phone);
      alert("Loginned Successfully");
      window.location.href = "/";
      // Redirect to the dashboard or any other protected route
    } catch (error) {
      console.error("Error logging in:", error.message);
    }
  };

  return (
    <div className="login-bg">
      <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8 bg login">
        <div className="sm:mx-auto sm:w-full sm:max-w-sm">
          {/* Logo and text with a link to the home page */}
          <Link to="/" className="flex items-center justify-center mb-6">
            <img
              src={logo}
              alt="Health Kshetra Logo"
              className="mr-2 w-8 h-8"
            />
            <span className="text-2xl font-bold text-gray-900">
              Health Kshetra
            </span>
          </Link>

          <h2 className="mt-6 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
            Sign In To Your Account
          </h2>

          <form className="mt-8 space-y-6" onSubmit={handleLogin}>
            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                Email address
              </label>
              <div className="mt-2">
                <input
                  id="email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-blue-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <div>
              <div className="flex items-center justify-between">
                <label
                  htmlFor="password"
                  className="block text-sm font-medium leading-6 text-gray-900"
                >
                  Password
                </label>
              </div>
              <div className="mt-2">
                <input
                  id="password"
                  name="password"
                  type="password"
                  autoComplete="current-password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-blue-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <div>
              <button
                type="submit"
                className="flex w-full justify-center rounded-md bg-blue-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-blue-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600"
              >
                Sign in
              </button>
            </div>
          </form>

          <p className="mt-6 text-center text-sm text-gray-500">
            Not a member?{" "}
            <Link
              to="/register"
              className="font-semibold leading-6 text-blue-600 hover:text-blue-500"
            >
              Sign up
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Login;
