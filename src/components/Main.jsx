import React, {Component} from 'react';
import Stats from './Stats';
import PropTypes from "prop-types";



class Main extends React.Component {

  constructor() {
    super();
    this.state = {
      name: PropTypes.string,
      foodLevel: PropTypes.number,
      playLevel: PropTypes.number,
      sleepLevel: PropTypes.number
    };
  }

  startLevels() {
    this.state.name = 'George';
    this.state.foodLevel = 100;
    this.state.playLevel = 100;
    this.state.sleepLevel = 100;
  }
  check() {
    let that = this;
    setInterval(function() {
      console.log(that.state);
    }, 3000);
  }



  render() {
    this.startLevels();
    this.check();
    return (
      <div>
        <img src={require('../assets/images/Main.png')} alt='' />
        <h3>{this.state.name}</h3>
        <p>{this.state.foodLevel}</p>
        <p>{this.state.playLevel}</p>
        <p>{this.state.sleepLevel}</p>
        <Stats state={this.state}/>
      </div>

    );
  }
}



export default Main;
