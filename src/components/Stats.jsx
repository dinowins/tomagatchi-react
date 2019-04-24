import React from 'react';
import PropTypes from 'prop-types';



class Stats extends React.Component {

  state;
  constructor(props) {
    super(props);
    this.state = props.state;
    console.log(this.state);
  }
  levelsDecrease() {
    let that = this;
    setInterval(function() {
      that.state.foodLevel--;
      that.state.sleepLevel--;
      that.state.playLevel--;
    }, 3000);
  }

  render() {
    this.levelsDecrease();
    return (
      <div>
        <h3>Testing</h3>
      </div>


    );
  }
}

export default Stats;
