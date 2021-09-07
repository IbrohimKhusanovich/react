import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/swiper.min.css";
import "swiper/components/pagination/pagination.min.css"
import car from '../../images/car-dark.svg'
import carActive from '../../images/car-active.svg'
import tv from '../../images/tv-dark.svg'
import tvActive from '../../images/tv-active.svg'
import bag from '../../images/bag-dark.svg'
import bagActive from '../../images/bag-active.svg'
import service from '../../images/service-dark.svg'
import serviceActive from '../../images/service-active.svg'
import shirt from '../../images/shirt-dark.svg'
import shirtActive from '../../images/shirt-active.svg'
import home from '../../images/home-dark.svg'
import homeActive from '../../images/home-active.svg'
import classes from './MainCategories.module.css'
// import Swiper core and required modules
import SwiperCore, {
  Pagination
} from 'swiper/core';

// install Swiper modules
SwiperCore.use([Pagination]);


export default function MainCategories() {
   const [state, setState] = useState([
      {img:car,imgActive:carActive,title:'Transport'},
      {img:tv,imgActive:tvActive,title:'Texnika'},
      {img:bag,imgActive:bagActive,title:'Ish'},
      {img:service,imgActive:serviceActive,title:'Xizmatlar'},
      {img:shirt,imgActive:shirtActive,title:'Kiyim'},
      {img:home,imgActive:homeActive,title:'Mulk'},
      ])
      const [active, setActive] = useState(-1);
const ToggleActive=(item)=>{
   setActive(item)
}
  return (<>
     <div className={classes.container}>
   <h1> Asosiy Kategoriyalar</h1>
    <Swiper  slidesPerView={6} spaceBetween={10} breakpoints={{
  "@0.00": {
    "slidesPerView": 4,
    "spaceBetween": 10
  },
  "@0.75": {
    "slidesPerView": 4,
    "spaceBetween": 20
  },
  "@1.00": {
    "slidesPerView": 5,
    "spaceBetween": 40
  },
  "@1.50": {
    "slidesPerView": 6,
    "spaceBetween": 50
  }
}} className={classes.mySwiper}>

   <div className={classes.circleELems}>
   {state.map((item,idx)=>{
   return(
      <SwiperSlide  key={idx} onClick={()=>ToggleActive(idx)} className={classes.circleELem}>
      <div className={classes.circleIcon +' ' +(idx===active?classes.circleIconActive :'')}>
         <img src={idx===active? item.imgActive:item.img} alt="img" />
      </div>
      <p>{item.title}</p>
      </SwiperSlide>
   )})}
 </div>
  </Swiper>
  </div>
    </>)
}