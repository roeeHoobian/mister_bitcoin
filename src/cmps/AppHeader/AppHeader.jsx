import './AppHeader.scss'
import { NavLink } from "react-router-dom"

export function AppHeader(props) {
    return (
        <div className="app-header">
            <img src="./logo.png" alt=""/>
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
