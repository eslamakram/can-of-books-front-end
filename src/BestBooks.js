import React, { Component } from 'react'
import  style from './style.css'
import book1Img from "./assets/124378.jpg"
import book2Img from "./assets/124384.jpg"
import book3Img from "./assets/124405.jpg"
import { Carousel } from 'react-bootstrap'
let imgs = [book1Img, book2Img,book3Img];

class BestBooks extends Component {

 
    render() {
     return( 
       <>
      
     { this.props.booksData.map( (book, idx )=> {

             return  ( 
               <div >
             <Carousel indicators={false}  className={Carousel}
             // activeIndex={this.state.index} onSelect={this.handleSelect}
             >
             <Carousel.Item  interval={2000}
             >
                 <img
                     className="d-block w-100"
                     src={imgs[idx]}
                     alt="Third slide"
                 />

                 <Carousel.Caption>
                     <h3>{book.title}</h3>
                     <p> {book.description}</p>
                     <h5> {book.status}</h5>
                     <h6>{book.email} </h6>
                 </Carousel.Caption>
             </Carousel.Item>
             </Carousel>
             </div>  
            //  <CarouselItem title={book.title}
            //              description={book.description}
            //              status={book.status}
            //              email={book.email}
            //              bookimg={imgs[idx]}
            //               />



             )
                          })}
             </>

     )
       
    }
}

export default BestBooks


