import React, { Component } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Form, Button } from 'react-bootstrap'

class BookFormModal extends Component {
    render() {
        return (
            <div>
                <Form onClick={this.props.handleSubmit} >
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>BOOK Title</Form.Label>
                        <input type="text" placeholder="Book Title" value={this.props.valueTitle} onChange={this.props.handleBookTitle} />
                    </Form.Group>

                    <Form.Group className="mb-3" >
                        <Form.Label>Describe Book</Form.Label>
                        <input type="text" placeholder="enter breif overview" value={this.props.valueDescription}  onChange={this.props.handleBookDescripion} />
                    </Form.Group>
                    <Form.Group className="mb-3" >
                        <Form.Label>Book Status</Form.Label>
                        <input type="text" placeholder="enter status book" value={this.props.valueStatus}  onChange={this.props.handleBookStatus} />
                    </Form.Group>
                    <Form.Group className="mb-3" >
                        <Form.Label>email</Form.Label>
                        <input type="email" placeholder="enter your email" value={this.props.valueEmail} onChange={this.props.handleEmail} />
                    </Form.Group>
                    <Button variant="primary" type="submit">
                         {this.props.btnName}
                    </Button>
                </Form>

            </div>
        )
    }
}

export default BookFormModal
