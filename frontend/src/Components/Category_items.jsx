// import React, { useEffect,useState } from 'react';
// import data_women from '../data/dataw.js';
import Card from './Card';

import data_a from '../data/dataa.js';
const Category_items = (props) => {

  return (
    
    <>
   
    <div className="con1 flex justify-center mt-4">
    <h1 className='font-bold text-4xl'>Trending in {props.category.toUpperCase()} </h1>
    </div>
      <div className="som flex flex-wrap flex-col ">
        <div className="flex flex-wrap flex-row ml-10 mt-10 gap-[100px] items-center justify-center">
          {data_a.map((item, i) => {
            
              if(props.category===item.category){
                return <Card key={i} title={item.title} image={item.image} id={item.id} price={item.price} />
              }else{
                return null;
              }
            
           
            })}
        </div>
       
      </div>
    </>
  );
};

export default Category_items;
