import React, { Component } from 'react';
import 'materialize-css/dist/css/materialize.min.css';
import { Route, BrowserRouter, Link } from 'react-router-dom';


import Dashboard from './Dashboard';
import Navbar from './Navbar';
import Landing from './Landing';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div>
          <Navbar />
          <Route exact path="/" component={Landing}/>
          <Route exact path="/Dashboard" component={Dashboard} />

          <div className="container">
            <Link to="./">L</Link>
            <Link to="./Dashboard">D</Link>
          </div>

        </div>
      </BrowserRouter>
    );
  }
}

export default App;
