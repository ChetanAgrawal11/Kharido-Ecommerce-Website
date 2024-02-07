import React from 'react'
import instagram from "../Assets/instagram.png"
const Email = () => {
  return (
    <>
    <div className="con2 bg-zinc-100 mt-5 flex flex-col justify-center items-center">
        <h1 className='text-3xl font-semibold pt-5 '> Follow Products and Discount on Instagram</h1>
       <img className="h-24 mt-5 "src={instagram}></img>
    </div>
    <div className="con3 bg-zinc-100 flex flex-col justify-center items-center p-5">
        <h1  className='text-3xl font-semibold pt-5'>Or Subscribe to the Newsletter</h1>
        <div className="con4">
        <input type='text' placeholder='   Email Address' className='mt-3 w-[350px] rounded '></input>
        <button className='ml-3 bg-red-500 rounded-md w-[100px]'> Submit </button>
        </div>
        
    </div>
    </>
  )
}

export default Email