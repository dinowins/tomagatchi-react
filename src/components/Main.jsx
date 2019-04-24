import React, { Component } from 'react';
import PropTypes from "prop-types";


class Main extends React.Component {
  constructor(props) {
    super(props);
    this.props = props;
  }

  render() {

    let body = {
      margin: '0 auto',
      width: '600px',
      height: '600px',
      display: 'flex',
      alignItems: 'center',
      flexDirection: 'column'

    }

    let image = {
      width: '400px',
      position: 'absolute',
      zIndex: '-1'

    }

    let stats = {
      width: '200px',
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'space-between',
      height: '10px',

    }

    let statNames = {
      width: '200px',
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'space-between'
    }

    let allStats = {
      marginLeft: '10px',
      marginTop: '60px'
    }

    let h2 = {
      height: '10px'
    }

    let ninja = {
      marginTop: '40px',
      width: '200px',
      height: '200px'
    }




    return (
      <div style={body}>
        <img src={require('../assets/images/Main.png')} style={image}></img>
        <div style={allStats}>
          <div style={statNames}>
            <h2 style={h2}>Food</h2>
            <h2 style={h2}>Sleep</h2>
            <h2 style={h2}>Mood</h2>
          </div>
          <div style={stats}>
            <h2 style={h2}> {this.props.main.food}</h2>
            <h2 style={h2}>{this.props.main.sleep}</h2>
            <h2 style={h2}>{this.props.main.mood}</h2>
          </div>
        </div>

        <img src={require('../assets/images/ninja.png')} style={ninja}/>

    </div>
  );
  }
}
// Main.propTypes = {
//   decreaseFood: PropTypes.func,
//   decreaseSleep: PropTypes.func,
//   decreaseMood: PropTypes.func
// }


export default Main;
