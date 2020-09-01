import React from 'react';
import PropTypes from 'prop-types';
import firebase from 'firebase/app';
import 'firebase/auth';
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
      <nav class="navbar navbar-expand-lg navbar-light bg-light">
        <a class="navbar-brand" href="h">Hoards.R.Us</a>
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNav">
          <ul class="navbar-nav">
            <li class="nav-item active">
              <a class="nav-link" href="h">Home <span class="sr-only">(current)</span></a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="h">My Stuff</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="h">New</a>
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
