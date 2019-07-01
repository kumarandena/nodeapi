const mongoos = require('mongoose');

const postSchema = new mongoos.Schema({
    title: {
        type: String,
        required: true
    },
    body: {
        type: String,
        required: true
    }
});

module.exports = mongoos.model("Post", postSchema);