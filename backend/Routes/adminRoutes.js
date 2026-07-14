const express = require('express');
const router = express.Router();

const Employee = require('../Models/addEmployeeSchema');
const Project = require('../Models/projectAssignSchema');
const Admin = require('../Models/userSchema');

router.post('/login', async (req, res) => {
    console.log(req.body);

    try {
        const { email, password } = req.body;

        const user = await Admin.findOne({ email });

        console.log(user);

        if (!user) {
            return res.status(404).json({ message: 'User not found' });
        }

        if (user.password !== password) {
            return res.status(401).json({ message: 'Invalid password' });
        }

        res.json({
            userType: 'admin',
            user,
        });
    } catch (err) {
        console.error(err);
        res.status(500).json({ message: 'Login error' });
    }
});

router.get('/alluser', async (req, res) => {
    try {
        const allEmployees = await Employee.find();

        res.json({ allEmployees });
    } catch (err) {
        res.status(500).json({ message: 'Error fetching employees' });
    }
});

router.delete('/employee/:id', async (req, res) => {
    try {
        await Employee.findByIdAndDelete(req.params.id);
        res.json({ message: 'Deleted' });
    } catch (err) {
        res.status(500).json({ message: 'Delete error' });
    }
});

router.post('/update', async (req, res) => {
    try {
        const id = req.body._id;

        const updated = await Employee.findByIdAndUpdate(id, req.body, {
            new: true,
        });

        res.json({
            message: 'Employee updated',
            employee: updated,
        });
    } catch (err) {
        console.error(err);
        res.status(500).json({ message: 'Update failed' });
    }
});

router.post('/project', async (req, res) => {
    try {
        const {
            project_title,
            project_employee,
            project_start_date,
            project_end_date,
        } = req.body;

        if (
            !project_title ||
            !project_employee ||
            !project_start_date ||
            !project_end_date
        ) {
            return res.status(400).json({ message: 'All fields required' });
        }

        // map frontend → schema
        const newProject = new Project({
            projectName: project_title,
            managerName: project_employee,
            startingDate: project_start_date,
            finishingDate: project_end_date,
        });

        await newProject.save();

        res.json({ message: 'Project added', project: newProject });
    } catch (err) {
        console.error(err);
        res.status(500).json({ message: 'Project error' });
    }
});

router.get('/allprojects', async (req, res) => {
    try {
        const projects = await Project.find();

        // convert back → frontend format
        const allProjects = projects.map((p) => ({
            _id: p._id,
            project_title: p.projectName,
            project_employee: p.managerName,
            project_start_date: p.startingDate,
            project_end_date: p.finishingDate,
        }));

        res.json({ allProjects });
    } catch (err) {
        res.status(500).json({ message: 'Error fetching projects' });
    }
});

router.delete('/project/:id', async (req, res) => {
    try {
        await Project.findByIdAndDelete(req.params.id);
        res.json({ message: 'Project deleted' });
    } catch (err) {
        res.status(500).json({ message: 'Delete error' });
    }
});

module.exports = router;
