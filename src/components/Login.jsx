import React, { useState } from "react";
import { FaEye } from "react-icons/fa";
import { FaEyeSlash } from "react-icons/fa";

const Login = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({
    username: "",
    password: "",
  });
  const [error, setError] = useState({});
  const onChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };
  const onSubmit = (e) => {
    e.preventDefault();
    const validationErrors = {};
    if (!formData.username.trim() || formData.username.includes(" ")) {
      validationErrors.username = "Username is required without space";
    }
    if (!formData.password.trim()) {
      validationErrors.password = "Password is required";
    } else if (formData.password.length < 8) {
      validationErrors.password = "Password should be at least 8 characters";
    }
    setError(validationErrors);
    if (Object.keys(validationErrors).length === 0) {
      console.log(formData);
    }
  };
  return (
    <>
      <div className="w-full h-screen flex justify-center items-center bg-[url('./assets/bg.avif')] bg-cover bg-center min-h-screen text-white px-10">
        <div className="bg-black bg-opacity-80 p-10 rounded-lg w-full sm:w-[400px] md:w-[500px] lg:w-[600px] ">
          <h1 className="text-3xl font-bold mb-5">Login</h1>
          <form onSubmit={onSubmit}>
            <div className="mb-4">
              <label
                className="block text-white text-sm font-bold mb-2"
                htmlFor="username"
              >
                Username
              </label>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline mb-1"
                id="username"
                type="text"
                placeholder="Username"
                value={formData.username}
                onChange={onChange}
                name="username"
              />
              {error.username && (
                <p className="text-red-500 text-xs">{error.username}</p>
              )}
            </div>
            <div className="mb-6 relative">
              <label
                className="block text-white text-sm font-bold mb-2"
                htmlFor="password"
              >
                Password
              </label>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline mb-1"
                id="password"
                type={showPassword ? "text" : "password"}
                placeholder="******************"
                value={formData.password}
                onChange={onChange}
                name="password"
              />
              {error.password && (
                <p className="text-red-500 text-xs">{error.password}</p>
              )}
              {showPassword ? (
                <FaEye
                  className="absolute right-3 top-[40px] text-gray-700"
                  onClick={() => setShowPassword(false)}
                />
              ) : (
                <FaEyeSlash
                  className="absolute right-3 top-[40px] text-gray-700"
                  onClick={() => setShowPassword(true)}
                />
              )}
            </div>

            <div className="flex items-center justify-between">
              <button
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                type="submit"
              >
                Sign In
              </button>
              <a
                className="inline-block align-baseline font-bold text-sm text-blue-500 hover:text-blue-800"
                href="#"
              >
                Forgot Password?
              </a>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default Login;
