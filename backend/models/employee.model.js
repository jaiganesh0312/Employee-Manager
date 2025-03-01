const { DataTypes } = require("sequelize");
const { sequelize } = require("../config/sequelize");

const Employee = sequelize.define("Employee", {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false,
    validate: {
      notEmpty: { msg: "Name cannot be empty" },
      len: { args: [3, 50], msg: "Name must be atleast 3 characters" },
      isAlpha: {msg: "Name must contain only alphabetical characters"}
    }
  },
  email: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: {
        msg: "Email already exists!"
    },
    validate: {
      isEmail: {msg: 'Invalid Email format'},
    }
  },
  role : {
    type: DataTypes.STRING,
    allowNull: false,
    validate: {
      notEmpty: { msg: "Role cannot be empty" },
    }
  },
  location: {
    type: DataTypes.STRING,
    allowNull: false,
    validate: {
      notEmpty: { msg: "Location cannot be empty" },
     
    }
  },
  phone: {
    type: DataTypes.STRING,
    allowNull: false,
    validate: {
      isValidPhone(value) {
        if (!/^[1-9]\d{9}$/.test(value)) {
          throw new Error("Phone number must be exactly 10 digits and cannot start with 0");
        }
      }
    }
  },
  salary: {
    type: DataTypes.STRING, // Storing salary as a STRING
    allowNull: false,
    validate: {
      isValidSalary(value) {
        if (!/^\d+$/.test(value)) {
          throw new Error("Salary must contain only numeric characters");
        }
      }
    }
  }
});

module.exports = Employee;
