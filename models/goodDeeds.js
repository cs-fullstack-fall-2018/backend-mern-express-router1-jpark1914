const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Create Schema
const DeedSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    deed: {
        type: String,
        required: true
    },
    partOfTown: {
        type: String,
        required: false
    },
    numPeopleInvolved: {
        type: Number,
        required: false
    },
    date: {
        type: Date,
        default: Date.now
    }
});

module.exports = Deed = mongoose.model('deed', DeedSchema);