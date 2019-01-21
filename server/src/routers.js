const pushNotification = require('./controllers/pushNotification');
const test = require('./controllers/test');
const authenticate = require('./middlewares/authenticate');

module.exports = function(app) {
  app.get('/', (req, res) => res.send('Hello World!'));

  app.get('/testPush', pushNotification.testPush);

  app.get('/schedulePush', authenticate, pushNotification.schedulePush);

  app.get('/testDuration', test.testDuration);

  app.get('/testAuth', authenticate, test.testAuth);

  app.get('/testDB', authenticate, test.testDB);

  app.post('/testSetDB', authenticate, test.testSetDB);
};