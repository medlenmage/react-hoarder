import React from 'react';
import PropTypes from 'prop-types';
import firebase from 'firebase/app';
import 'firebase/auth';
import { Link } from 'react-router-dom';
import Auth from '../Auth/Auth';

class MyNavbar extends React.Component {
  static propTypes = {
    authed: PropTypes.bool.isRequired,
  }

  logoutClickEvent = (e) => {
    e.preventDefault();
    firebase.auth().signOut();
  }

  render() {
    const { authed } = this.props;
    return (
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <a className="navbar-brand" href="h">Hoards.R.Us</a>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item active">
              <Link to='/home'>Home</Link>
            </li>
            <li className="nav-item">
              <Link to='/stuff'>My Stuff</Link>
            </li>
            <li className="nav-item">
              <Link to='/new'>New Stuff</Link>
            </li>
          </ul>
          <div className="ml-auto">
            {
              authed
                ? <button className="nav-link btn btn-danger text-dark logout-button" onClick={this.logoutClickEvent}>Signout</button>
                : <Auth />
            }
          </div>
        </div>
      </nav>
    );
  }
}

export default MyNavbar;
