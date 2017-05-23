'use strict';

const mongoose = require('mongoose');
mongoose.Promise = require('bluebird');

const connect = () => {
    mongoose.connect(`${process.env.MONGO_HOST}/${process.env.MONGO_SCHEMA}`, () => {});
};

connect();

mongoose.connection.on('connected', () => {
    console.log(`MongoDB connected at ${process.env.MONGO_HOST}/${process.env.MONGO_SCHEMA}`);
});

mongoose.connection.on('error', err => {
    console.log(err);
});

mongoose.connection.on('disconnected', () => {
    console.log('MongoDB disconnected, try to reconnect...');
    connect();
});