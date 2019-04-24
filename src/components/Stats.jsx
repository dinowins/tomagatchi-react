import React from 'react';
import PropTypes from 'prop-types';



class Stats extends React.Component {

  constructor(props) {
    super(props);
    this.state = props.state;
  }

  componentDidMount() {
    this.levelsDecrease();
    console.log("This is working")
  }

  componentWillUnmount() {
    clearInterval(this.levelsDecrease());
  }



  levelsDecrease() {
    let that = this;
    setInterval(function() {
      let foodLevel = that.state.foodLevel - 1;
      let sleepLevel = that.state.sleepLevel - 1;
      let playLevel = that.state.playLevel - 1;
      that.setState({
        foodLevel: foodLevel,
        sleepLevel: sleepLevel,
        playLevel: playLevel
      });
    }, 10000);
  }

  render() {
    let styling = {
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'space-around',
      alignItems: 'space-around',
      zIndex: '1',
      width: '300px',
      marginTop: '7px'
    }

    let stats = {
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'space-around'
    }

    let name = {
      textAlign: 'center'
    }

    let statNames = {
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'space-around'
    }

    return (
      <div style ={styling}>
        <div style={name}>
          <h3>{this.state.name}</h3>
        </div>
        <div style={statNames}>
          <p>Food</p>
          <p>Play</p>
          <p>Sleep</p>

        </div>
        <div style={stats}>
          <p>{this.state.foodLevel}</p>
          <p>{this.state.playLevel}</p>
          <p>{this.state.sleepLevel}</p>
        </div>
      </div>
    );
  }
}

export default Stats;
