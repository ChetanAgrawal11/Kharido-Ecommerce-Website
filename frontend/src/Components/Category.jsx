import React from 'react'
// import Hero from './Hero'
// import Card from './Card'
import Category_items from './Category_items'
import Email from './Email'
import mens_banner from "../Assets/mens_banner.png"
import women_banner from "../Assets/women_banner.png";
import subscribe from "../Assets/subscribe.png";
import Footer from './Footer';
import Footer2 from './Footer2';
const Category = (props) => {
  let img=null;
  if(props.category==='men'){
    img = mens_banner;
  }else if(props.category==='women'){
    img = women_banner;
  }else {
    img=mens_banner;
  }
  return (
    
   <>
   <img src={img} className="mt-5 h-[500px] w-[80%] ml-40 rounded-md"alt='mens banner'></img>
   <Category_items category={props.category}/>
   <Email/>
   <Footer/>
   <Footer2/>
   </>
  )
}

export default Category