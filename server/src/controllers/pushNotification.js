const webpushService = require('../services/webpush');

const schedule = require('node-schedule');

function testPush(req, res) {

  webpushService.sendTestPush();

  res.send('test push');
}

function schedulePush(req, res) {
  let scheduleTime = new Date(Date.now() + 10000);
  // schedule.scheduleJob('1-10 * * * * *', function(){
  //     console.log('scheduleCronstyle:' + new Date());
  // }); 
  schedule.scheduleJob(scheduleTime, function() {
    console.log('after 10 sec');
    webpushService.sendTestPush();
  });
  res.send('schedule push');
}


module.exports = {
  testPush,
  schedulePush
};
