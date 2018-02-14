import React, { Component } from 'react';
import Auth from './auth/auth';

// import logo from './logo.svg';
// import './App.css';

class App extends Component {
  constructor(){
    super();
    this.state = {
      sessionToken: ''
    }

    this.setSessionState = this.setSessionState.bind(this)
  }

  setSessionState(token) {
    this.setState({sessionToken: token})
  }

  render() {
    return (
      <div>
        <Auth setToken={this.setSessionState} />
      </div>
    );
  }
}

export default App;
