import React from "react";
import { useState } from "react";

const FormC = () => {
  const [error, setError] = useState({
    name: "",
    email: "",
    password: "",
  });
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });
  const onChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
    switch (e.target.name) {
      case "name":
        if (!formData.name.trim()) {
          setError({
            ...error,
            name: "Name is Required",
          });
        } else if (e.target.value.length < 5) {
          setError({
            ...error,
            name: "Name Should be Greater then the five charachters",
          });
        } else {
          setError({
            ...error,
            name: "",
          });
        }
        break;
      case "email":
        if (!formData.email.trim()) {
          setError({
            ...error,
            email: "Email is Required",
          });
        } else if (!e.target.value.includes("@")) {
          setError({
            ...error,
            email: "please valid email address",
          });
        } else {
          setError({
            ...error,
            email: "",
          });
        }
        break;
      case "password":
        if (!formData.password.trim()) {
          setError({
            ...error,
            password: "Password is Required",
          });
        } else if (e.target.value.length < 8) {
          setError({
            ...error,
            password: "Password should be at least 8 characters",
          });
        } else {
          setError({
            ...error,
            password: "",
          });
        }
        break;
    }
  };
  const onSubmit = (e) => {
    e.preventDefault();
    const validationErrors = {};
    if (!formData.name.trim()) {
      validationErrors.name = "Name is Required";
    } else if (formData.name.length < 5) {
      validationErrors.name =
        "Name Should be Greater then the five charachters";
    }
    if (!formData.email.trim()) {
      validationErrors.email = "Email is Required";
    } else if (!formData.email.includes("@")) {
      validationErrors.email = "please valid email address";
    }

    if (!formData.password.trim()) {
      validationErrors.password = "Password is Required";
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
      <div className="w-full md:w-[600px] mx-auto p-5">
        <h3 className="text-center text-2xl my-4">Sign Up Form</h3>
        <form
          type="submit"
          onSubmit={onSubmit}
          className="w-full flex flex-col p-5 gap-3 bg-slate-300 rounded"
        >
          <div className="w-full">
            <input
              type="text"
              name="name"
              placeholder="name"
              className="pl-2 outline-none w-full h-8 bg-slate-200 rounded"
              value={formData.name}
              onChange={onChange}
            />
            <p className="text-red-500">{error.name}</p>
          </div>
          <div>
            <input
              type="text"
              name="email"
              placeholder="email"
              className="pl-2 outline-none w-full h-8 bg-slate-200 rounded"
              value={formData.email}
              onChange={onChange}
            />
            <p className="text-red-500">{error.email}</p>
          </div>
          <div>
            <input
              type="text"
              name="password"
              placeholder="password"
              className="pl-2 outline-none w-full h-8 bg-slate-200 rounded"
              value={formData.password}
              onChange={onChange}
            />
            <p className="text-red-500">{error.password}</p>
          </div>
          <button
            type="submit"
            className="w-full bg-slate-500 text-white py-1 rounded"
          >
            Submit
          </button>
        </form>
      </div>
    </>
  );
};

export default FormC;
