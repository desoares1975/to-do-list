'use strict';

const Todo = require(`${__base}app/models/todo`);

module.exports = {
    'create': (req, res) => {
        new Todo(req.body)
        .save()
        .then(saved => res.status(200).json(saved))
        .catch(e => res.status(500).json(e));
    },
    'read': (req, res) => {
        Todo.findById(req.params._id)
        .then(todo => res.status(200).json(todo))
        .catch(e => res.status(500).json(e));
    },
    'list': (req, res) => {
        Todo.find()
        .sort({'createdAt': 1, 'done': 1})
        .then(todos => res.status(200).json(todos))
        .catch(e => res.status(500).json(e));
    },
    'update': (req, res) => {
        Todo.findByIdAndUpdate(req.params._id, req.body, {
            'new': true
        })
        .then(updated => res.status(200).json(updated))
        .catch(e => res.status(500).json(e));
    },
    'delete': (req, res) => {
        Todo.remove({'_id': req.params._id})
        .then(() => res.status(200).json({'ok':true}))
        .catch(e => res.status(500).json(e));
    }
}