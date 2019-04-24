import React, { Component } from 'react';
import PropTypes from "prop-types";


function Main(props) {
  console.log(props.main);
  return (
    <div>{props.main.food}</div>

  );
}
// Main.propTypes = {
//   decreaseFood: PropTypes.func,
//   decreaseSleep: PropTypes.func,
//   decreaseMood: PropTypes.func
// }


export default Main;
