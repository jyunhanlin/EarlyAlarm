import React from 'react';

import Notify from './Notification';

import requiredAuth from '../hoc/requiredAuth';


class NotificationGranted extends React.Component {
  notifySub = null;

  urlBase64ToUint8Array(base64String) {
    const padding = '='.repeat((4 - base64String.length % 4) % 4);
    const base64 = (base64String + padding)
      .replace(/-/g, '+')
      .replace(/_/g, '/');

    const rawData = window.atob(base64);
    let outputArray = new Uint8Array(rawData.length);

    for (let i = 0; i < rawData.length; ++i) {
      outputArray[i] = rawData.charCodeAt(i);
    }
    return outputArray;
  }

  configurePushSub() {
    console.log('configurePushSub');
    if (!('serviceWorker' in navigator)) {
      return;
    }

    let reg;
    navigator.serviceWorker.ready
      .then(function(swreg) {
        reg = swreg;
        return swreg.pushManager.getSubscription();
      })
      .then((sub) => {
        console.log('sub', sub);
        console.log('Received PushSubscription: ', JSON.stringify(sub));
        if (sub === null) {
          // Create a new subscription
          const vapidPublicKey = 'BI1_cg0QL1QS3ukM8Lb5mGz6Zgr-scSnlOB-K6xeNNOJIuhZu97pWG6k_luE0T81g5-_TGq5hgebw9FZ1x72i9k';
          const convertedVapidPublicKey = this.urlBase64ToUint8Array(vapidPublicKey);
          return reg.pushManager.subscribe({
            userVisibleOnly: true,
            applicationServerKey: convertedVapidPublicKey
          });
        } else {
          // We have a subscription
          return sub;
        }
      })
      .then((newSub) => {
        console.log('newSub', newSub);
        this.notifySub = newSub;

        console.log({
          token: this.props.token,
          sub: JSON.stringify(this.notifySub)
        });
        // return fetch('https://pwagram-99adf.firebaseio.com/subscriptions.json', {
        //   method: 'POST',
        //   headers: {
        //     'Content-Type': 'application/json',
        //     'Accept': 'application/json'
        //   },
        //   body: JSON.stringify(newSub)
        // })
      })
      // .then(function(res) {
      //   if (res.ok) {
      //     displayConfirmNotification();
      //   }
      // })
      .catch(function(err) {
        console.log(err);
      });
  }

  granted() {
    Notification.requestPermission((result) => {
      console.log('User Choice', result);
      if (result !== 'granted') {
        console.log('No notification permission granted!');
      } else {
        this.configurePushSub();
      }
    });
  }

  render() {
    return (
      <div>
        <button onClick={() => this.granted()}>Enable Notification</button>
        <Notify />
      </div>
    );
  }
}


export default requiredAuth(NotificationGranted);