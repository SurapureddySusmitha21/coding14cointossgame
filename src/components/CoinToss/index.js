// Write your code here
import {Component} from 'react'
import './index.css'

const headImage = 'https://assets.ccbp.in/frontend/react-js/heads-img.png'
const tailImage = 'https://assets.ccbp.in/frontend/react-js/tails-img.png'

class CoinToss extends Component {
  state = {heds: 0, tails: 0, image: headImage}

  clickTheTosscoin = () => {
    const randomCoin = Math.floor(Math.random() * 2)

    if (randomCoin === 0) {
      this.setState({image: headImage})
      this.setState(prevState => ({heds: prevState.heds + 1}))
    } else {
      this.setState({image: tailImage})
      this.setState(prevState => ({tails: prevState.tails + 1}))
    }
  }

  render() {
    const {heds, tails, image} = this.state
    const total = tails + heds

    return (
      <>
        <div className="bg-container">
          <div className="coin-container">
            <h1 className="heading">Coin Toss Game</h1>
            <p className="paragraph">Heads (or) Tails</p>
            <img src={image} alt="toss result" className="image-url" />
            <button
              className="button"
              type="button"
              onClick={this.clickTheTosscoin}
            >
              Toss Coin
            </button>
            <div className="count-container">
              <p className="count-paragraph">Total: {total}</p>
              <p className="count-paragraph">Heads: {heds}</p>
              <p className="count-paragraph">Tails: {tails}</p>
            </div>
          </div>
        </div>
      </>
    )
  }
}

export default CoinToss
