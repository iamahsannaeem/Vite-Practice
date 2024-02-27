import React, { useState } from "react";

const Sample = () => {
  const [loading, setLeading] = useState(false);
  const [error, setError] = useState({
    filAllFields: "",
    name: "",
    email: "",
    password: "",
    gendar: "",
    country: "",
    domain: "",
    location: "",
    age: "",
    Date: "",
  });
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    gendar: "",
    country: "",
    domain: "",
    location: "",
    age: 18,
    Date: "",
  });

  const onChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
    if (e.target.value === "") {
      setError({
        ...error,
        name: "",
      });
    }
    if (formData.name.includes(" ")) {
      setError({
        ...error,
        name: "Name should not contain space",
      });
    } else {
      setError({
        ...error,
        name: "",
      });
    }
  };

  const onSubmit = (e) => {
    e.preventDefault();
    setLeading(true);
    if (
      formData.name === "" ||
      formData.email === "" ||
      formData.password === "" ||
      formData.gendar === "" ||
      formData.country === "" ||
      formData.domain === "" ||
      formData.location === "" ||
      formData.age === "" ||
      formData.Date === ""
    ) {
      setError({
        ...error,
        filAllFields: "Please fill all the fields",
      });
    } else if (formData.email.includes("@") === false) {
      setError({
        ...error,
        email: "Email should contain @",
      });
    } else if (formData.password.length < 8) {
      setError({
        ...error,
        password: "Password should be at least 8 characters",
      });
    } else if (formData.gendar === "") {
      setError({
        ...error,
        gendar: "Please select gendar",
      });
    } else if (formData.country === "") {
      setError({
        ...error,
        country: "Please select country",
      });
    } else if (formData.domain === "") {
      setError({
        ...error,
        domain: "Please select domain",
      });
    } else if (formData.location === "") {
      setError({
        ...error,
        location: "Please select location",
      });
    } else if (formData.age === "") {
      setError({
        ...error,
        age: "Please select age",
      });
    } else if (formData.Date === "") {
      setError({
        ...error,
        Date: "Please select Date",
      });
      return;
    } else {
      console.log(formData);
      setLeading(false);
    }
  };
  return (
    <>
      <div className="bg-purple-500 w-full min-h-screen p-5">
        <div className="w-full sm:w-[450px] md:w-[500px] lg:w-[600px] xl:w-[700px] mx-auto bg-slate-200 p-5 rounded">
          <h1 className="text-xl sm:text-2xl md:text-3xl font-bold uppercase underline text-center">
            Sign Up Form
          </h1>
          {error.filAllFields && (
            <p className="text-red-500 text-center">{error.filAllFields}</p>
          )}
          <form onSubmit={onSubmit}>
            <div>
              <label htmlFor="name" className="text-lg font-smemibold">
                Full Name
                <input
                  type="text"
                  name="name"
                  id="name"
                  className="w-full px-2 my-2 border border-gray-300 rounded outline-none"
                  onChange={onChange}
                />
                {error.name && <p className="text-red-500">{error.name}</p>}
              </label>
            </div>
            <div>
              <label htmlFor="email" className="text-lg font-smemibold">
                Email
                <input
                  name="email"
                  id="email"
                  className="w-full px-2 my-2 border border-gray-300 rounded outline-none"
                  onChange={onChange}
                />
                {error.email && <p className="text-red-500">{error.email}</p>}
              </label>
            </div>
            <div>
              <label htmlFor="password" className="text-lg font-smemibold">
                Password
                <input
                  type="password"
                  name="password"
                  id="password"
                  className="w-full px-2 my-2 border border-gray-300 rounded outline-none"
                  onChange={onChange}
                />
                {error.password && (
                  <p className="text-red-500">{error.password}</p>
                )}
              </label>
            </div>
            <div>
              <label htmlFor="gendar" className="text-lg font-smemibold">
                Gendar
              </label>
              <select
                name="gendar"
                id="gendar"
                className="w-full p-2 my-2 border border-gray-300 rounded outline-none"
                onChange={onChange}
              >
                <option value="">Select Your Gendar</option>
                <option value="male">Male</option>
                <option value="female">Female</option>
                <option value="other">Other</option>
              </select>
              {error.gendar && <p className="text-red-500">{error.gendar}</p>}
            </div>
            <div>
              <label htmlFor="country" className="text-lg font-smemibold">
                Country
              </label>
              <select
                name="country"
                id="country"
                className="w-full p-2 my-2 border border-gray-300 rounded outline-none"
                onChange={onChange}
              >
                <option value="">Choose Your Country</option>
                <option value="bangladesh">Bangladesh</option>
                <option value="india">India</option>
                <option value="pakistan">Pakistan</option>
              </select>
              {error.country && <p className="text-red-500">{error.country}</p>}
            </div>
            <div>
              <label htmlFor="domain" className="text-lg font-smemibold">
                Choose Your Domain
              </label>
              <select
                name="domain"
                id="domain"
                className="w-full p-2 my-2 border border-gray-300 rounded outline-none"
                onChange={onChange}
              >
                <option value="">Choose Your Domain</option>
                <option value="frontend">Frontend</option>
                <option value="backend">Backend</option>
                <option value="fullstack">Fullstack</option>
              </select>
              {error.domain && <p className="text-red-500">{error.domain}</p>}
            </div>
            <div className="space-x-2 ">
              <label htmlFor="onsite" className="text-lg font-smemibold">
                Onsite
              </label>
              <input
                type="radio"
                name="location"
                id="onsite"
                value="onsite"
                onChange={onChange}
              />
              <label htmlFor="remote" className="text-lg font-smemibold">
                Remote
              </label>
              <input
                type="radio"
                name="location"
                id="remote"
                value="remote"
                onChange={onChange}
              />
              <label htmlFor="hybrid">Hybrid</label>
              <input
                type="radio"
                name="location"
                id="hybrid"
                value="hybrid"
                onChange={onChange}
              />
              {error.location && (
                <p className="text-red-500">{error.location}</p>
              )}
            </div>
            <div className="flex items-center gap-5 my-3">
              <label htmlFor="age" className="text-lg font-smemibold">
                Pick Age :
              </label>
              <input
                className="w-[200px] h-2 bg-gray-400 rounded-lg appearance-none cursor-pointer"
                type="range"
                name="age"
                id="age"
                min="18"
                max="60"
                onChange={onChange}
              />
              <p className="text-lg font-smemibold py-1 px-3 bg-blue-300 rounded-md">
                {formData.age}
              </p>
            </div>
            <div className="flex items-center gap-5 mb-3">
              <label htmlFor="Date" className="text-lg font-smemibold">
                Date of Joining
              </label>
              <input
                className="bg-gray-400 rounded-lg appearance-none cursor-pointer px-3 text-white"
                type="date"
                name="Date"
                id="Date"
                onChange={onChange}
              />
              {error.Date && <p className="text-red-500">{error.Date}</p>}
            </div>
            <input
              type="submit"
              value={loading ? "Loading..." : "Submit"}
              className={`w-full p-2 my-2 ${
                loading ? "bg-gray-400" : "bg-blue-500"
              } text-white rounded `}
            />
          </form>
        </div>
      </div>
    </>
  );
};

export default Sample;
