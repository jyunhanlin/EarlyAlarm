import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

import requiredAuth from '../hoc/requiredAuth';

import { signIn } from '../../stores/actions/authActions';

import { signOut } from '../../services/firebase';


class Header extends React.Component {
  componentDidUpdate() {
    console.log(this.props);
  }

  authState() {
    if (this.props.checkAuthStatus) {
      return <div>Check Auth Status...</div>
    } else {
      if (!this.props.auth) {
        return (
          <div>
            <div>
              <button onClick={() => this.props.signIn()}>Auth from Google</button>
            </div>
          </div>
        )
      } else {
        return (
          <div>
            <div>
              <button onClick={()=> signOut()}>sign out</button>
            </div>
          </div>
        )
      }
    }
  }


  render() {
    return (
      <div>
        { this.authState() }
        <Link to="/Alarm">Alarm</Link>
        <Link to="/notify">Notification</Link>
        <Link to="/gmap">Google Map</Link>
      </div>
    )
  }
}

const mapsDispatchToProps = {
  signIn,
};


export default connect(null, mapsDispatchToProps)(requiredAuth(Header));
