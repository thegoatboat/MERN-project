import React from 'react'
import Carousel from 'react-bootstrap/Carousel';
import './Style.scss'
const Contact = () => {
  return (
    <div >


    <Carousel className='slider-c' variant="dark">
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="image/log3.png"
          alt="First slide"
        />
        <Carousel.Caption>
          <h5>First slide label</h5>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem cumque placeat dolores porro ea quo facilis veritatis recusandae labore dolor architecto assumenda libero dolorem, magnam quis corrupti praesentium. Ipsa, voluptas.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="image/FN7A3143.jpg"
          alt="Second slide"
        />
        <Carousel.Caption>
          <h5>Second slide label</h5>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="image/A3.jpg "
          alt="image/A3.jpg " 
         
        />
        <Carousel.Caption>
          <h5>Third slide label</h5>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>

   <p>
    Lorem ipsum dolor sit amet consectetur adipisicing elit.
    Voluptate aliquam veritatis aut quaerat ipsam corrupti asperiores quia, 
    praesentium dolores, id sint nisi ut dignissimos commodi error suscipit facere.
     Cupiditate, aspernatur!
   </p>
    </div>
  )
}

export default Contact