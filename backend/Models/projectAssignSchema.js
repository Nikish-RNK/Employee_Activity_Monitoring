const mongoose = require('mongoose');

const ProjectAssignSchema = new mongoose.Schema({
    projectName: {
        type: String,
        required: true,
    },
    managerName: {
        type: String,
        required: true,
    },
    startingDate: {
        type: Date,
        required: true,
    },
    finishingDate: {
        type: Date,
        required: true,
    },
    selectedEmployees: [
        {
            type: String,
            ref: 'Employee',
            required: true,
        },
    ],
});

module.exports = mongoose.model('ProjectAssign', ProjectAssignSchema);
