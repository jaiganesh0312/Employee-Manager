const express = require('express');
const router = express.Router();

const employeeController = require('../controllers/employee.controller');

router.get('/', employeeController.getFiltered);
router.get('/getAll', employeeController.getAll);
router.post('/', employeeController.createEmployee);
router.get('/:id', employeeController.getEmployeeById);
router.delete('/:id', employeeController.deleteEmployee);
router.put('/:id', employeeController.updateEmployee);
router.post('/storeAll', employeeController.insertMany);

module.exports = router;