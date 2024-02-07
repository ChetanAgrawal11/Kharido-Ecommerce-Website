import React, { useContext ,useEffect ,useState} from 'react'
import { cartcontext } from '../Context/context'
import Productitems from './Productitems';
import img from "../Assets/download.png";
const Cart = () => { 

  const cart_d = useContext(cartcontext);
  const { getproduct, items } = cart_d;
  const [totalAmount, setTotalAmount] = useState(0);

  useEffect(() => {
    if (localStorage.getItem('token')) {
      let calculatedTotal = 0;
      getproduct();
      console.log(items);
      for (const item of items) {
        calculatedTotal += item.price || 0;
      }
      setTotalAmount(calculatedTotal);
    }
  }, [items]);

  console.log(totalAmount);



  return (
    totalAmount!=0?
    <div className='flex flex-col mt-[80px]'>
      <p className='ml-[100px]  text-2xl font-bold'>Cart Summary </p>
      <div className='flex ml-[100px] gap-[350px] mt-5' >
      <p className='font-semibold'>Title</p>
      <p className='font-semibold'>Category</p>
      <p className='font-semibold'>Total</p>
      <p className='font-semibold'>Remove</p>
      </div>
      <hr className='ml-[100px] mt-3 mr-[150px]'></hr>
    <div className='mt-2'>
  {items.map((item)=>{
      return <div className="flex flex-col ml-[100px] ">
      <Productitems key={item._id} product={item} />
      </div>
    })}
    </div>
    <div>
      <p className='ml-[100px] mt-16 text-2xl font-bold'>Cart Total </p>
      <div className="cost flex">
      <p className='ml-[105px] mt-4'>Subtotal :</p>
      <p className='ml-[305px] mt-4'>{totalAmount}</p>
      
      </div>
      <hr className='ml-[105px] mr-[850px] mt-3'></hr>
      <div className="cost2 flex">
      <p className='ml-[105px] mt-4'>Shipping Fee:</p>
      <p className='ml-[280px] text-emerald-500 font-bold mt-4'>Free</p>
      
      </div>
      <hr className='ml-[105px] mr-[850px] mt-3'></hr>
      <p className='btn btn-primary ml-[105px] mt-3'> Proceed to CheckOut </p>
    </div>
    </div>:
    <div className='flex h-[600px] w-full justify-center items-center flex-col'>
      <img src={img} className='animate-bounce duration-300'></img>
      <p className='ml-3 mt-2 text-3xl font-semibold '>No Items in the Cart </p>
      <p className='mt-2 text-zinc-400'>Please , go to the home page to Add products </p>
    </div>
   
  )
}

export default Cart