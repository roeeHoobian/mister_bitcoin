
import { Component } from 'react'
import { UserService } from '../../services/UserService'

import './SignupPage.scss'

export class SignupPage extends Component {
    state = {
        user: {
            name: ''
        }
    }
   
     setUser= (name=null)=> {
        UserService.setUser(name)
        if(name) {
            this.props.history.push('/profile')
        }
      
    }
    render() {
        return (
            <div>
                <h2>Please Enter You Name</h2>
                <input type="text"  onChange={(ev) =>this.setState({user:{name:ev.target.value}})} />
                <button onClick={()=>this.setUser(this.state.user.name)}>Start Trading</button>
            </div>
        )
    }
}

