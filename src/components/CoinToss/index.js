// Write your code here
import {Component} from 'react'
import './index.css'

const headImage = 'https://assets.ccbp.in/frontend/react-js/heads-img.png'
const tailImage = 'https://assets.ccbp.in/frontend/react-js/tails-img.png'
class CoinToss extends Component {
  state = {headUrl: headImage, headCount: 0, tailCount: 0}

  getClickTossCoin = () => {
    const {headCount, tailCount} = this.state
    const tossResult = Math.floor(Math.random() * 2)
    let imgUrl = ''
    let laterHeadCount = headCount
    let laterFailsCount = tailCount

    if (tossResult === 0) {
      imgUrl = headImage
      laterHeadCount += 1
    } else {
      imgUrl = tailImage
      laterFailsCount += 1
    }
    this.setState({
      headUrl: imgUrl,
      headCount: laterHeadCount,
      tailCount: laterFailsCount,
    })
  }

  render() {
    const {headUrl, headCount, tailCount} = this.state
    const total = headCount + tailCount
    return (
      <>
        <div className="bg-container">
          <div className="coin-container">
            <h1 className="heading">Coin Toss Game</h1>
            <p className="paragraph">Heads (or) Tails</p>
            <img src={headUrl} className="URL" alt="toss result" />
            <button
              type="button"
              className="button"
              onClick={this.getClickTossCoin}
            >
              Toss Coin
            </button>
            <div className="count-container">
              <p className="count-paragraph">{`Total: ${total}`}</p>
              <p className="count-paragraph">{`Heads: ${headCount}`}</p>
              <p className="count-paragraph">{`Tails: ${tailCount}`}</p>
            </div>
          </div>
        </div>
      </>
    )
  }
}
export default CoinToss
