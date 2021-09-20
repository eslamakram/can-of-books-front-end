import React, { Component } from 'react'
import book1Img from "./assets/124378.jpg"
import book2Img from "./assets/124384.jpg"
import book3Img from "./assets/124405.jpg"
import CarouselItem from './components/CarouselItem';
let imgs = [book1Img, book2Img,book3Img];
class BestBooks extends Component {

 
    render() {
     return( 
       <>
      
     { this.props.booksData.map( (book, idx )=> {

             return       <CarouselItem title={book.title}
                         description={book.description}
                         status={book.status}
                         email={book.email}
                         bookimg={imgs[idx]}
                          />

                          })}
             </>

     )
       
    }
}

export default BestBooks


