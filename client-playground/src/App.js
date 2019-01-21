import React, { Component } from 'react';
import { Route } from 'react-router-dom';

import Header from './Components/Header/Header';
import Home from './Components/Home/Home';
import Alarm from './Components/Alarm/Alarm';
import NotificationGranted from './Components/Notification/NotificationGranted'

class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <Route exact path="/" component={Home}/>
        <Route path="/Alarm" component={Alarm}/>
        <Route path="/notify" component={NotificationGranted}/>
      </div>
    );
  }
}

export default App;
