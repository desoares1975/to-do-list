const mongoose = require('mongoose');

const TodoSchema = new mongoose.Schema({
    'task': String,
    'createAt': {
        'type': Date,
        'default': Date.now
    },
    'done': {
        'type': Boolean,
        'default': false
    }
});

module.exports = mongoose.model('Todo', TodoSchema);