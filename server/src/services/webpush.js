const webpush = require('web-push');

function sendTestPush() {
  console.log('setVapidDetails');
  webpush.setVapidDetails(
    'mailto:jyunhanlin@gmail.com',
    'BI1_cg0QL1QS3ukM8Lb5mGz6Zgr-scSnlOB-K6xeNNOJIuhZu97pWG6k_luE0T81g5-_TGq5hgebw9FZ1x72i9k',
    '1eZKhe3J71aWqWmWKKe6Luqvgq25YCs7YNsf4cCEBVs'
  );

  const pushConfig = {
    endpoint: 'https://fcm.googleapis.com/fcm/send/e3Oi4EIeBhQ:APA91bGDRrqxRbcSLIoCanYlVuzLd81SPU4BLyjt6ZqRPAqPfIrMsJ-aatFFfoDGzXvn7hNuKQpI7nBO2J_-QtO7uZLHRUalOCoIG3FxwmDLk63BRT72QldSUr989dqAjen5zDU8Cdb7',
    keys: {
      auth: 'dafOxuUU4OTBXv15_-92XQ',
      p256dh: 'BLoPWab201ZI0MkIpe1WVg89O-6be0C0-LyGwiWraxX_R_uVJCSNyYnGmiBnB7kpxr8KEuQTU9DYhjrRO6W1IrA'
    }
  };

  console.log('sendNotification');
  webpush.sendNotification(pushConfig, JSON.stringify({
    title: 'AD name',
    content: 'cost too mush, watch out!!!',
    openUrl: '/'
  }))
  .catch( (err) => {
    console.log(err);
  });
}

function sendPush() {
  
}

module.exports = {
  sendTestPush,
  sendPush
}
