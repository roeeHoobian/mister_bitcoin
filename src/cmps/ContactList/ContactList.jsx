import React from 'react'
import ContactPreview from '../../cmps/ContactPreview/ContactPreview'
import './ContactList.scss';

export default function ContactList({ contacts }) {
    return (
        <div>
            <ul className="contact-list">
                {contacts.map((currContact) => {
                    return <li key={currContact.name}><ContactPreview contact={currContact} /></li>
                    //   return  <li key={contact._id}> <img src={contactImg} alt=""/>{contact.name}</li>
                })}
            </ul>
        </div>
    )
}

