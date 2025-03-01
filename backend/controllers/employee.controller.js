
const Employee = require("../models/employee.model");
const {EMPLOYEES} = require('../util/data');

const {Op} = require('sequelize');
const LIMIT = 12;


exports.getAll =  async (req, res) => {
    try {
        const employees = await Employee.findAll()
        res.status(200).json({data: employees});
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// ✅ Get All Employees (With Pagination & Search)
exports.getFiltered =  async (req, res) => {
    try {
        const { keyword = "", page = 1 } = req.query;
        const searchKeyword = keyword.toLowerCase();

        const whereCondition = searchKeyword
            ? { name: { [Op.like]: `${searchKeyword}%` } }
            : {};

        const offset = (Number(page) - 1) * LIMIT;

        const { rows: employees, count: totalCount } = await Employee.findAndCountAll({
            where: whereCondition,
            offset,
            limit: LIMIT
        });

        res.status(200).json({ data: employees, total: totalCount });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// ✅ Get Employee by ID
exports.getEmployeeById = async (req, res) => {
    try {

        const employee = await Employee.findByPk(req.params.id);
        console.log("My id:", id);
        console.log("My data", employee);
        
        if (!employee) return res.status(404).json({ message: "Employee not found!" });

        res.status(200).json(employee);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// ✅ Create New Employee
exports.createEmployee = async (req, res) => {
    try {
        const employee = await Employee.create(req.body);
        res.status(201).json(employee);
    } catch (error) {
        if(error?.errors?.length > 0){
            const errors = {};
            error?.errors?.forEach((curr) => {
                errors[curr.path] = curr.message;
            })
            res.status(400).json({ message: "Validation failed", details: errors, isInvalid: true });
        }
        else {
            res.status(500).json({message: "Internal Server Error"})
        }
    }
};

// ✅ Update Employee by ID
exports.updateEmployee = async (req, res) => {
    try {
        const employee = await Employee.findByPk(req.params.id);
        if (!employee) return res.status(404).json({ message: "Employee not found!" });

        await employee.update(req.body);
        res.status(200).json(employee);
    } catch (error) {
        if(error?.errors?.length > 0){
            const errors = {};
            error?.errors?.forEach((curr) => {
                errors[curr.path] = curr.message;
            })
            res.status(400).json({ message: "Validation failed", details: errors, isInvalid: true });
        }
        else {
            res.status(500).json({message: "Internal Server Error"})
        }
    }
};

// ✅ Delete Employee by ID
exports.deleteEmployee = async (req, res) => {
    try {
        const deletedCount = await Employee.destroy({ where: { id: req.params.id } });
        if (!deletedCount) return res.status(404).json({ message: "Employee not found!" });

        res.status(200).json({ message: "Employee deleted successfully" });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// ✅ Bulk Insert Employees
exports.insertMany =  async (req, res) => {
    try {
      const employees = EMPLOYEES; // Expecting an array of employee objects
  
      if (!Array.isArray(employees) || employees.length === 0) {
        return res.status(400).json({ message: "Invalid input data" });
      }
  
      await Employee.bulkCreate(employees);
  
      res.status(200).json({ success: true, message: "Employees added successfully!" });
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: error.message });
    }
  };


