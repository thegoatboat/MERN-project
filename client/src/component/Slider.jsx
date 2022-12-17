import React, { useState } from 'react'
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import './Style.scss'
const Slider = () => {
  const [currentSlide,setCurrentSlide]=useState(0)
  const previousSlide=()=>{
    setCurrentSlide(currentSlide===0?4:(prev)=>prev-1);
  }
  const nextSlide=()=>{
    
  setCurrentSlide(currentSlide===4?0:(prev)=>prev+1);
  }
  const data=[
      'image/A1.jpg' ,'image/A2.jpg','image/3.jpg ','image/4.jpg','image/5.jpg'
    ];
  
  return (
    <div className='slider'>
      <div className='container' style={{transform:`translateX(-${currentSlide * 75}vw)`}}>
      <img src={data[0]}alt="article1" />
      <img src={data[1]} alt="article1"/>
      <img src={data[2]} alt="article1" />
      <img src={data[3]} alt="article1" />
      <img src={data[4]} alt="article1" />
      </div>

      <div className="icons">

        <div className="icon" onClick={previousSlide}>
        <ArrowBackIosNewIcon/>
        </div>
        <div className="icon" onClick={nextSlide}>
        <ArrowForwardIosIcon/>
        </div>
      
      </div>
    </div>
  )
}

export default Slider