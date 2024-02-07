import React from "react";
import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const SignUp = () => {
  const history = useNavigate();

  const [cred, setcred] = useState({ name: "", email: "", password: "" });

  const onsubmit = async (e) => {
    e.preventDefault();
    const response = await axios.post("http://localhost:5000/api/auth/createUser", {
      name: cred.name,
      email: cred.email,
      password: cred.password
    });
    localStorage.setItem("token", response.data.token);
    history("/Login");
  };

  const onchange = (e) => {
    setcred({ ...cred, [e.target.name]: e.target.value });
  };

  return (
    <>
      <div className="con1 h-screen bg-sky-200 w-full flex justify-center items-center ">
        <div className="elem h-[50%] w-[500px] bg-white rounded-lg flex flex-col ">
          <div className="e1 font-bold text-3xl mt-3 ml-[200px]">Sign Up</div>
          <form onSubmit={onsubmit}>
            <div className="e2">
              <p className="ml-3 p-2"> Username </p>
              <input
                type="text"
                className="ml-3 p-2 w-[80%]"
                placeholder="Username"
                name="name"
                value={cred.name}
                onChange={onchange}
              />
              <p className="ml-3 p-2"> Email </p>
              <input
                type="email"
                className="ml-3 p-2 w-[80%]"
                placeholder="Email"
                name="email"
                value={cred.email}
                onChange={onchange}
              />
              <p className="ml-3 p-2"> Password </p>
              <input
                type="text"
                className="ml-3 p-2 w-[80%]"
                placeholder="Password"
                name="password"
                value={cred.password}
                onChange={onchange}
              />
            </div>
            <div className="e3">
              <button className="btn btn-primary ml-[200px] mt-3 mb-3">Submit</button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default SignUp;
