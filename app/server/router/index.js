'use strict';

const todos = require(`${__base}app/server/router/todos`);

module.exports = app => {
    app.post('/todo', todos.create);
    app.get('/todo', todos.list);
    app.get('/todo/:_id', todos.read);
    app.put('/todo/:_id', todos.update);
    app.delete('/todo/:_id', todos.delete);
};