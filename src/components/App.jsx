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

  decrease() {
    let newFood = Object.assign({}, this.state.main.food);
    let mood = this.state.main.mood - 0.5;
    let sleep = this.state.main.sleep - 0.5;
    let food = this.state.main.food - 0.5;
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
      </div>
    );

  }
}

export default App;
