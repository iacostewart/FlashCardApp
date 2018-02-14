import React, { Component } from 'react';
import Auth from './auth/Auth';
import SiteBar from './home/Navbar';
import Splash from './home/Splash';
import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom';

class App extends Component {
  constructor() {
    super();
    this.state = {
      sessionToken: ''
    }

    this.setSessionState = this.setSessionState.bind(this)
  }

  setSessionState(token) {
    localStorage.setItem('token', token)
    this.setState({ sessionToken: token })
  }

  render() {
    return (
      <Router>
        <div>
          <SiteBar />

          <Route path="/auth" exact={true} >
            <Auth setToken={this.setSessionState} />
          </Route>
          <Route path='/' exact={true} component={Splash} />
        </div>
      </Router>

    );
  }
}

export default App;
