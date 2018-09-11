import React, { Component} from 'react'
import BannerBike from '../img/banner-bike.png'
import BannerBlock from '../img/banner-block.jpg'

export default class Home extends Component {
  constructor () {
    super()
    this.state = {
      name: 'Initialize'
    }
    this.checkGains = this.checkGains.bind(this)
  }
  //google adsense code
  // componentDidMount(){
  //   (adsbygoogle = window.adsbygoogle || []).push({});
  // }
  //end adsense
  checkGains(){
    const {percent} = this.props.globalState.totalStatus
    if(this.props.globalState.status == 'gain'){
      return `You made ${percent}% profit`
    } else {
      return `You lost ${percent}% of your initial investment`
    }
  }
  render () {
    const {percent, newCP, newSP} = this.props.globalState.totalStatus
    return (<section id="results">
      <div className="container">
        <div className="col-md-12">
          <div className="ads">
            <img src={BannerBike} alt="biking ad" class="ads-top"/>
            <ins className="adsbygoogle"
                  style={{"display" : "block"}}
                  data-ad-client="ca-pub-xxxxxxxxxx"
                  data-ad-slot="xxxxxxxxxx"
                  data-ad-format="auto">
            </ins>
          </div>
        </div>
        <div className="col-md-12">
          <h3>Your ${newCP} investment is now </h3>
        <h1>${newSP}</h1>
        <h4>{this.checkGains()}</h4>
        <a href="#" className="main-btn active">
          Create Account Ipsum
        </a>
        <a href="#" className="main-btn" onClick={this.props.goBack}>
          Check Another Transaction
        </a>

        </div>
        <div className="col-md-12">
          <div className="ads">
            GOOGLE ADSENSE HERE
            <img src={BannerBlock} alt="biking ad" class="ads-bottom"/>
            <ins className="adsbygoogle"
                  style={{"display" : "block"}}
                  data-ad-client="ca-pub-xxxxxxxxxx"
                  data-ad-slot="xxxxxxxxxx"
                  data-ad-format="auto"></ins>
          </div>
        </div>
      </div>
    </section>)
  }
}

const app = document.getElementById('app')
