import ContactService from '../../services/ContactService.js'
import React, { Component ,useState, useEffect} from 'react'
import ContactList from '../../cmps/ContactList/ContactList.jsx';
import './ContactPage.scss'
import { connect } from 'react-redux';
import { loadContacts } from '../../store/actions/contactActions.js';
import {ContactFilter} from '../../cmps/ContactFilter/ContactFilter.jsx';

class _ContactPage extends Component {
  state = {
      filterBy:''
  }
    componentDidMount() {
        this.props.loadContacts(this.state.filterBy)
    }
    onSetFilter = (filterBy)=>{
        this.setState({filterBy},()=>this.props.loadContacts(filterBy))
    }
  
    onAddContact = () => {
        this.props.history.push('/contact/edit')
    }
    render() {
        var { contacts } = this.props
        if (!contacts) return <div>Loading...</div>
        else return (
            <div className="contact-page-container">
                <ContactFilter onSetFilter={this.onSetFilter}/>
                <img src="./plus.png" className="add-contact-btn" onClick={this.onAddContact} alt="" />
                <ContactList contacts={contacts} />
            </div>
        )
    }
}

function mapStateToProps(state) {
    return {
        contacts: state.contacts
    }
}
const mapDispatchToProps = {
    loadContacts
}
export const ContactPage = connect(mapStateToProps, mapDispatchToProps)(_ContactPage)
