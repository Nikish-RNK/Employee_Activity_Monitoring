const mongoose = require("mongoose");
const bcrypt = require("bcrypt");

const employeeSchema = new mongoose.Schema({
    firstName: {
        type: String,
        required: true,
        maxlength: 50,
    },

    lastName: {
        type: String,
        required: true,
        maxlength: 50,
    },

    email: {
        type: String,
        required: true,
        unique: true,
        lowercase: true,
    },

    password: {
        type: String,
        required: true,
    },

    phone: {
        type: String,
        maxlength: 15,
    },

    dob: {
        type: String,
        required: true,
    },

    username: {
        type: String,
        maxlength: 15,
    },

    gender: {
        type: String,
        required: true,
    },

    address: {
        street: {
            type: String,
            maxlength: 100,
        },
        city: {
            type: String,
            maxlength: 50,
        },
        state: {
            type: String,
            maxlength: 50,
        },
        zipCode: {
            type: String,
            maxlength: 10,
        },
        country: {
            type: String,
            maxlength: 50,
        },
    },

    images: [
        {
            data: Buffer,
            contentType: String,
        },
    ],

    status: {
        type: String,
        enum: ["Active", "Inactive", "On Leave"],
        default: "Active",
    },

    salary: {
        type: Number,
    },

    role: {
        type: String,
    },

    createdAt: {
        type: Date,
        default: Date.now,
    },

    isPresent: {
        type: Boolean,
        default: false,
    },
});

employeeSchema.pre("save", async function () {
    if (!this.isModified("password")) {
        return;
    }

    const salt = await bcrypt.genSalt(10);
    this.password = await bcrypt.hash(this.password, salt);
});

module.exports = mongoose.model("Employee", employeeSchema);