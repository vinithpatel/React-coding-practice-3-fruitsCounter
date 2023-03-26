import {Component} from 'react'
import './index.css'

class FruitsCounter extends Component {
  state = {mangoCount: 0, bananaCount: 0}

  onEatMango = () =>
    this.setState(prevState => ({mangoCount: prevState.mangoCount + 1}))

  onEatBanana = () =>
    this.setState(prevState => ({bananaCount: prevState.bananaCount + 1}))

  render() {
    const {mangoCount, bananaCount} = this.state
    return (
      <div className="bg-container">
        <div className="info-container">
          <h1 className="main-heading">
            Bob ate
            <span className="fruits-count"> {mangoCount} </span> mangoes
            <span className="fruits-count"> {bananaCount} </span> bananas
          </h1>
          <div className="fruits-container">
            <div className="fruit-card">
              <img
                className="fruit-image"
                src="https://assets.ccbp.in/frontend/react-js/mango-img.png"
                alt="mango"
              />
              <button
                className="eat-button"
                type="button"
                onClick={this.onEatMango}
              >
                Eat Mango
              </button>
            </div>
            <div className="fruit-card">
              <img
                className="fruit-image"
                src="https://assets.ccbp.in/frontend/react-js/banana-img.png"
                alt="banana"
              />
              <button
                className="eat-button"
                type="button"
                onClick={this.onEatBanana}
              >
                Eat Banana
              </button>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default FruitsCounter
