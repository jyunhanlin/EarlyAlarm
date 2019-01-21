const mapService = require('../services/googlemap');

const firebaseService = require('../services/firebase');


function testDuration(req, res) {
  mapService.testDuration();
  res.send('testDuraction');
}

function testAuth(req, res) {
  console.log('auth', req.uid);
  res.send('testAuth');
}

function testDB(req, res) {
  firebaseService.getDB(req.uid);
  res.send('testDB');
}

function testSetDB(req, res) {
  console.log(req.body);
  firebaseService.setDB(req.uid, req.body)
    .then(() => {
      res.send('setDB done');
    }).catch((err) => {
      console.log(err);
      res.status(401).send('unauth 88');
    })
}


module.exports = {
  testDuration,
  testAuth,
  testDB,
  testSetDB
};
