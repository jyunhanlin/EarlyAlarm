const axios = require('axios');

const API_KEY = 'AIzaSyAf0gLd1c0mPfC3nfjl4T0uoqE_7Rkwsn8';

function testDuration() {
  axios.get(`https://maps.googleapis.com/maps/api/directions/json?origin=75+9th+Ave+New+York,+NY&destination=MetLife+Stadium+1+MetLife+Stadium+Dr+East+Rutherford,+NJ+07073&key=${API_KEY}`)
    .then((res) => {
      console.log(JSON.stringify(res.data));
    });
}

module.exports = {
  testDuration,
};
