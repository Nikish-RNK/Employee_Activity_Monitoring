const mongoose = require("mongoose");
const fs = require("fs");
const path = require("path");

mongoose.connect("mongodb://127.0.0.1:27017/admin");

const Employee = require("../backend/Models/addEmployeeSchema");

const datasetPath = path.join(__dirname, "dataset");

if (fs.existsSync(datasetPath)) {
    fs.rmSync(datasetPath, { recursive: true, force: true });
    console.log("Old dataset deleted");
}

// recreate folder
fs.mkdirSync(datasetPath, { recursive: true });

async function extractImages() {
    const employees = await Employee.find();

    for (let emp of employees) {
        if (emp.images && emp.images.length > 0) {

            emp.images.forEach((img, index) => {

                const fileName = `${emp.firstName}_${emp.lastName}_${index}.jpg`;
                const filePath = path.join(datasetPath, fileName);

                fs.writeFileSync(filePath, img.data);

                console.log("Saved:", fileName);
            });
        }
    }

    console.log("Dataset rebuilt");
    process.exit();
}

extractImages();