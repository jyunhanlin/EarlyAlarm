import React from 'react';

class Notify extends React.Component {
  basicNotify() {
    ''
    var options = {
      body: 'You successfully subscribed to our Notification service!',
    };
    new Notification('Successfully subscribed!', options);
  }
  advancedNotify() {
    console.log('advanced notify');
    if ('serviceWorker' in navigator) {
      console.log('advanced notify in');
      var options = {
        body: 'You successfully subscribed to our Notification service!',
        icon: 'favicon.ico',
        image: 'favicon.ico',
        dir: 'ltr',
        lang: 'en-US', // BCP 47,
        vibrate: [100, 50, 200],
        badge: 'favicon.ico',
        tag: 'confirm-notification',
        renotify: true,
        actions: [
          { action: 'confirm', title: 'Okay', icon: 'favicon.ico' },
          { action: 'cancel', title: 'Cancel', icon: 'favicon.ico' },
        ],
      };
      navigator.serviceWorker.ready.then(function(swreg) {
        console.log('sw ready');
        swreg.showNotification('Successfully subscribed (from SW)!', options);
      });
    }
  }

  render() {
    return (
      <div>
        <button onClick={this.basicNotify}>show basic Notification</button>
        <button onClick={this.advancedNotify}>show advanced Notification</button>
      </div>
      
    );
  }
}

export default Notify;