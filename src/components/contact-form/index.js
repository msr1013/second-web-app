import React, { Component } from 'react'
import './contact.css'
import Button from '../../widgets/button'
class Form extends Component {
    state = {
        name: ''
    }

    handleNameChange = (e) => {

    }

    render() {

        return (
            <div id="contact-form">
                <h2>{this.state.name}</h2>
                <h1>Contact Us</h1>
                <form>
                    <input type="text" name="name" placeholder="Name" onChange={this.handleNameChange} />
                    <input type="text" name="email" placeholder="Email" />
                    <input type="text" name="phone" placeholder="Phone" />
                    <textarea name="message" placeholder="Message"></textarea>
                    <Button title="Submit"></Button>
                </form>

            </div>

        )
    }
}

export default Form