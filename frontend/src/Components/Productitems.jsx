import React from 'react'
import  { useContext} from 'react'
import { cartcontext } from '../Context/context';
const Productitems = (props) => {
    const cart=useContext(cartcontext);
    const {deleteproduct}=cart;
    const handleOnClick=()=>{
        deleteproduct(props.product._id);
    }
  return (
    
    <>

    
        <div className='h-[50px] w-full  flex mt-4'>
            <p>{props.product.title}</p>
            <p className='ml-[270px]'> {props.product.category}</p>
            <p className='ml-[370px]'> Rs. {props.product.price}</p>
            <p  className='btn btn-danger h-[36px] ml-[340px]' onClick={handleOnClick}>X</p>
           
        </div>
        <hr className='mr-[150px]'></hr>
       
        


</>
  )
}

export default Productitems