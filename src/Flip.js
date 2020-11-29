import React, {Component} from 'react'
import './Flip.css'
import Coin from './Coin'
import dimeH from './images/dime-heads.png'
import dimeT from './images/dime-tails.png'
import quarterH from './images/quarter-heads.png'
import quarterT from './images/quarter-tails.png'
import happyFace from './images/happy-face.png'
import happyFace2 from './images/happy-face2.png'

class Flip extends Component{
    static defaultProps = {
        
    }
    constructor(props){
        super(props);
        this.state = {
            flips: 0,
            heads: 0,
            tails: 0,
            headsOrTails: true
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
        
    }
    handleClick = () => {
        this.flip()
    }
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
            default:
                var heads = happyFace;
                var tails = happyFace2;
        }
        return(
            <div className='Flip'>
                <Coin 
                    coin={this.props.coin} 
                    headsOrTails={this.state.headsOrTails}
                    heads={heads}
                    tails={tails}     
                />
                <span>Out of {this.state.flips} <b>flips</b> there have been {this.state.heads} <b>heads</b> and {this.state.tails} <b>tails</b></span>
                <button onClick={this.handleClick}>Flip</button>
            </div>
        )
    }
}

export default Flip