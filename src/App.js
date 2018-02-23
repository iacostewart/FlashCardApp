import React, { Component } from 'react';
import Auth from './auth/Auth';
import SiteBar from './home/Navbar';
import Splash from './home/Splash';
import {
  BrowserRouter as Router,
  Link,
  Route,
  Switch,
} from 'react-router-dom';
import UserSplash from './home/UserSplash';
import StackMyDeck from './MyDecks/StackMyDeck';
import AdminSplash from './home/Admin/AdminSplash';


class App extends Component {
  constructor() {
    super();
    this.state = {
      sessionToken: ''
    }

    this.setSessionState = this.setSessionState.bind(this);
    this.protectedViews = this.protectedViews.bind(this);
    this.logout = this.logout.bind(this);
  }

  setSessionState(token) {
    localStorage.setItem('token', token);
    this.setState({ sessionToken: token });

  }

  componentWillMount() {
    const token = localStorage.getItem('token')

    if (token && !this.state.sessionToken) {
      this.setState({ sessionToken: token });
    }
  }

  logout(){
    this.setState({ sessionToken: '' });
    localStorage.removeItem('token');
  }

  protectedViews() {

    if (this.state.sessionToken === localStorage.getItem('token')) {
      return (
        <Switch>
          <Route path="/lesserland">
            <UserSplash sessionToken={this.state.sessionToken} />
          </Route>
          <Route path="/adminland">
            <AdminSplash sessionToken={this.state.sessionToken} />
          </Route> 
        <Route path='/stack' >
          <StackMyDeck sessionToken={this.state.sessionToken} />
        </Route>
        <Route path='/' exact={true}>
          <Splash sessionToken={this.state.sessionToken} />
        </Route>
        </Switch>
      )
    } else {
      return (
        <Route path="/auth" exact={true} >
          <Auth setToken={this.setSessionState} />
        </Route>
      )
    }

  }

  render() {
    return (
     
      <div className="main">
      <Router>
        <div>
          <SiteBar clickLogout={this.logout}/>
          {this.protectedViews()}
        </div>
      </Router>
     
      </div>
    );
  }
}

export default App;
