// config/sequelize.js
const { Sequelize } = require('sequelize');

const sequelize = new Sequelize(process.env.DB_NAME, process.env.DB_USERNAME, process.env.DB_PASSWORD, {
    host: 'localhost',
    dialect: 'mysql',
    logging: false,
});

sequelize.authenticate()
    .then(() => console.log('Sequelize connected successfully'))
    .catch(err => console.error('Unable to connect to the database:', err));


sequelize.sync()
    .then(() => console.log('Database & tables created!'))
    .catch(err => console.error('Error syncing database:', err));

module.exports = { sequelize };
