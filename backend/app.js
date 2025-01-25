const express = require('express');
const mongoose = require("mongoose");
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const cors = require("cors");
const dotenv = require('dotenv');
dotenv.config();



const indexRouter = require('./routes/index');
const usersRouter = require('./routes/users');
const employeeRouter = require("./routes/employee.routes");

const app = express();

app.use(cors({
    origin: 'http://localhost:3000', // Allow your frontend URL
    methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'], // Allow specific methods
    allowedHeaders: ['Content-Type', 'Authorization'], // Allow specific headers
  }));
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));


app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use("/employees", employeeRouter);

const PORT = process.env.PORT || 5000;
console.log(PORT);
mongoose.connect(process.env.MONGO_URI).then(() => {
  console.log("Mongo DB Connected");
  app.listen(PORT, () => console.log(`Server running on the port ${PORT}`));
}).catch((error) => console.log(error.message));

module.exports = app;
