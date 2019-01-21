const functions = require('firebase-functions');
const webpush = require('web-push');

// // Create and Deploy Your First Cloud Functions
// // https://firebase.google.com/docs/functions/write-firebase-functions
//
// exports.helloWorld = functions.https.onRequest((request, response) => {
//  response.send("Hello from Firebase!");
// });

module.exports.sendPush = functions.https.onRequest((request, response) => {
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
    })

  response.status(201).json({message: 'query done!', id: request.body.id});

});

module.exports.sendExtensionPush = functions.https.onRequest((request, response) => {
  console.log('setVapidDetails');
  webpush.setVapidDetails(
    'mailto:jyunhanlin@gmail.com',
    'BI1_cg0QL1QS3ukM8Lb5mGz6Zgr-scSnlOB-K6xeNNOJIuhZu97pWG6k_luE0T81g5-_TGq5hgebw9FZ1x72i9k',
    '1eZKhe3J71aWqWmWKKe6Luqvgq25YCs7YNsf4cCEBVs'
  );

  const pushConfig = {
    endpoint: 'https://fcm.googleapis.com/fcm/send/eX5ZrDXs4b8:APA91bElhfLR9lLbuXK7r6EUB4iD3lOhwujeuNWZMFURN3k3lhcYG119I6n9EoHjC8nHwb3_3qp5lr0T84ZyMc_X_uUkoQSexcFoz3MTSUt9pqBwTgFEFHvqZbnQuADASo7WhU7x7N1r',
    keys: {
      auth: 'pE7DzalXLtVQqiuwyrvGsA',
      p256dh: 'BKAVmabxbMzF-0qEWii55N3Pk4_UPfJBRwXNS2MjzjIZONM_xiF8iy8xddbzZKp3cRto1YqoxNmrEIweS8o_3RY'
    }
  };

  console.log('sendNotification');
  webpush.sendNotification(pushConfig, JSON.stringify({
    title: 'AD name',
    content: 'Extension: cost too mush, watch out!!!',
    openUrl: '/'
  }))
    .catch( (err) => {
      console.log(err);
    })

  response.status(201).json({message: 'query done!', id: request.body.id});

});