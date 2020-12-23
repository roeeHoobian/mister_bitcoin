
import { Component } from 'react'
import { UserService } from '../../services/UserService'
// import {loadUser} from '../../store/actions/userActions.js'
// import { connect } from 'react-redux';
import './SignupPage.scss'

export class SignupPage extends Component {
    state = {
        user: {
            name: ''
        }
    }
   
     setUser= (name=null)=> {
        UserService.signup(name)
        this.props.history.push('/profile')
    }
    render() {
        return (
            <div className="signup-container">
                <h2>Please Enter You Name</h2>
                <input type="text"  onChange={(ev) =>this.setState({user:{name:ev.target.value}})} />
                <button onClick={()=>this.setUser(this.state.user.name)}>Start Trading</button>
            </div>
        )
    }
}
// function mapStateToProps(state) {
//     return {
//         user: state.user
//     }
// }
// const mapDispatchToProps = {
//     loadUser
// }
// export const SignupPage = connect(mapStateToProps, mapDispatchToProps)(_SignupPage)
