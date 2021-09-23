import 'bootstrap/dist/css/bootstrap.min.css';
import React, { Component } from 'react';
import BestBooks from './BestBooks';
import axios from 'axios';
import BookFormModal from './components/BookFormModal';
import LoginButton from './components/LoginButton';
import LogoutButton  from './components/LogoutButton';
import { withAuth0 } from '@auth0/auth0-react';
import { Row } from 'react-bootstrap';
 import{ Image } from 'react-bootstrap';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      booksList: [],
      title: '',
      description: '',
      status: '',
      email: '',
      id: '',
      showUpdate: false
    }
  }
  componentDidMount = () => {
    axios.get(`${process.env.REACT_APP_BACKEND_URL}/get-books`).then(response => {
      this.setState({
        booksList: response.data
      })
    })
  }

   handleDeleteBook = (id) => {
    let config = {
      method: "DELETE",
      baseURL: `${process.env.REACT_APP_BACKEND_URL}`,
      url: `/delete-book/${id}`
        } 
        console.log(config);
    axios(config).then(res => {
      console.log(res.data)
    });
  }

  handleUpdateBook=(id,title,description,status,email)=>{
    this.setState({
      title: title,
      description: description,
      status: status,
      email: email,
      id:id,
      showUpdate:true
    })
  }

  handleUpdateForm=() =>{
    let config={
      method:"PUT",
      baseURL:process.env.REACT_APP_BACKEND_URL,
      url:`/update-book/${this.state.id}`,
      data:{
        title:this.state.title,
        description:this.state.description,
        status:this.state.status,
        email:this.state.email
      }
    }
    axios(config).then(res=>{
      this.setState({
        booksList:res.data
      })
    });

  }

  handleBookTitle = e => { this.setState({ title: e.target.value }) }

  handleBookDescripion = e => { this.setState({ description: e.target.value }) }

  handleBookStatus = e => { this.setState({ status: e.target.value }) }

  handleEmail = e => { this.setState({ email: e.target.value }) }

  handleSubmit = e => {
    e.preventDefault();
    let config = {
      method: "POST",
      baseURL: `${process.env.REACT_APP_BACKEND_URL}`,
      url: "/create-book",
      data: {
        title: this.state.title,
        description: this.state.description,
        status: this.state.status,
        email: this.state.email
      }
    }
    if (this.state.title && this.state.description && this.state.status && this.state.email) {
      axios(config).then(response => {
        this.setState({
          booksList: response.data
        })
      })
    }

  }

  render() {
    return (
      <>

{
          this.props.auth0.isAuthenticated?
          <>
          <LogoutButton/>
          
          <Image src={this.props.auth0.user.picture} alt="" roundedCircle />
          <h6> sign in by : {this.props.auth0.user.name}</h6>
          
          {
          !this.state.showUpdate?<>
           <BookFormModal
          handleBookTitle={this.handleBookTitle}
          handleBookDescripion={this.handleBookDescripion}
          handleBookStatus={this.handleBookStatus}
          handleEmail={this.handleEmail}
          handleSubmit={this.handleSubmit} 
          btnName={'Add Book'}/>
                  
          </>:
         <BookFormModal
          handleBookTitle={this.handleBookTitle}
          valueTitle={this.state.title}
          handleBookDescripion={this.handleBookDescripion}
          valueDescription={this.state.description}
          handleBookStatus={this.handleBookStatus}
          valueStatus={this.state.status}
          handleEmail={this.handleEmail}
          valueEmail={this.state.email}
          handleSubmit={this.handleUpdateForm}
          btnName={'Update Book'} />
       
        }


        <h2>My Essential Lifelong Learning &amp; Formation Shelf</h2>

        {this.state.booksList.length ?
          (this.state.booksList.map((book) => {
            return <BestBooks
              title={book.title}
              description={book.description}
              status={book.status}
              email={book.email}
              id={book._id}
              handleDeleteBook={this.handleDeleteBook}
              handleUpdateBook={this.handleUpdateBook}
            />
          }))
          : (<h3>No Books Found  </h3>)}

          
          </>:
          <LoginButton/>
        }





      </>

    )
  }
}
export default withAuth0(App);
