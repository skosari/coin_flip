import React, {Component} from 'react'
import './Flip.css'
import Coin from './Coin'

class Flip extends Component{
    static defaultProps = {
        
    }
    constructor(props){
        super(props);
        this.state = {
            flips: 0,
            heads: 0,
            tails: 0,
            headsOrTails: true,
            quarter: {heads: './images/quarter-heads.png', tails: './images/qaurter-tails.png'},
            dime: {heads: './images/dime-heads.png', tails: './images/dime-tails.png'}
        }
        
    }
    flip(){
        if (Math.floor(Math.random()*2) === 0){
            this.setState(x => ({
                flips: x.flips + 1,
                heads: x.heads + 1,
                // tails: x.tails,
                headsOrTails: true
            }))
        } else {
            this.setState(x => ({
                flips: x.flips + 1,
                // heads: x.heads,
                tails: x.tails + 1,
                headsOrTails: false
            })) 
        }
        
        return console.log
    }
    handleClick = () => {
        this.flip()
    }
    render(){

        return(
            <div className='Flip'>
                <Coin 
                    coin={this.props.coin} 
                    headsOrTails={this.state.headsOrTails}     
                />
                <span>Out of {this.state.flips} <b>flips</b> there have been {this.state.heads} <b>heads</b> and {this.state.tails} <b>tails</b></span>
                <button onClick={this.handleClick}>Flip</button>
            </div>
        )
    }
}

export default Flip