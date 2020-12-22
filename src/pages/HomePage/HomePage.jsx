
import React from 'react'

// import coinsImg from '../../assets/img/icons/coins.png'
import './HomePage.scss'

export default class HomePage extends React.Component {


    render() {
        // if (!user || !bitcoinRate) return <div>Loading...</div>
        return (
            
            <section className="home-page">
            <div className="header">
                <div className="header-info">
                    <h1>Bitcoin is an innovative payment network and a new kind of money.</h1>
                    <p>Bitcoin transactions are secured by military-grade cryptography. Nobody can take your money or make a payment on your behalf. Bitcoin can give you control over your money and a strong level of protection against many types of fraud.</p>
                    <button onClick={()=>this.props.history.push('/signup')}>Get Started</button>
                </div>
                <img src="./digital_currency.svg" alt=""/>
            </div>
            
           
            
            </section>
        )
    }
}

