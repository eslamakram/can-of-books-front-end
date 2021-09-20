import React, { Component } from 'react'
import { Form , Button } from 'react-bootstrap'

class BookFormModal extends Component {
    render() {
        return (
            <div>
                <Form onClick={this.props.handleSubmit}>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>ADD BOOK</Form.Label>
                        <Form.Control type="text" placeholder="Book Title"  onChange={this.props.handleBookInput}/>
                       </Form.Group>

                    <Form.Group className="mb-3" >
                        <Form.Label>Describe Book</Form.Label>
                        <Form.Control type="text" placeholder="enter breif overview" />
                    </Form.Group>
                    <Form.Group className="mb-3" >
                        <Form.Label>Book Status</Form.Label>
                        <Form.Control type="text" placeholder="enter status book" />
                    </Form.Group>
                    <Form.Group className="mb-3" >
                        <Form.Label>email</Form.Label>
                        <Form.Control type="email" placeholder="enter your email" />
                    </Form.Group>
                    <Button variant="primary" type="submit">
                        Add Book
                    </Button>
                </Form>

            </div>
        )
    }
}

export default BookFormModal
