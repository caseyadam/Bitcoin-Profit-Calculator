import React, { Component} from 'react'
// import ReactDOM from 'react-dom'
import DatePicker from 'react-datepicker'
import BitcoinImg from '../img/bitcoin_image.png'
// import moment from 'moment'

export default class Home extends Component {
  constructor () {
    super()
    this.state = {
      name: 'Initialize'
    }
  }
  render () {
    return (<section id='home'>
      <div className='container'>
        <div className="col-md-6">
          <img src={BitcoinImg} className="bitcoin-logo"/>
        </div>
        <div className="col-md-6">
          <h2>ENTER TRANSACTION</h2>

          <label>Bitcoin Amount</label>
        <input type="text" name="amount" onChange={this.props.onInputChange} value={this.props.globalState.cryptoAmount}/>

          <label>Date</label>
          <DatePicker selected={this.props.globalState.date}
          onChange={this.props.handleDateChange}/>

        <button class="submit-button" type="submit" onClick={this.props.checkProfits}>SUBMIT</button>
        </div>
      </div>

    </section>)
  }
}

const app = document.getElementById('app')
