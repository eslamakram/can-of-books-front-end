import React, { Component } from 'react'
import { Carousel } from 'react-bootstrap'
// import  style from '../styles/style.css'

 class CarouselItem extends Component {

    // constructor(props){
    //     super(props);
    //      this.state={
    //     index :0,
    //          }
    //         }
    //  handleSelect =(selectedIndex, e) => {
    //             this.setState(index:selectedIndex);
              
    //         }
        

    render() {
        return (
            <div>
                <Carousel indicators={false} 
                // style={{width :'500px'}, {height :'400px'}}
                // activeIndex={this.state.index} onSelect={this.handleSelect}
                >
                <Carousel.Item  interval={2000}
                >
                    <img
                        className="d-block w-100"
                        src={this.props.bookimg}
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
            </div>
        )
    }
}

export default CarouselItem
