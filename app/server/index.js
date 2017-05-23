'use strict';

const express = require('express'),
      bodyParser = require('body-parser'),
      Bluebird = require('bluebird'),
      http = require('http'),
      app = express(),
      server = http.createServer(app),
      fs = Bluebird.promisifyAll(require('fs'));

app.set('view engine', 'pug');
app.set('views', `${__base}app/views`);
app.use(bodyParser.json({'extended': true}));
app.use('/static', express.static(`${__base}public`));
app.get('/', (req, res) => {
    res.render('index');
});
app.get('/public/lodash/lodash.js', (req, res) => {
    fs.readFileAsync(`${__base}node_modules/lodash/lodash.js`)
    .then(data => res.send(data))
    .catch(e => res.status(500).send(e));
});

require(`${__base}app/server/router`)(app);

app.listen(process.env.PORT, () => {
    console.log(`Todo application up and running on port ${process.env.PORT}`);
});
