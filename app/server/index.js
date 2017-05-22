'use strict';

const express = require('express'),
    http = require('http'),
    app = express(),
    server = http.createServer(app);

app.set('view engine', 'pug');
app.set('views', `${__base}app/views` );
app.get('/', (req, res) => {
    res.render('index');
});

app.listen(process.env.PORT, () => {
    console.log(`Todo application up and running on port ${process.env.PORT}`);
});
