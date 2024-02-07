import React from 'react'
import { useState ,useEffect } from 'react';
import axios from 'axios';
const Profile = () => {
    const [data2, setdata2] = useState({name:"",email:""});
   const user= localStorage.getItem("token");
  console.log(user);
   useEffect(() => {
    const fetchData = async () => {
     
        const response = await axios.get("http://localhost:5000/api/auth/getUser", {
          headers: {
            'auth-token': user,
          },
        });
        // Assuming your API response has 'name' and 'email' properties
        const { name, email } = response.data;
        setdata2({ name, email });
     
    };

    fetchData();
  }, [user]);
   
  return (
    <div className='flex justify-center items-center h-screen bg-sky-200'>
        <div className="profile_s h-[250px] w-[450px] bg-white mb-12 rounded-lg flex flex-col" >
            <div className="div1 flex justify-center">
            <p className='mt-4 text-3xl font-serif '>Profile</p>
            </div>
            <div className="name">
            <p className='ml-5 mt-4 text-xl font-semibold'>Name : {data2.name}</p>
            <p className='ml-5 mt-3 text-xl font-semibold'>Email : {data2.email}</p>
            </div>

        </div>
     
     
    </div>
  )
}

export default Profile