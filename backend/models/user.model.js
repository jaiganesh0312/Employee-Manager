const { sequelize } = require("../config/sequelize");
const { DataTypes } = require("sequelize");


const User = sequelize.define(
  "User",
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    username: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: { msg: "Username must be unique" },
      validate: {
        isAlpha: { msg: "Username should contain only alphabetic characters" },
        notEmpty: { msg: "Username cannot be empty" },
        len: { args: [3, 50], msg: "Username must be atleast 3 characters long" }, // Added name length validation
      },
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: { msg: "Email already in use" },
      validate: {
        notEmpty: { msg: "Email cannot be empty" },
        isEmail: { msg: "Please enter a valid Email" },
      },
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notEmpty: {msg: "Password cannot be empty"}
      }
    },
    role: {
      type: DataTypes.ENUM("Admin", "User", "Moderator"),
      defaultValue: "User",
    },
    verificationToken: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    resetToken: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    refreshToken: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    verified: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
    },
  },
  {
    timestamps: true,
  }
);

module.exports = User;
