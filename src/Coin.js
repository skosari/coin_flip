import React, {Component} from 'react'
import './Coin.css'
import dimeH from './images/dime-heads.png'
import dimeT from './images/dime-tails.png'
import quarterH from './images/quarter-heads.png'
import quarterT from './images/quarter-tails.png'



class Coin extends Component{

    render(){
        switch (this.props.coin){
            case 'quarter':
                var heads = quarterH
                var tails = quarterT
                break;
            case 'dime':
                var heads = dimeH
                var tails = dimeT
                break;
        }
        return(
            <div className='Coin'>
                <h3>{this.props.coin}</h3>
                {this.props.headsOrTails ? 
                  <img src={heads} alt='heads' width="150px"/> :
                  <img src={tails} alt='tails' width="150px"/>
                }
                
            </div>
        )
    }
}

export default Coin