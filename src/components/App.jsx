import React from 'react';
import Header from './Header';
import { Switch, Route } from 'react-router-dom';
import Main from './Main';
import Error404 from './Error404';

function App(){
  return (
    <div>
      <Header/>
      <Switch>
        <Route component={Main} path='/' />
        <Route component={Error404}/>
      </Switch>
      <h1 style={{height: '50px'}}></h1>
    </div>
  );
}

export default App;
