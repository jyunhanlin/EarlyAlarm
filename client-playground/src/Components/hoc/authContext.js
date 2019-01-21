import React from 'react';


const authContext = React.createContext({});


export const { Provider, Consumer } = authContext;


export const withAuthContext = Component => props => 
<Consumer>{value => {
  console.log('Consumer: ', value);
  return <Component {...props} auth={value.authenticated} token={value.idToken} />
}}</Consumer>


export default authContext;