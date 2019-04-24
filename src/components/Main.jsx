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
    console.log(this.state);
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
      if(that.state.foodLevel == 0 || that.state.playLevel == 0 || that.state.sleepLevel == 0) {
        clearInterval();
        console.log("Is Dead");
      }
    }, 3000);
  }


  eat(){
    console.log(this.state);
    let newfoodLevel = this.state.foodLevel + 5;
    this.setState({
      foodLevel: newfoodLevel
    });
    console.log(this.state.foodLevel)
  }

  sleep() {

  }
  play() {

  }
  power() {

  }

  render() {
    let that = this;
    this.startLevels();
    this.check();

    let statsStyle ={
      zIndex: '-1',
    }

    let body = {
      margin: '0 auto',
      display: 'flex',
      justifyContent: 'center',
      // alignItems: 'center'
    }

    let image = {
      position: 'absolute',
      zIndex: '-1',
      display: 'flex',
      justifyContent: 'center',
      // alignItems: 'center',
    }
    let ninja = {
      width: '150px',
      height: '150px',
      display: 'flex',
      justifyContent: 'center',
      marginLeft: '25px',
      marginTop: '15px'
    }

    let main = {
      width: '200px',
      height: '300px',
      margin: '0 auto'
    }

    let buttons = {
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'space-between',
      width: '215px',
      marginRight: '100px',

    }

    let button = {
      marginTop: '85px'
    }




    return (
      <div style={main}>
        <div style={body}>
          <img src={require('../assets/images/Main.png')} alt='' style={image} />
          <Stats state={this.state} style={statsStyle}/>
        </div>
        <img src={require('../assets/images/ninja.png')} alt='' style={ninja} />
        <div style={buttons}>
          <button style={button} onClick={() => {that.eat()}}></button>
          <button style={button} onClick={that.sleep}></button>
          <button style={button} onClick={that.play}></button>
          <button style={button} onClick={that.power}></button>

        </div>
    </div>

    );
  }
}



export default Main;
