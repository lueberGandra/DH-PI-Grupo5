import React from 'react'
import './style.css'
import { useEffect, useState } from 'react'
import { Carousel } from 'react-bootstrap'



const Banner = () => {
  return(
    <Carousel>
    <Carousel.Item>
      <img
        className="d-block w-75"
        src="./img/bcg-01.jpg"
        alt="First slide"
      />
    </Carousel.Item>
    <Carousel.Item>
      <img
        className="d-block w-75"
        src="./img/bcg-02.jpg"
        alt="Second slide"
      />
  
     </Carousel.Item>
    <Carousel.Item>
      <img
        className="d-block w-75"
        src="./img/bcg-03.jpg"
        alt="Third slide"
      />
    </Carousel.Item>
  </Carousel>
  )
 
}
export default Banner
 
