const mongoose = require("mongoose");

const EmployeeSchema = mongoose.Schema({
    name: {
        type: String,
        required: [true, "Please Enter a Valid Name"],
        validate: {
            validator: function (value) {
              return /^[a-zA-Z\s]+$/.test(value); // Allows only letters and spaces
            },
            message: 'Name must contain only letters and spaces',
        },
    },

    email: {
        type: String,
        required: [true, "Please Enter a Valid Email"],
        unique: true,
        validate: {
            validator: function (value) {
            return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value); // Simple email regex
            },
            message: 'Email is already in use or invalid'
        }
    },

    role: {
        type: String,
        required: [true, "Please Enter a Valid Role"]
    },

    salary: {
        type: String,
        required: [true, "Please Enter a Valid Salary"],
        validate: {
            validator: function (value) {
              return /^\d+$/.test(value); // Ensures only numeric characters
            },
            message: 'Salary must contain only numeric characters',
        },
    },

    phone: {
        type: String,
        required: [true, "Please Enter a Valid Phone Number"],
        validate: {
            validator: function (value) {
              return /^[1-9]\d{9}$/.test(value); // Ensures the number does not start with 0
            },
            message: 'Phone number must be a valid 10-digit number and cannot start with 0',
        },
    },

    location: {
        type: String,
        required: [true, "Please Enter a valid Location"],
        validate: {
            validator: function (value) {
              return value.trim().length > 0; // Ensures location is not empty or just spaces
            },
            message: 'Location cannot be empty',
        },
    }
});

const Employee = mongoose.model("Employee", EmployeeSchema);
module.exports = Employee;