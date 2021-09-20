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
    axios.get(`${process.env.REACT_APP_BACKEND_URL}/books/`).then(response=>{
      this.setState({
        data:response.data
      })
    })
  }

  render(){
  return (
    <>
    { !this.state.data && <alert> The book collection is empty!</alert>}
    {this.state.data > 0 && this.state.data.map( book => {

   <BestBooks       title={book.title}
                    description={book.description}
                    status={book.status}
                    email={book.email} 
                         /> })}
    </>
   
  )
}
}

export default App;
