const mongoose = require('mongoose');

const newsSchema = new mongoose.Schema({
    image: {
        required: true,
        type: String
    },

    description: {
        required: true,
        type: String
    },

    body: {
        required: true,
        type: String
    },

    date: {
        type: Date,
        default: Date.now()
    }
});

const News = mongoose.model("News", newsSchema);

module.exports = News;