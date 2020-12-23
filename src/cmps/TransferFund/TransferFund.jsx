
import { Component } from 'react'
import {UserService} from '../../services/UserService'
import ContactService from '../../services/ContactService'
import './TransferFund.scss'

export class TransferFund extends Component {
state={
    contact:null,
    amount:''
}
componentDidMount(){
    console.log(this.props);
    this.getContact()
}
async getContact(){
const contact = await ContactService.getContactById(this.props.contact._id)
console.log(contact);
this.setState({...this.state,contact})
}
 onTransfer(){
    //  console.log(this.state.contact,+this.state.amount);
UserService.addMove(this.state.contact,+this.state.amount)
console.log(this.props);
this.props.props.history.push('/profile')
}
    render() {
     return(
         <div>
         <h4>Please enter the amonunt of bitcoins to transfer</h4>
         <input type="number" value={this.state.amount} onChange={(ev)=>this.setState({...this.state,amount:ev.target.value})}/>
         <button onClick={()=>this.onTransfer()}>Transfer</button>
            
         </div>
     )
    }
}

