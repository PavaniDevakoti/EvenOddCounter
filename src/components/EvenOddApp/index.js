import {Component} from 'react'
import './index.css'

class EvenOddApp extends Component {
  state = {count: 0}

  OnIncrement = () => {
    const number = Math.ceil(Math.random() * 100)
    this.setState(prevState => ({
      count: prevState.count + number,
    }))
  }

  render() {
    const {count} = this.state
    let isEven = true
    if (count % 2 === 0) {
      isEven = true
    } else {
      isEven = false
    }

    return (
      <div className="main-card">
        <div className="card-container">
          <h1 className="heading">Count {count}</h1>
          {isEven ? (
            <p className="paragraph">Count is Even</p>
          ) : (
            <p className="paragraph">Count is Odd</p>
          )}

          <button className="button" type="button" onClick={this.OnIncrement}>
            Increment
          </button>
          <p className="para">*Increase By Random Number Between 0 to 100</p>
        </div>
      </div>
    )
  }
}

export default EvenOddApp
