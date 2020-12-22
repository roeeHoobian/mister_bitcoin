
import { Component } from 'react'
import './StatisticsPage.scss'
import { BitcoinService } from '../../services/BitcoinService.js'
import Chart from '../../cmps/chart/chart'


export class StatisticsPage extends Component {
    state = {
        bitcoinRates: null,
        tradeVolumes:null
    }
    componentDidMount() {
        this.getBitcoinRates()
        this.getTradeVolume()
    }
   async getBitcoinRates(){
        const bitcoinRates = await BitcoinService.getMarketPrice()
        this.setState({bitcoinRates})

    }
   async getTradeVolume(){
        const tradeVolumes = await BitcoinService.getTradesVolumes()
        this.setState({tradeVolumes})

    }
    render() {
        var { bitcoinRates , tradeVolumes} = this.state
        if (!bitcoinRates || !tradeVolumes) return <div>Loading...</div>
        return (
            <div className="statistics-container">
                <Chart bitcoinRates={bitcoinRates}  type="line" title={'Bitcoin bitcoinRates(USD)'}/>
                <Chart bitcoinRates={tradeVolumes}  type="line" title={'Exchange Trade Volume (USD)'}/>
            </div>
        )
    }
}

