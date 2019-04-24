import React, { Component } from 'react';
import PropTypes from "prop-types";


class Main extends React.Component {
  constructor(props) {
    super(props);
    this.props = props;
  }




  render() {
    return (
      <div><h2>Food: {this.props.main.food}</h2><h2>Sleep: {this.props.main.sleep}</h2><h2>Mood: {this.props.main.mood}</h2>



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
