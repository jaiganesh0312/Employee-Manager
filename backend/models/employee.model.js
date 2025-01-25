const mongoose = require("mongoose");

const EmployeeSchema = mongoose.Schema({
    name: {
        type: String,
        required: [true, "Please Enter a Valid Name"]
    },

    email: {
        type: String,
        required: [true, "Please Enter a Valid Email"]
    },

    role: {
        type: String,
        required: [true, "Please Enter a Valid Role"]
    },

    salary: {
        type: String,
        required: [true, "Please Enter a Valid Salary"]
    },

    phone: {
        type: String,
        required: [true, "Please Enter a Valid Phone Number"]
    },

    location: {
        type: String,
        required: [true, "Please Enter a valid Location"]
    }
});

const Employee = mongoose.model("Employee", EmployeeSchema);
module.exports = Employee;