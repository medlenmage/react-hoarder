import React from 'react';
import {
  BrowserRouter,
  Redirect,
  Route,
  Switch,
} from 'react-router-dom';
import firebase from 'firebase/app';
import 'firebase/auth';
import fbConnection from '../helpers/data/connections';
import './App.scss';
import MyNavbar from '../components/MyNavbar/MyNavbar';
import Edit from '../components/Edit/Edit';
import MyStuff from '../components/MyStuff/MyStuff';
import NewStuff from '../components/New/New';
import SingleStuff from '../components/SingleStuff/SingleStuff';
import Home from '../components/Home/Home';

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

    return (
      <div className="App">
        <BrowserRouter>
          <>
            <MyNavbar authed={authed} />
            <div className="container">
              <Switch>
                <PrivateRoute path="/home" component={Home} authed={authed} />
                <PrivateRoute path="/new" component={NewStuff} authed={authed} />
                <PrivateRoute path="/stuff" component={MyStuff} authed={authed} />
                <PrivateRoute path="/edit/12345" component={Edit} authed={authed} />
                <PrivateRoute path="/stuff/12345" component={SingleStuff} authed={authed} />
              </Switch>
            </div>
          </>
        </BrowserRouter>

        {/* <MyNavbar authed={authed} />
        <MyStuff />
        <NewStuff />
        <SingleStuff />
        <Edit /> */}
      </div>

    // <div className="App">
    //   <MyNavbar authed={authed}/>
    //   <h2>react hoarder</h2>
    // </div>
    );
  }
}

export default App;
