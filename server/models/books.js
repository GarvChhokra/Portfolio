let mongoose = require('mongoose');

let contactModel = mongoose.Schema(
    {
        name: String,
        number: Number,
        email: String

    },
    {
        collection: "contacts"
    }
);

module.exports = mongoose.model('contact', contactModel);

