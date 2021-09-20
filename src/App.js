import 'bootstrap/dist/css/bootstrap.min.css';
import { Component } from 'react';
import BestBooks from './BestBooks';
import axios from 'axios';

class App extends Component {
  constructor(props){
    super(props);
    this.state={
      data:[]
    }
  }
  componentDidMount=()=>{
    axios.get(`${process.env.REACT_APP_BACKEND_URL}/get-books`).then(response=>{
      this.setState({
        data:response.data
      })
    })
  }

  render(){
  return (
    <>
    
    

<h2>My Essential Lifelong Learning &amp; Formation Shelf</h2>

{this.state.data.length ?  <BestBooks  booksData={this.state.data}  />
 :   <h3>No Books Found  </h3>}

   
    </>
   
  )
  }
}

export default App;
