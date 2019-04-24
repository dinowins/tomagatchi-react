import React, { Component } from 'react';
import Header from './Header';
import { Switch, Route } from 'react-router-dom';
import Main from './Main';
import Error404 from './Error404';

class App extends React.Component{

  constructor(props) {
    super(props);
    this.state = {
      main: {
        food: 100,
        mood: 100,
        sleep: 100
      }
    }
    this.decrease = this.decrease.bind(this);

  }

  componentDidMount() {
    this.waitTimeUpdateTimer = setInterval(() => {
      this.decrease();

    }, 1000)
  }

  componentWillUnmount() {
    clearInterval(this.waitTimeUpdateTimer);
  }

  add(increase) {
    let mood = this.state.main.mood;
    let sleep = this.state.main.sleep;
    let food = this.state.main.food;
    if(increase == "mood") {
      mood = mood + 5;
    } else if(increase == "sleep") {
      sleep = sleep + 5;
    } else if(increase == "food") {
      food = food + 5;
    }
    this.setState({
      main: {
        mood: mood,
        food: food,
        sleep: sleep
      }
    })
  }

  decrease() {
    let newFood = Object.assign({}, this.state.main.food);
    let mood = this.state.main.mood - 0.5;
    let sleep = this.state.main.sleep - 0.5;
    let food = this.state.main.food - 0.5;
    if(this.state.main.food <= 0 || this.state.main.mood <= 0 || this.state.main.sleep <= 0) {
      clearInterval(this.waitTimeUpdateTimer);
    }
    console.log(mood);
    this.setState({
      main: {
        mood: mood,
        food: food,
        sleep: sleep
      }
    })
  }




  render() {
    return (
      <div>
        <Header/>
        <Switch>
          <Route path='/' render={()=><Main main={this.state.main} />} />
          <Route component={Error404}/>
        </Switch>
        <h1 style={{height: '50px'}}></h1>
        <button onClick={() => {this.add('food')}}>Food</button>
        <button onClick={() => {this.add('sleep')}}>Sleep</button>
        <button onClick={() => {this.add('mood')}}>Mood</button>
      </div>
    );

  }
}

export default App;
