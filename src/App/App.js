import React from 'react';
import firebase from 'firebase/app';
import 'firebase/auth';
import fbConnection from '../helpers/data/connections';
import './App.scss';
import MyNavbar from '../components/MyNavbar/MyNavbar';

fbConnection();

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
        <button className="btn btn-info">I am a button</button>
      </div>
    );
  }
}

export default App;
