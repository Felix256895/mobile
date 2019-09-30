import React, { Component } from 'react';
import { BrowserRouter as Router,Route,Switch,Redirect } from 'react-router-dom';
import asyncComponent from '@/utils/asyncComponent';
import Navbar from '@/components/Navbar';

const Home=asyncComponent(()=>import('@/pages/Home'));
const Main=asyncComponent(()=>import('@/pages/Main'));

class App extends Component {
  render() {
    return (
        <Router>
          <Navbar />
          <Switch>
            <Route path='/' exact component={Home} />
            <Route path='/main' component={Main} />
            <Redirect to='/' />
          </Switch>
        </Router>
    );
  }
}

export default App;
