import React from 'react';
import { Link } from 'react-router-dom';

const Landing = () => {
  return (
    <div>
      <div className="center-align container">
        <h2>Login</h2>
        <div className="row">
          <div className="col s3" />
          <div className="input-field col s6">
            <input id="first_name" type="text" className="validate" placeholder="Account ID" />
          </div>
        </div>
        <div className="row">
          <div className="col s3" />
          <div class="input-field col s6">
            <input id="password" type="password" className="validate" placeholder="Password" />
          </div>
        </div>
        <div className="row">
          <div className="col s3" />
          <div className="input-field col s6">
            <Link to="./Portal">
              <button id="submit" type="submit" className="waves-effect waves-light btn-large blue lighten-1">
                Login
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Landing;
