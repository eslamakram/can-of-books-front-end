import React, { Component } from 'react'
import { Accordion } from 'react-bootstrap'
import axios from 'axios';
class BestBooks extends Component {


//  ControlledCarousel() => {
//         const [index, setIndex] = useState(0);
      
//         const handleSelect = (selectedIndex, e) => {
//           setIndex(selectedIndex);
//         };}                        
    
    
    render() {
        return (
            <div>
       
  
    <Carousel activeIndex={index} onSelect={handleSelect}>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="holder.js/800x400?text=First slide&bg=373940"
          alt="First slide"
        />
        <Carousel.Caption>
          <h3>{this.props.title}</h3>
          <p> {this.props.description}</p>
          <h5> {this.props.status}</h5>
          <h6>{this.props.email} </h6>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="holder.js/800x400?text=Second slide&bg=282c34"
          alt="Second slide"
        />

        <Carousel.Caption>
        <h3>{this.props.title}</h3>
          <p> {this.props.description}</p>
          <h5> {this.props.status}</h5>
          <h6>{this.props.email} </h6>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="holder.js/800x400?text=Third slide&bg=20232a"
          alt="Third slide"
        />

        <Carousel.Caption>
        <h3>{this.props.title}</h3>
          <p> {this.props.description}</p>
          <h5> {this.props.status}</h5>
          <h6>{this.props.email} </h6>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>



{/* render(<ControlledCarousel />); */}


            </div>
        )
    }
}

export default BestBooks
