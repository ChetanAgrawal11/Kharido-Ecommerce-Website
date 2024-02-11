import React, { useContext ,useState} from 'react'
import data_a from '../data/dataa';
import { useParams } from 'react-router-dom';
import Footer from './Footer';
import Footer2 from './Footer2';
import { cartcontext } from '../Context/context';
const Product = () => {
    const cart=useContext(cartcontext);
    const {addproduct}=cart;

    const Product_id=useParams();
    console.log(Product_id.Product_id);
    const product=data_a.find((e)=>e.id===Product_id.Product_id);
    console.log(product)
    const handleOnClick= (e)=>{
        e.preventDefault();
        addproduct(product.category, product.title,product.price,product.id);
    }

  return (
    <>
    \<div className="con1 h-screen ml-5">
        <div className="col1 flex ">
            
        <div className="con2">
        <img src={product.image} className='h-[150px] transition ease-in-out duration-300 delay-150 w-[120px] mb-3 hover:scale-110'></img>
        <img src={product.image} className='h-[150px] transition ease-in-out duration-300 w-[120px] mb-3 hover:scale-110'></img>
        <img src={product.image} className='h-[150px] transition ease-in-out duration-300 w-[120px] mb-3 hover:scale-110'></img>
        </div>
        <div className="con3">
        <img src={product.image} className='h-[450px] w-[350px] transition ease-in-out duration-500 mb-3 ml-7 mt-3 rounded-md hover:scale-110'></img>
        </div>
      
        <div className="con4">
            <p className='text-4xl font-bold ml-20'>{product.title}</p>
            <hr className=' ml-20 mt-3 border-width-8'></hr>
            <div className="rating ml-[100px] w-[200px] mt-3 border border-black p-1 rounded-lg ">
                <div class="flex items-center">
    <svg class="w-4 h-4 text-yellow-300 me-1" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
        <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z"/>
    </svg>
    <p class="ms-2 text-sm font-bold text-gray-900 dark:text-black">4.95</p>
    <span class="w-1 h-1 mx-1.5 bg-gray-500 rounded-full dark:bg-gray-400"></span>
    <a href="#" class="text-sm font-medium text-gray-900 underline hover:no-underline dark:text-black">73 reviews</a>
                </div>

            </div>
            <hr className=' ml-20 mt-3 border-width-8'></hr>
            <div className="price flex">
            <p className='ml-[100px] text-3xl font-bold'>Rs. {product.price} </p>
            <p className='mt-1  font-bold ml-5 text-orange-300 text-2xl'>(Great Value)</p>
            </div>
            <p className='ml-[100px] mt-2 text-green-700 font-semibold'>inclusive of all taxes</p>
            <button className='ml-[100px] mt-4 bg-rose-500 h-[50px] w-[250px] text-lg hover:bg-rose-400 rounded-md text-white font-bold ' onClick={handleOnClick}
                >Add to Cart</button>
            <button className='ml-[30px] h-[50px] w-[150px] bg-zinc-300 rounded-md focus:bg-pink-500 transition ease-in-out duration-500 focus:animate-bounce font-semibold'>WISHLIST</button>
            <p className='ml-[100px] font-bold mt-4'>PRODUCT DETAILS  </p>
            <p className='ml-[100px] font-semibold mt-2'>Size and Fit </p>
            <p className='ml-[100px] text-zinc-500 mt-1'>Regular- Fit</p>
            <p className='ml-[100px] text-zinc-500 '>The model (height 6') is wearing a size M </p>
            <p className='ml-[100px] font-semibold mt-2'>Material and Care </p>
            <p className='ml-[100px] text-zinc-500 mt-1'>Cotton</p>
            <p className='ml-[100px] text-zinc-500 '>Machine Wash</p>
        </div>
      
        </div>
        <div className='ml-5 '>
                <p className='font-bold ml-5 mt-3'>SPECIFICATIONS</p>
            <div className='flex flex-row ml-10 mt-3 ' >
                <div className='ml-[200px] mr-[400px]'>
                <p className='text-zinc-500'>Closure</p>
                <p>{product.specification.closure}</p>
           
                </div>
               
                <div >
                <p className='text-zinc-500 mr-[396px]'>Fabric</p>
                <p>{product.specification.fabric}</p>
                </div>
                <div >
                <p className='text-zinc-500'>Fit</p>
                <p>{product.specification.fit}</p>
                </div>
                
            </div>
            <hr className='ml-[200px] mt-3 mr-[200px] bg-zinc-200'></hr>
            <div className='flex flex-row ml-10 mt-3 ' >
                <div className='ml-[200px] '>
                <p className='text-zinc-500 mr-[400px]'>Length</p>
                <p>{product.specification.length}</p>
                </div>
                <div >
                <p className='text-zinc-500 mr-[365px]'>Main Trend</p>
                <p>{product.specification.main}</p>
                </div>
                <div >
                <p className='text-zinc-500'>Muti pack set</p>
                <p>{product.specification.multi}</p>
                </div>
                
            </div>
            <hr className='ml-[200px] mt-3 mr-[200px] bg-zinc-200'></hr>
            <div className='flex flex-row ml-10 mt-3 ' >
                <div className='ml-[200px] '>
                <p className='text-zinc-500 mr-[365px]'>No of Items</p>
                <p>{product.specification.no}</p>
                </div>
                <div >
                <p className='text-zinc-500 mr-[370px]'>Wash Care</p>
                <p>{product.specification.wash}</p>
                </div>
                <div >
                <p className='text-zinc-500'>Weave Type </p>
                <p>{product.specification.weave}</p>
                </div>
                
            </div>
         


        </div>
    </div>
    <Footer/>
    <Footer2/>
    </>

  )
}

export default Product