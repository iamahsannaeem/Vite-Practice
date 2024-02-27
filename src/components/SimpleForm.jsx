import React, { useState } from "react";

const SimpleForm = () => {
  const [error, setError] = useState({});
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });
  const onSubmit = (e) => {
    e.preventDefault();
    const validationErrors = {};
    if (!formData.name.trim()) {
      validationErrors.name = "Name is Required";
    }
    if (!formData.email.trim()) {
      validationErrors.email = "Email is Required";
    } else {
      if (!formData.email.includes("@")) {
        validationErrors.email = "Enter Valid Email is Required";
      }
    }
    if (!formData.password.trim()) {
      validationErrors.password = "Password is Required";
    }
    if (!formData.confirmPassword.trim()) {
      validationErrors.confirmPassword = "Confirm Password is Required";
    } else {
      formData.confirmPassword !== formData.password;
      validationErrors.confirmPassword =
        "Confirm Password Must be Match With Paasword";
    }
    setError(validationErrors);
    if (Object.keys(validationErrors).length === 0) {
      console.log(formData);
    }
  };
  const onChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };
  return (
    <>
      <div className="w-full min-h-screen bg-blue-200 p-5 flex justify-center items-center">
        <div className=" w-full">
          <h2 className="text-4xl font-bold text-center">Sign Up</h2>
          <form
            onSubmit={onSubmit}
            className="w-1/2 mx-auto bg-purple-500 p-5 my-5 rounded space-y-4"
          >
            <div className="flex flex-col space-y-1">
              <label htmlFor="name" className="text-xl text-white">
                Enter Your Full Name:
              </label>
              <input
                type="text"
                id="name"
                className="h-10 rounded outline-none pl-2"
                value={formData.name}
                name="name"
                onChange={onChange}
              />
              {error.name && <span>Error is : {error.name}</span>}
            </div>
            <div className="flex flex-col space-y-1">
              <label htmlFor="email" className="text-xl text-white">
                Enter Your Email
              </label>
              <input
                type="text"
                id="email"
                className="h-10 rounded outline-none pl-2"
                value={formData.email}
                name="email"
                onChange={onChange}
              />
              {error.email && <span>Error is : {error.email}</span>}
            </div>
            <div className="flex flex-col space-y-1">
              <label htmlFor="password" className="text-xl text-white">
                Password
              </label>
              <input
                type="password"
                id="password"
                className="h-10 rounded outline-none pl-2"
                value={formData.password}
                name="password"
                onChange={onChange}
              />
              {error.password && <span>Error is : {error.password}</span>}
            </div>
            <div className="flex flex-col space-y-1">
              <label htmlFor="confirmpass" className="text-xl text-white">
                Password
              </label>
              <input
                type="password"
                id="confirmpass"
                className="h-10 rounded outline-none pl-2"
                value={formData.confirmPassword}
                name="confirmPassword"
                onChange={onChange}
              />
              {error.confirmPassword && (
                <span>Error is : {error.confirmPassword}</span>
              )}
            </div>

            <button
              type="submit"
              className="uppercase w-full bg-white h-10 mt-5 rounded text-purple-500 font-bold"
            >
              Submit
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default SimpleForm;
