import './AppHeader.scss'
import { NavLink } from "react-router-dom"
import logo from '../../assets/img/logo.png'
export function AppHeader(props) {
    return (
        <div className="app-header">
            <img src={logo} alt=""/>
            <nav className="main-nav">
                <ul>
                    <li>
                        <NavLink exact to="/" activeClassName="active">Home</NavLink>
                    </li>
                  
                    <li>
                        <NavLink to="/contacts" activeClassName="active">Contacts</NavLink>
                    </li>
                    <li>
                        <NavLink to="/statistics" activeClassName="active">Statistics</NavLink>
                    </li>
                    <li>
                        <NavLink to="/profile" activeClassName="active">Profile</NavLink>
                    </li>
                   
                </ul>
            </nav>
        </div>
    )
}
