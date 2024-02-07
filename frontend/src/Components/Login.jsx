import React from "react";
import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
const Login = () => {
  const history = useNavigate();

  const [cred, setcred] = useState({ email: "", password: "" });

  const onsubmit = async (e) => {
    e.preventDefault();
    const response = await axios.post("http://localhost:5000/api/auth/login", {
    
      email: cred.email,
      password: cred.password
    });
    
    localStorage.setItem("token", response.data.token);
    console.log(localStorage.getItem("token"));
    console.log(response.data.success);
    if(response.data.success){
      history("/");
    }else{
      alert(response.data.mess);
      history("/Login");
    }
    
  };

  const onchange = (e) => {
    setcred({ ...cred, [e.target.name]: e.target.value });
  };

  return (
  <>
  <div className="con1 h-screen bg-sky-200 w-full flex justify-center items-center ">
      <div className="elem h-[40%] w-[500px] bg-white rounded-lg flex flex-col ">
      <div className="e1 font-bold text-3xl mt-3 ml-[200px]">Log In</div>
     <form onSubmit={onsubmit}>
      <div className="e2">
        <p className="ml-3 p-2"> Username </p>
        <input type="text " className="ml-3 p-2 w-[80%]" placeholder="Username"  name="email" value={cred.email} onChange={onchange} />
        <p className="ml-3 p-2"> Password </p>
        <input type="text" className="ml-3 p-2 w-[80%]" placeholder="Password" name="password" value={cred.password} onChange={onchange} />
      </div>
      
      <div className="e3">
   <button className="btn btn-primary ml-[200px] mt-3">Submit</button>
      </div>
      </form>
      </div>
  </div>
  </>
  )
};

export default Login;
