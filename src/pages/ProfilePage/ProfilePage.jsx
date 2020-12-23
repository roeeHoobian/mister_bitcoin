
import { Component } from 'react'
import { UserService } from '../../services/UserService.js'
import { BitcoinService } from '../../services/BitcoinService.js'
import './ProfilePage.scss'
import coinsImg from '../../assets/img/icons/coins.png'
import bitcoinImg from '../../assets/img/icons/bitcoin.png'
import { connect } from 'react-redux';
import {loadUser} from '../../store/actions/userActions.js'
import {MoveList} from '../../cmps/MoveList/MoveList'


class _ProfilePage extends Component {
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
                <p><img src={coinsImg} alt=""/> : {user.coins}</p>
                <p><img src={bitcoinImg} alt=""/> : {bitcoinRate*user.coins}$</p>
            </div>
       <MoveList moves={user.moves}/>
        </div>
        )
    }
}
function mapStateToProps(state) {
    return {
        user: state.user
    }
}
const mapDispatchToProps = {
    loadUser
}
export const ProfilePage = connect(mapStateToProps, mapDispatchToProps)(_ProfilePage)