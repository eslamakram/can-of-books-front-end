import React, { Component } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import book1Img from "./assets/124378.jpg"
// import book2Img from "./assets/124384.jpg"
// import book3Img from "./assets/124405.jpg"
import { Carousel, Button } from 'react-bootstrap'
// let imgs = [book1Img, book2Img, book3Img];


 
class BestBooks extends Component {


  render() {
    return (
      <div >


        <Carousel 
      
        indicators={false}
        controls={false}
        >
          <Carousel.Item interval={2000}>
            {/* {imgs.forEach(img => */}
            <img
              className="d-block w-100"
              src={book1Img}
              alt="Third slide"
            />

            <Carousel.Caption>
              <h3>{this.props.title}</h3>
              <p> {this.props.description}</p>
              <h5> {this.props.status}</h5>
              <h6>{this.props.email} </h6>
        <br></br>
        <>
          <Button variant="primary" onClick={() => { this.props.handleUpdateBook(this.props.id) }}>Update</Button>
           <Button variant="warning" onClick={() => { this.props.handleDeleteBook(this.props.id) }} >Delete</Button>
          </>
            </Carousel.Caption>

           
            
                     </Carousel.Item>
                     
        </Carousel>


      </div>

    )

  }
}

export default BestBooks

