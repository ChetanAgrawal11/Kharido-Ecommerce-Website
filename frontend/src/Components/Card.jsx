import React from 'react'
import { Link } from 'react-router-dom'
// import w1 from "../Assets/womens/w1.png"
const Card = (props) => {
  return (
   <>
   <div className="">
   <div className="max-w-96 max-h-[420px] rounded overflow-hidden shadow-lg flexs">
 <Link to={`/Product/${props.id}`}> <img className="w-[225px] h-[300px]" src={props.image} alt="Sunset in the mountains"/></Link> 
  <div className="px-3 pt-2">
    <div className="font-bold text-base mb-2">{props.title}</div>
    <div className="font-semibold text-base mb-2">Rs.{props.price}</div>
  </div>
  <div className="px-1 pt-1 pb-2">
    <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#godlike</span>
    <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#trending</span>
   
  </div>
</div>
</div>
   </>
  )
}

export default Card