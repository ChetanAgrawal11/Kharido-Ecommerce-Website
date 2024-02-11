import React, { useEffect, useState ,forceUpdate} from "react";
import logo from "../Assets/logo.jpg";
import { Link } from "react-router-dom";
import cart from "../Assets/cart.jpeg";
import { useNavigate } from "react-router-dom";
const Navbar = () => {
  const history=useNavigate();
  const [cat, setCat] = useState("");
  function handleOnClick() {
    const alertMessage = document.getElementById("alertmessage");
    if (alertMessage) {
      alertMessage.classList.remove("hidden");
    }
  }
  function handledouble() {
    const alertMessage = document.getElementById("alertmessage");
    if (alertMessage) {
      alertMessage.classList.add("hidden");
    }
  }

  return (
    <>
    <div  id="alertmessage" class=" hidden bg-yellow-50 border border-yellow-200 text-sm text-yellow-800 rounded-lg p-4 dark:bg-yellow-800/10 dark:border-yellow-900 dark:text-yellow-500" role="alert">
  <div class="flex">
    <div class="flex-shrink-0">
      <svg class="flex-shrink-0 h-4 w-4 mt-0.5" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3Z"/><path d="M12 9v4"/><path d="M12 17h.01"/></svg>
    </div>
    <div class="ms-4">
      <h3 class="text-sm font-semibold">
        Please Log In to add Products in the Cart
      </h3>
     
    </div>
    <div className="ml-[1130px]">
    <button onClick={handledouble} type="button" class="inline-flex bg-yellow-50 rounded-lg p-1.5 text-yellow-500 hover:bg-yellow-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-teal-50 focus:ring-yellow-600 dark:bg-transparent  " data-hs-remove-element="#dismiss-alert">
          
          <svg class="flex-shrink-0 h-4 w-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M18 6 6 18"/><path d="m6 6 12 12"/></svg>
        </button>
    </div>
  </div>
</div>
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
          {localStorage.getItem('token')?<Link to={"/Cart"}>
            <img className="h-8 mt-1 mr-8 rounded-md transform scale-[2.5] hover:animate-spin" src={cart} alt="cart" />
          </Link>:
          <div>
            <button onClick={handleOnClick}><img className="h-8 mt-1 mr-8  rounded-md transform scale-[2.5] " src={cart} alt="cart" /></button>
        
        </div>
          }
          
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
