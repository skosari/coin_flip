import React, {Component} from 'react'
import './Coin.css'




class Coin extends Component{

    render(){

        return(
            <div className='Coin'>
                <h3>{this.props.coin}</h3>
                {this.props.headsOrTails ? 
                  <img src={this.props.heads} alt='heads' width="150px"/> :
                  <img src={this.props.tails} alt='tails' width="150px"/>
                }
                
            </div>
        )
    }
}

export default Coin