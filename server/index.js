const express = require('express');
const app = express();
const bodyParser = require('body-parser')

const router = require('./src/routers');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true })); 

router(app);

app.listen(3001, () => console.log('listening on port 3001'));