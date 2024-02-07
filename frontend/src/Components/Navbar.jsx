import React, { useEffect, useState ,forceUpdate} from "react";
import logo from "../Assets/logo.jpg";
import { Link } from "react-router-dom";
import cart from "../Assets/cart.jpeg";
import { useNavigate } from "react-router-dom";
const Navbar = () => {
  const history=useNavigate();
  const [cat, setCat] = useState("");


  return (
    <>
      <div className="nav flex justify-between p-2">
        <div className="sec1 flex align-items-center ">
          <img className="h-8 mt-1 ml-1 rounded-md" src={logo} alt="logo" />
          <p className="text-emerald-700 mx-2 font-semibold">Kharido</p>
          {(localStorage.getItem("token")?
          <div>
            <Link to={"/Profile"}><p className="btn btn-info h-8 rounded-full ml-[15px] mt-1 ">
              <p className="btn btn-primary rounded-full  mb-2 "></p></p></Link>
          </div>
          :<p><button className="btn bg-zinc-200 h-6 rounded-full ml-4 " disabled> </button> </p>)}
        </div>
        <div className="sec2 flex align-items-center">
          <ul className="flex gap-x-8"> {/* Changed 'li' to 'ul' */}
            <li>
              <Link className="font-semibold cursor-pointer" to="/" onClick={() => setCat("Home")}>
                Home
                {cat === "Home" ? <hr className={`border-0 rounded h-1 bg-red-900`}></hr> :
                  <hr className={`border-0 rounded h-1 bg-white-900`}></hr>}
              </Link>
            </li>
            <li>
              <Link className="font-semibold cursor-pointer" to={"/Mens"} onClick={() => setCat("Mens")}>
                Mens
                {cat === "Mens" ? <hr className={`border-0 rounded h-1 bg-red-900`}></hr> :
                  <hr className={`border-0 rounded h-1 bg-white-900`}></hr>}
              </Link>
            </li>
            <li>
              <Link className="font-semibold cursor-pointer" to="/Women" onClick={() => setCat("Women")}>
                Women
                {cat === "Women" ? <hr className={`border-0 rounded h-1 bg-red-900`}></hr> :
                  <hr className={`border-0 rounded h-1 bg-white-900`}></hr>}
              </Link>
            </li>
            <li>
              <Link className="font-semibold cursor-pointer" to="/Kids" onClick={() => setCat("Kids")}>
                Kids
                {cat === "Kids" ? <hr className={`border-0 rounded h-1 bg-red-900`}></hr> :
                  <hr className={`border-0 rounded h-1 bg-white-900`}></hr>}
              </Link>
            </li>
          </ul>
        </div>
        <div className="sec3 flex">
          <Link to={"/Cart"}>
            <img className="h-8 mt-1 mr-8 rounded-md transform scale-[2.5] hover:animate-spin" src={cart} alt="cart" />
          </Link>
          {localStorage.getItem("token") ?
            <button onClick={()=>{
              localStorage.removeItem('token');
              history("/");
            }} className="btn hover:bg-blue-700 hover:scale-110 transition ease-in-out duration-300 btn-success">Log Out</button> :
            <Link to={"/Login"} className="btn hover:bg-blue-700 hover:scale-110 transition ease-in-out duration-300 btn-success" >
              <button >Log In</button>
            </Link>
          }
          <Link to={"/SignUp"} className="btn hover:bg-blue-700 hover:scale-110 transition ease-in-out duration-300 btn-success ml-4">
            SignUp
          </Link>
        </div>
      </div>
    </>
  );
};

export default Navbar;
