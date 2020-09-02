import React from 'react';
import { Redirect, Route } from 'react-router-dom';
import firebase from 'firebase/app';
import 'firebase/auth';
import fbConnection from '../helpers/data/connections';
import './App.scss';
import MyNavbar from '../components/MyNavbar/MyNavbar';

fbConnection();

const PublicRoute = ({ component: Component, authed, ...rest }) => {
  const routeChecker = (props) => (authed === false
    ? (<Component {...props} />)
    : (<Redirect to={{ pathname: '/home', state: { from: props.location } }} />));
  return <Route {...rest} render={(props) => routeChecker(props)} />;
};

const PrivateRoute = ({ component: Component, authed, ...rest }) => {
  const routeChecker = (props) => (authed === true
    ? (<Component {...props} />)
    : (<Redirect to={{ pathname: '/auth', state: { from: props.location } }} />));
  return <Route {...rest} render={(props) => routeChecker(props)} />;
};

class App extends React.Component {
  state = {
    authed: false,
  }

  componentDidMount() {
    this.removeListener = firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        this.setState({ authed: true });
      } else {
        this.setState({ authed: false });
      }
    });
  }

  componentWillUnmount() {
    this.removeListener();
  }

  render() {
    const { authed } = this.state;

    // const loadComponent = () => {
    //   if (authed) {

    //   }
    //   return '';
    // };

    return (
      <div className="App">
        <MyNavbar authed={authed}/>
        <h2>react hoarder</h2>
      </div>
    );
  }
}

export default App;
