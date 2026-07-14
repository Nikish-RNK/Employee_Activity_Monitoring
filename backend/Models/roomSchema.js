const mongoose = require('mongoose');

const roomSchema = new mongoose.Schema({
    projectHead: {
        type: String,
        required: true,
    },

    roomsForMeeting: {
        type: String,
        required: true,
    },
    reasonForMeeting: {
        type: String,
        required: true,
    },
    bookingDate: {
        type: Date,
        required: true,
    },
    meetingStartingTime: {
        type: String,
        required: true,
    },
    meetingEndingTime: {
        type: String,
        required: true,
    },
    additionalRequirement: {
        type: String,
    },
});

module.exports = mongoose.model('Booking', roomSchema);
