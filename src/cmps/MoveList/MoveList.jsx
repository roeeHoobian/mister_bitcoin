
import { Component } from 'react'

import './MoveList.scss'

export class MoveList extends Component {
componentDidMount(){
    console.log(this.props);
}
    render() {
return(
    <section>
    <h2>Your Moves:</h2>
    {this.props.moves.map((move)=>{
        
       return <div className="move" key={move.at}>
        <p><span className="bold">To:</span> {move.to}</p>
        <p><span className="bold">Amount:</span> {move.amount}</p>
        <p><span className="bold">At:</span> {move.at}</p>
        </div>
    })}
    </section>
)
    }
}

