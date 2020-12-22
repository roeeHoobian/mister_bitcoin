
import React, { Component } from 'react'

import './ContactFilter.scss'

export class ContactFilter extends Component {
  
    // componentDidUpdate(prevState){
    //     if(prevState.filterBy !== this.state.filterBy){
    //         console.log(this.props);
    //         this.props.onLoadContacts(this.state.filterBy.term)
            
    //     }
    // }
    render() {
        return (
            <div className="contact-filter">
              <span>🔎</span><input type="text" placeholder="" onChange={(ev) => this.props.onSetFilter(ev.target.value)} />
            </div>
        )
    }
}

