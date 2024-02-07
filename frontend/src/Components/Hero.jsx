import React from 'react'
import hero8 from "../Assets/hero8.png"
import hero9 from "../Assets/hero9.png"
import hero10 from "../Assets/hero10.png"
const Hero = () => {
  return (
    <>  
    <div className="con mt-2 p-2 ml-5 mr-5 ">  
    <div id="carouselExampleIndicators" className="carousel slide ">
    <div className="carousel-indicators h-[650]">
      <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
      <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
      <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
    </div>
    <div className="carousel-inner rounded-lg">
      <div className="carousel-item active">
        <img src={hero10} className="d-block w-100" alt="..." />
      </div>
      <div className="carousel-item">
        <img src={hero9} className="d-block w-100" alt="..." />
      </div>
      <div className="carousel-item">
        <img src={hero8} className="d-block w-100" alt="..." />
      </div>
     
    </div>
    <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
      <span className="carousel-control-prev-icon" aria-hidden="true"></span>
      <span className="visually-hidden">Previous</span>
    </button>
    <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
      <span className="carousel-control-next-icon" aria-hidden="true"></span>
      <span className="visually-hidden">Next</span>
    </button>
  </div>
  </div>

  </>

  )
}

export default Hero