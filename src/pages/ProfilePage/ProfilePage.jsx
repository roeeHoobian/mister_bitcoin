
import { Component } from 'react'
import { UserService } from '../../services/UserService.js'
import { BitcoinService } from '../../services/BitcoinService.js'
import './ProfilePage.scss'

export class ProfilePage extends Component {
    state = {
        user: null,
        bitcoinRate: null,
    }
    async componentDidMount() {
        const bitcoinRate = await BitcoinService.getRate()
        this.setState({ user: UserService.getUser(), bitcoinRate })
    }
    render() {
        const { user, bitcoinRate } = this.state
        return(

        user && bitcoinRate &&
        <div className="userInfo" >
            <img src={"https://robohash.org/" + user._id} alt="" />
            <div className="user-data">
                <h3>Hello, {user.name}</h3>
                <p><img src="./coins.png" alt=""/> : {user.coins}</p>
                <p><img src="bitcoin.png" alt=""/> : {bitcoinRate}$</p>
            </div>
        </div>
        )
    }
}

