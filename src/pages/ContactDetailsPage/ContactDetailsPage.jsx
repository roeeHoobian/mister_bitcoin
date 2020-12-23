
import { Link } from "react-router-dom";
import ContactService from '../../services/ContactService.js'
import './ContactDetailsPage.scss'
import React, { Component } from 'react'
import deleteImg from '../../assets/img/icons/delete.png'
import editImg from '../../assets/img/icons/edit.png'
import backImg from '../../assets/img/icons/back.png'
import {TransferFund} from '../../cmps/TransferFund/TransferFund'

export default class ContactDetailsPage extends Component {
    state = {
        contact: null
    }

    async componentDidMount() {
        const { id } = this.props.match.params
        const contact = await ContactService.getContactById(id)
        this.setState({ contact })
    }
    deleteContact = async () => {
        const { id } = this.props.match.params
        await ContactService.deleteContact(id)
        this.props.history.push('/contacts')
    }
    render() {
        const { contact } = this.state
        if (!contact) return <div>Loading...</div>
        return (
            <section className="contact-details">
            <div className="contact-details-container">
                <img src={backImg} alt="" className="back-btn" onClick={() => this.props.history.goBack()} />
                <img src={"https://robohash.org/" + contact._id} alt="" />
                <p>{contact.name}</p>
                <p>{contact.phone}</p>
                <p>{contact.email}</p>
                <Link to={`/contact/edit/${contact._id}`}><img src={editImg} alt="" className="edit-btn" /></Link>
                <img src={deleteImg} alt="" className="delete-btn" onClick={this.deleteContact} />
            </div>
            <TransferFund contact={contact} props={this.props}/>
            </section>
        )
    }
}



