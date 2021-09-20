import 'bootstrap/dist/css/bootstrap.min.css';
import { Component } from 'react';
import BestBooks from './BestBooks';
import axios from 'axios';
import BookFormModal from './components/BookFormModal';

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


  handleBookInput=e=>{
    
    this.setState({
      title:e.target.value
    })
   
  }

  handleSubmit=e=>{
    
      e.preventDefault();
      let config={
        method:"POST",
        baseURL:"http://localhost:8000",
        url:"/create-book",
        data:{
              title: this.state.title,
              description: this.state.description,
              status: this.state.status,
            email: this.state.email
        }
        
      }
      axios(config).then(response=>{
        this.setState({
          booksList:response.data
        })
      })
    
  }

  render(){
  return (
    <>
    
    <BookFormModal handleSubmit={this.handleSubmit} handleBookInput={this.handleBookInput}/>

<h2>My Essential Lifelong Learning &amp; Formation Shelf</h2>

{this.state.data.length ?  <BestBooks  booksData={this.state.data}  />
 :   <h3>No Books Found  </h3>}

   
    </>
   
  )
  }
}

export default App;
