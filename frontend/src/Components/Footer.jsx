import React from 'react'
import logo from "../Assets/logo.jpg";
import Social from "../Assets/Social.png"
const Footer = () => {
  return (
    <div className="container">
  <footer className="row row-cols-1 row-cols-sm-2 row-cols-md-5 py-5 my-5 border-top">
    <div className="col mb-3">
    <img className="h-8 mt-1 ml-1 rounded-md" src={logo}></img>
    
      <p className="text-body-secondary mt-2 ml-1 ">  Kharido © 2024</p>
      <img className="h-6 mt-4  rounded-md" src={Social}></img>
    </div>

    <div className="col mb-3">

    </div>

    <div className="col mb-3">
      <h5 className='font-semibold'>Catalog</h5>
      <ul className="nav flex-column">
        <li className="nav-item mt-2 mb-2"><a href="#" className="nav-link p-0 text-body-secondary">Necklace</a></li>
        <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-body-secondary">Hoodies</a></li>
        <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-body-secondary">Shirts</a></li>
        <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-body-secondary">T-Shirts</a></li>
        <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-body-secondary">Trousers</a></li>
      </ul>
    </div>

    <div className="col mb-3">
      <h5 className='font-semibold'>About Us</h5>
      <ul className="nav flex-column">
        <li className="nav-item mt-2 mb-2"><a href="#" className="nav-link p-0 text-body-secondary">Our Products</a></li>
        <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-body-secondary">Sitemap</a></li>
        <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-body-secondary">FAQ</a></li>
        <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-body-secondary">Terms and Conditions</a></li>
        <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-body-secondary">About</a></li>
      </ul>
    </div>

    <div className="col mb-3">
      <h5 className='font-semibold'>Customer Services</h5>
      <ul className="nav flex-column">
        <li className="nav-item mb-2 mt-2 "><a href="#" className="nav-link p-0 text-body-secondary">Contact Us</a></li>
        <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-body-secondary">Track your Order</a></li>
        <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-body-secondary">Book an Appointment</a></li>
        <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-body-secondary">Shipping and Returns</a></li>
        <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-body-secondary">Know More</a></li>
      </ul>
    </div>
  </footer>
</div>
  )
}

export default Footer