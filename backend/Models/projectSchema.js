const mongoose = require("mongoose");

const projectSchema = new mongoose.Schema({
    project_title: { type: String, required: true },
    project_employee: { type: String, require: true },
    project_start_date: { type: String, required: true },
    project_end_date: { type: String, required: true },
});

const Project = mongoose.model("Project", projectSchema);
module.exports = Project;
