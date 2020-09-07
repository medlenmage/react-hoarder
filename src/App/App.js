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
import Auth from '../components/pages/Auth/Auth';
import MyNavbar from '../components/pages/MyNavbar/MyNavbar';
import Edit from '../components/pages/Edit/Edit';
import MyStuff from '../components/pages/MyStuff/MyStuff';
import NewStuff from '../components/pages/New/New';
import SingleStuff from '../components/pages/SingleStuff/SingleStuff';
import Home from '../components/pages/Home/Home';

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
                <PrivateRoute path="/edit/:itemId" component={Edit} authed={authed} />
                <PrivateRoute path="/stuffs/:itemId" component={SingleStuff} authed={authed} />
                <PublicRoute path="/auth" component={Auth} authed={authed} />
                <Redirect from="*" to="/home"/>
              </Switch>
            </div>
          </>
        </BrowserRouter>
      </div>

    // <div className="App">
    //   <MyNavbar authed={authed}/>
    //   <h2>react hoarder</h2>
    // </div>
    );
  }
}

export default App;
