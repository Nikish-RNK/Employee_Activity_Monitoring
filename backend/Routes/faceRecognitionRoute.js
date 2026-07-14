const express = require('express');
const router = express.Router();
const axios = require('axios');
const Attendance = require('../Models/attendanceSchema');

router.post('/', async (req, res) => {
    try {
        const { image } = req.body;

        const pyRes = await axios.post(
            'http://127.0.0.1:5001/api/face-recognize',
            { image },
            { timeout: 10000 },
        );

        const results = pyRes.data.results || [];

        for (const face of results) {
            if (face.name !== 'Unknown') {
                const exists = await Attendance.findOne({
                    name: face.name,
                    time: {
                        $gte: new Date(Date.now() - 60000),
                    },
                });

                if (!exists) {
                    await Attendance.create({
                        name: face.name,
                        time: new Date(),
                    });
                }
            }
        }

        res.json({ results });
    } catch (err) {
        console.error(err.message);
        res.status(500).json({ error: err.message });
    }
});

router.get('/latest', async (req, res) => {
    try {
        const records = await Attendance.find().sort({ time: -1 });
        res.json(records);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

module.exports = router;
