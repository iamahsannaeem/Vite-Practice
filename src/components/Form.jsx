//////////////Import Hook from React ////////////////
import React, { useState } from "react";
//////////Toast Import from React Hot Toast////////
import toast from "react-hot-toast";
////////React Icons//////////
import { FaEyeSlash } from "react-icons/fa";
import { FaEye } from "react-icons/fa";

const Form = () => {
  const [error, setError] = useState({
    name: "",
    email: "",
    password: "",
    comment: "",
    status: "",
    country: "",
    terms: "",
  });
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    comment: "",
    status: "",
    country: "",
    terms: "",
  });
  const [showPassword, setShowPassword] = useState(false);

  const onChange = (e) => {
    ////Assign Value By name////
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
    ////switch case Method start/////////////
    switch (e.target.name) {
      case "name":
        if (!e.target.value.trim()) {
          setError({
            ...error,
            name: "Name Is Required",
          });
        } else if (e.target.value.length < 5) {
          setError({
            ...error,
            name: "Name Must be Greater the 5 Charachters",
          });
        } else if (e.target.value.includes(" ") === true) {
          setError({
            ...error,
            name: "Name Should Not Contain Space",
          });
        } else {
          setError({
            ...error,
            name: "",
          });
        }
        break;
      case "email":
        if (!e.target.value.trim()) {
          setError({
            ...error,
            email: "Email Is Required",
          });
        } else if (e.target.value.includes("@") === false) {
          setError({
            ...error,
            email: "Please Enter Valid Email eg. axample@gmail.com",
          });
        } else {
          setError({
            ...error,
            email: "",
          });
        }
        break;
      case "password":
        if (!e.target.value.trim()) {
          setError({
            ...error,
            password: "Password Is Required",
          });
        } else if (e.target.value.length < 8) {
          setError({
            ...error,
            password: "Please Enter Eight Digits Password",
          });
        } else {
          setError({
            ...error,
            password: "",
          });
        }
        break;
      case "comment":
        if (!e.target.value.trim()) {
          setError({
            ...error,
            comment: "Comment Is Required",
          });
        } else {
          setError({
            ...error,
            comment: "",
          });
        }
        break;
      case "status":
        if (!e.target.value.trim()) {
          setError({
            ...error,
            status: "Merital Status is Required",
          });
        } else {
          setError({
            ...error,
            status: "",
          });
        }
        break;
      case "country":
        if (!e.target.value.trim()) {
          setError({
            ...error,
            country: "Country Is Required",
          });
        } else {
          setError({
            ...error,
            country: "",
          });
        }
        break;
      case "terms":
        if (!e.target.checked) {
          setError({
            ...error,
            terms: "Please Accept Terms And Conditions",
          });
        } else
          setError({
            ...error,
            terms: "",
          });
        break;
    }
    ////switch case Method end////////////
  };
  const onSubmit = (e) => {
    e.preventDefault();
    const validationErrors = {};
    ////////////////////////////Name Validation////////////////////////////
    if (!formData.name.trim()) {
      validationErrors.name = "Name Is Required";
    } else if (formData.name.length < 5) {
      validationErrors.name = "Name Must be Greater the 5 Charachters";
    } else if (formData.name.includes(" ") === true) {
      validationErrors.name = "Name Should Not Contain Space";
    }
    ////////////////////////////Email Validation////////////////////////////
    if (!formData.email.trim()) {
      validationErrors.email = "Email Is Required";
    } else if (formData.email.includes("@") === false) {
      validationErrors.email = "Please Enter Valid Email eg. axample@gmail.com";
    }
    ////////////////////////////Password Validation////////////////////////////
    if (!formData.password.trim()) {
      validationErrors.password = "Password Is Required";
    } else if (formData.password.length < 8) {
      validationErrors.password = "Please Enter Eight Digits Password";
    }
    ////////////////////////////Status Validation////////////////////////////
    if (!formData.status.trim()) {
      validationErrors.status = "Merital Status is Required";
    }
    ////////////////////////////Comment Validation////////////////////////////
    if (!formData.comment.trim()) {
      validationErrors.comment = "Please Mention Your Comments";
    }
    ////////////////////////////Country Validation////////////////////////////
    if (!formData.country.trim()) {
      validationErrors.country = "Select your Country";
    }
    ////////////////////////////Terms Validation////////////////////////////
    if (!formData.terms) {
      validationErrors.terms = "Please Accept Terms and Conditions";
    }

    setError(validationErrors);
    if (Object.keys(validationErrors).length === 0) {
      console.log(formData);
    }
  };
  //////Get Clear Function start////////
  const getClear = () => {
    if (
      formData.name === "" &&
      formData.email === "" &&
      formData.password === "" &&
      formData.comment === "" &&
      formData.status === "" &&
      formData.country === "" &&
      formData.terms === false
    ) {
      toast.error("Form fields are already empty!");
      return;
    }

    setFormData({
      name: "",
      email: "",
      password: "",
      comment: "",
      status: "",
      country: "",
      terms: false,
    });
    setError({
      name: "",
      email: "",
      password: "",
      comment: "",
      status: "",
      country: "",
      terms: false,
    });
    toast.success("All Fields Has Been Cleared!");
  };
  //////Get Clear Function end////////

  return (
    <div className="min-h-screen flex items-center p-5 bg-white">
      <div className="bg-[#0e101c] w-full sm:w-[80%] md:w-[60%] lg:w-[50%] xl:w-[30%] mx-auto h-auto px-6 py-8 text-white flex items-center justify-center rounded-lg">
        <form onSubmit={onSubmit} className="w-full">
          <p className="text-4xl font-thin border-b-2 border-b-white py-4 uppercase mb-1">
            Sign Up
          </p>
          <div className="mb-1">
            <p>Name</p>
            <input
              type="text"
              className="w-full h-8 rounded text-black outline-none p-2"
              name="name"
              min="8"
              value={formData.name}
              onChange={onChange}
              placeholder="Name be with 5 Charachters"
            />
            <p className="">
              {error.name && <span className="text-red-500">{error.name}</span>}
            </p>
          </div>
          <div className=" mb-1">
            <p>Email</p>
            <input
              className="w-full h-8 rounded text-black outline-none p-2"
              name="email"
              value={formData.email}
              onChange={onChange}
              placeholder="Enter your Email"
            />
            <p className="">
              {error.email && (
                <span className="text-red-500">{error.email}</span>
              )}
            </p>
          </div>
          <div className=" mb-1">
            <p>Password</p>
            <div className="relative">
              <input
                type={showPassword ? "text" : "password"}
                className="w-full h-8 rounded text-black outline-none p-2"
                name="password"
                value={formData.password}
                onChange={onChange}
                placeholder="Enter your Password"
              />
              {showPassword ? (
                <FaEye
                  className="absolute right-2 top-1/2 -translate-y-1/2 text-black cursor-pointer"
                  onClick={() => setShowPassword(!showPassword)}
                />
              ) : (
                <FaEyeSlash
                  className="absolute right-2 top-1/2 -translate-y-1/2 text-black cursor-pointer"
                  onClick={() => setShowPassword(!showPassword)}
                />
              )}
            </div>
            <p className="">
              {error.password && (
                <span className="text-red-500">{error.password}</span>
              )}
            </p>
          </div>
          <div className=" mb-1">
            <p>Write Comment</p>
            <textarea
              className="w-full  rounded text-black outline-none p-2"
              cols="30"
              rows="2"
              name="comment"
              min="30"
              value={formData.comment}
              onChange={onChange}
              placeholder="Enter your Comment"
            />
            <p className="">
              {error.comment && (
                <span className="text-red-500">{error.comment}</span>
              )}
            </p>
          </div>
          <div className="w-full border-2 border-white rounded-lg flex gap-2 items-center py-5 px-3 mb-4">
            <div className="flex gap-2 items-center">
              <label htmlFor="single">Single</label>
              <input
                id="single"
                type="radio"
                name="status"
                value="Single"
                onChange={onChange}
              />
            </div>
            <div className="flex gap-1 items-center">
              <label htmlFor="married">Married</label>
              <input
                id="married"
                type="radio"
                name="status"
                value="Married"
                onChange={onChange}
              />
            </div>
          </div>
          <p className="">
            {error.status && (
              <span className="text-red-500">{error.status}</span>
            )}
          </p>
          <div className="space-y-4 mb-1">
            <p>Choose Your Location</p>
            <select
              className="text-black w-full h-8 px-2 rounded"
              name="country"
              value={formData.country}
              onChange={onChange}
            >
              <option value="">Select Country</option>
              <option value="Pakistan">Pakistan</option>
              <option value="UK">United Kingdom</option>
              <option value="Canada">Canada</option>
              <option value="USA">United States</option>
              <option value="UAE">United Arab Emirates</option>
              <option value="India">India</option>
              <option value="China">China</option>
              <option value="Japan">Japan</option>
            </select>
            <p className="">
              {error.country && (
                <span className="text-red-500">{error.country}</span>
              )}
            </p>
          </div>
          <div className="flex items-center gap-2 mb-2">
            <label htmlFor="terms" className="flex items-center gap-2">
              Accept Terms And Conditions
            </label>
            <input
              id="terms"
              type="checkbox"
              name="terms"
              value="accept"
              onChange={onChange}
              className="w-5 h-5"
            />
          </div>
          <p className="">
            {error.terms && <span className="text-red-500">{error.terms}</span>}
          </p>
          <div className="w-full flex items-center justify-between">
            <button
              type="submit"
              className="bg-[#f18703] h-10 w-[40%] px-5 tracking-widest rounded hover:bg-[#f18603d2] active:hover:scale-95 transition"
            >
              SUMIT
            </button>
            <button
              type="button"
              className="bg-[#858483] h-10 w-[40%] px-5 tracking-widest rounded hover:bg-[#575553d2] active:hover:scale-95 transition"
              onClick={getClear}
            >
              CLEAR
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Form;
