import React, { Component } from 'react';
import 'materialize-css/dist/css/materialize.min.css';
import { Route, BrowserRouter, Link } from 'react-router-dom';

import '../stylesheet/style.css';


import Portal from './portal/Portal';
import Landing from './Landing';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div>
          <Route exact path="/" component={Landing}/>
          <Route exact path="/Portal" component={Portal} />

        </div>
      </BrowserRouter>
    );
  }
}

export default App;
