import 'rc-time-picker/assets/index.css';

import React from 'react';
import moment from 'moment';
import TimePicker from 'rc-time-picker';
import axios from 'axios';


import requiredAuth from '../hoc/requiredAuth';

class Alarm extends React.Component {
  format = 'h:mm a';
  now = moment();
  alarmTime = this.now.format(this.format);
  gpsPosition = '';

  timeHandler(value) {
    if (value) {
      this.alarmTime = value.format(this.format);
    }
  }

  setAlarm() {
    console.log({
      token: this.props.token,
      alarmTime: this.alarmTime,
      gpsPosition: this.gpsPosition,
      estimateTime: 12345,
    });
  }

  getGPS() {
    if (!('geolocation' in navigator)) {
      return;
    }
    console.log('get location:' + moment().format(this.format));
    navigator.geolocation.getCurrentPosition(
      (position) => {
        // do something from postiion
        console.log(this);
        console.log('from GPS', position.coords.latitude, position.coords.longitude);
        this.gpsPosition = {
          lat: `${position.coords.latitude}`,
          long: `${position.coords.longitude}`
        };
      },
      (err) => {
        // do something when error
        console.log(err);
        axios.get('https://ipinfo.io')
          .then((res) => {
            console.log(this)
            console.log('from ipinfo', res.data);
            this.gpsPosition = {
              lat: res.data.loc.split(',')[0],
              long: res.data.loc.split(',')[1],
            };
          }) 
      },
      { timeout: 5000 },
    );
  }

  render() {
    return (
      <div>
        <TimePicker
          showSecond={false}
          defaultValue={this.now}
          onChange={(value) => this.timeHandler(value)}
          format={this.format}
          use12Hours
          inputReadOnly
        />
        <button onClick={() => this.setAlarm()}>Set Alarm</button>

        <button onClick={() => this.getGPS()}> Get GPS</button>
      </div>
    );
  }
}


export default requiredAuth(Alarm);