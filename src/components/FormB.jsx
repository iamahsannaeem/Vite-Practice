import React, { useState } from "react";
import toast from "react-hot-toast";

const FormB = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });
  const [errors, setErrors] = useState({});
  const onChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };
  const onSubmit = (e) => {
    e.preventDefault();

    const validatioErrors = {};
    if (!formData.name.trim()) {
      validatioErrors.name = "Name is Required";
    } else if (formData.name.length < 5) {
      validatioErrors.name = "Name Should be Greater then the five charachters";
    } else if (formData.name.includes(" ")) {
      validatioErrors.name = "Please Do not Use the space in Field";
    } else if (/[a-z]/.test(formData.name)) {
      validatioErrors.name = "Name Must Be in Capital Letter";
    }

    if (!formData.email.trim()) {
      validatioErrors.email = "Email is Required";
    } else if (!formData.email.includes("@")) {
      validatioErrors.email = "Please Enter Valid Email Address";
    } else if (/[A-Z]/.test(formData.email)) {
      validatioErrors.email =
        "Can't use even a single letter in Upper Case in Email Field";
    }

    if (!formData.password.trim()) {
      validatioErrors.password = "Password Is Required";
    }

    setErrors(validatioErrors);

    if (Object.keys(validatioErrors).length === 0) {
      console.log(formData);
    }
  };
  const clearClick = () => {
    if (formData.name === "" && formData.email === "") {
      toast.error("All Fields Already Empty");
    } else {
      setFormData({
        name: "",
        email: "",
        password: "",
      });
    }
  };

  return (
    <div className="p-10 w-full sm:w-[70%] md:w-[60%] lg:w-[50%] xl:w-[40%] mx-auto min-h-screen flex flex-col justify-center items-center">
      <h1 className="text-3xl font-bold mb-5 text-center text-white">
        Sign Up Form
      </h1>
      <div className="w-full">
        <form
          onSubmit={onSubmit}
          type="submit"
          className="w-full p-5 flex flex-col bg-white rounded-lg"
        >
          <div className="w-full flex flex-col my-2">
            <label className="font-semibold" htmlFor="name">
              Enter Your Full Name:
            </label>
            <input
              type="text"
              name="name"
              id="name"
              className="bg-gray-500 h-8 rounded outline-none pl-2 text-white"
              placeholder="Enter Your Name here"
              onChange={onChange}
              value={formData.name}
            />
            <p className="text-red-500">{errors.name}</p>
          </div>
          <div className="w-full flex flex-col mb-2">
            <label className="font-semibold" htmlFor="name">
              Enter Your Email Address:
            </label>
            <input
              name="email"
              id="email"
              className="bg-gray-500 h-8 rounded outline-none pl-2 text-white"
              placeholder="Enter Your Email here"
              onChange={onChange}
              value={formData.email}
            />
            <p className="text-red-500">{errors.email}</p>
          </div>
          <div className="w-full flex flex-col mb-2">
            <label className="font-semibold" htmlFor="password">
              Enter Your Password:
            </label>
            <input
              name="password"
              id="password"
              className="bg-gray-500 h-8 rounded outline-none pl-2 text-white"
              placeholder="Enter Your Password here"
              onChange={onChange}
              value={formData.password}
            />
            <p className="text-red-500">{errors.password}</p>
          </div>
          <div className="flex space-x-3">
            <button
              type="submit"
              className="w-full text-white bg-blue-500 rounded py-1 my-2 hover:bg-blue-600 hover:shadow-xl active:bg-blue-700 transition-all duration-200 active:scale-95"
            >
              Submit
            </button>
            <button
              type="button"
              className="w-full text-white bg-red-500 rounded py-1 my-2 hover:bg-red-600 hover:shadow-xl active:bg-red-700 transition-all duration-200 active:scale-95"
              onClick={clearClick}
            >
              Clear
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default FormB;
