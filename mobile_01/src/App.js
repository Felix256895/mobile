import React, { Component } from 'react';
import {BrowserRouter as Router,Route,Switch} from 'react-router-dom';
import Home from './page/Home/Home';

class App extends Component {
  render() {
    return (
      <Router>
        <Switch>
            {/* <Route path='/' exact   component={Home}></Route> */}
            <Route  component={Home}></Route>
        </Switch>
      </Router>
    );
  }
}

export default App;
