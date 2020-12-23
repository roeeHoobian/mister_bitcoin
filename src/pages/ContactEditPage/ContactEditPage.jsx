
import React, { Component } from 'react'
import ContactService from '../../services/ContactService'
import './ContactEditPage.scss'
import backImg from '../../assets/img/icons/back.png'

export class ContactEditPage extends Component {
    state = {
        contact: {
            name: '',
            phone: '',
            email: ''

        }

    }
    async componentDidMount() {
        const { id } = this.props.match.params
        const contact = id ? await ContactService.getContactById(id) : await ContactService.getEmptyContact()
        this.setState({ contact })
    }
    handleChange = ({ target }) => {
        const field = target.name
        const value = target.value
        this.setState(prevState => ({ contact: { ...prevState.contact, [field]: value } }))
    }
    onSaveContact = async (ev) => {
        ev.preventDefault()
        await ContactService.saveContact({ ...this.state.contact })
        this.props.history.push('/contacts')
    }
    render() {
        const { name, phone, email } = this.state.contact
        return (
            <div className="contact-edit-container">
                <img src={backImg} alt="" className="back-btn" onClick={()=>this.props.history.goBack()}/>
            <form onSubmit={this.onSaveContact} className="edit-form-container">
                <div>
                <label>Name: </label>
                <input type="text" name="name" value={name} onChange={this.handleChange} />
                </div>
                <div>
                <label>Phone: </label>
                <input type="text" name="phone" value={phone} onChange={this.handleChange} />
                </div>
                <div>
                <label>Email: </label>
                <input type="text" name="email" value={email} onChange={this.handleChange} />
                </div>
                <button>Save</button>
            </form>
            </div>
        )
    }
}

