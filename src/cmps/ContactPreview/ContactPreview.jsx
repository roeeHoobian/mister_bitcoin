
import React from 'react'
import { Link, NavLink } from 'react-router-dom';
import contactImg from '../../assets/img/icons/contact.png'
import './ContactPreview.scss'



export default  function ContactPreview({ contact }) {

    return (
        <NavLink to={`/contact/${contact._id}`}>
        <div className="contacts-list-container" >
            <img src={"https://robohash.org/" + contact._id} alt="" />
            <div className="contact-info">
            <p>{contact.name}</p>
            <p className="contact-phone">{contact.phone}</p>
            </div>
        </div>
        </NavLink>
    )
}

