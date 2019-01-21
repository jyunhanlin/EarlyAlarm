import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from "react-router-dom";

import { checkAuthStatus, getIdToken } from '../../services/firebase'

import { authSuccess, authFailure, setToken, checkAuthStart, checkAuthDone } from '../../stores/actions/authActions';



export default (WrappedComponent) => {
  class Auth extends React.Component {
    componentDidMount() {
      this.props.checkAuthStart();
      checkAuthStatus((user) => {
        if(user) {
          getIdToken()
            .then((idToken) => {
              this.props.authSuccess();
              this.props.setToken(idToken);
              this.props.checkAuthDone();
            }).catch((err) => {
              console.log(err);
              this.props.authFailure();
              this.props.checkAuthDone();
              this.props.history.push('/');
            }) 
        } else {
          this.props.authFailure();
          this.props.checkAuthDone();
          this.props.history.push('/');
        }
      })
    }

    componentDidUpdate() {
      if (!this.props.auth) {
        this.props.history.push('/');
      }
    }

    render() {
      return (
        <WrappedComponent { ...this.props }/>
      );
    }
  }

  const mapStateToProps = state => ({
    checkAuthStatus: state.auth.checkAuthStatus,
    auth: state.auth.authenticated,
    token: state.auth.token
  });

  const mapDispatchToProps = {
    authSuccess,
    authFailure,
    setToken,
    checkAuthStart,
    checkAuthDone
  }
  
  return connect(mapStateToProps, mapDispatchToProps)(withRouter(Auth));
}