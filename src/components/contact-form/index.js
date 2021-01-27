import React, { Component } from 'react'
import './contact.css'
import Button from '../../widgets/button'
class Form extends Component {
    state = {
        name: '',
        email: '',
        phone: '',
        message: ''
    }

    // handleNameChange = (e) => {
    //     this.setState({
    //         name: e.target.value
    //     })
    // }

    // handleEmailChange = (e) => {
    //     this.setState({
    //         email: e.target.value
    //     })
    // }
    // handlePhoneChange = (e) => {
    //     this.setState({
    //         phone: e.target.value
    //     })
    // }

    // handleMessageChange = (e) => {
    //     this.setState({
    //         message: e.target.value
    //     })
    // }

    handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    handleFormSubmit = (e) => {
        e.preventDefault()
        console.log(this.state)
    }
    render() {

        return (
            <div id="contact-form">

                <h1>Contact Us</h1>
                <form onSubmit={this.handleFormSubmit}>
                    <input type="text" name="name" placeholder="Name" onChange={this.handleChange} />
                    <input type="text" name="email" placeholder="Email" onChange={this.handleChange} />
                    <input type="text" name="phone" placeholder="Phone" onChange={this.handleChange} />
                    <textarea name="message" placeholder="Message" onChange={this.handleChange}></textarea>
                    <Button type="submit" title="Submit" />
                </form>

            </div>

        )
    }
}

export default Form