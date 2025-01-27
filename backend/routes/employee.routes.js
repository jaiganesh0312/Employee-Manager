const express = require("express");
const router = express.Router();

const Employee = require("../models/employee.model");

//const validateForm = require("../util/validation");

//const employees = require("../util/data");

const LIMIT = 12;

router.get("/", async (req, res) => {
  try {
    const { keyword = "", page = 1 } = req.query;
    const searchKeyword = keyword.toLowerCase();

    const query = searchKeyword
      ? { name: { $regex: `^${searchKeyword}`, $options: "i" } }
      : {};

    const skip = (Number(page) - 1) * LIMIT;

    const employees = await Employee.find(query).skip(skip).limit(LIMIT);

    const totalCount = await Employee.countDocuments(query);

    res.status(200).json({
      data: employees,
      total: totalCount,
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

router.get("/:id", async (req, res, next) => {
  const { id } = req.params;
  try {
    const employee = await Employee.findById(id);
    if (!employee) {
      return res.status(404).json({ message: "Employee not found!" });
    }
    res.status(200).json(employee);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

router.post("/", async (req, res, next) => {
  try {
 
    const employee = await Employee.create(req.body);
    res.status(200).json(employee);
  } catch (error) {
    console.log(error);

    if (error._message === 'Employee validation failed') {
      console.log("failed!!!!")
      const errorDetails = {};

      for (let field in error.errors) {
        errorDetails[field] = error.errors[field].message; 
      }

      return res.status(400).json({
        error: "Validation failed",
        details: errorDetails,
        isInvalid: true
      });
    }

   
    res.status(500).json({
      error: "Internal server error"
    });
  }
});




router.put("/:id", async (req, res, next) => {
  const { id } = req.params;

  try {
   
    const employee = await Employee.findById(id);
    if (!employee) {
      return res.status(404).json({ message: "Employee not found!" });
    }

    Object.assign(employee, req.body); 
    await employee.validate(); 
    const updatedEmployee = await employee.save();
    res.status(200).json(updatedEmployee);

  } catch (error) {
      if (error._message === 'Employee validation failed') {
        console.log("failed!!!!")
        const errorDetails = {};

        for (let field in error.errors) {
          errorDetails[field] = error.errors[field].message; 
        }

        return res.status(400).json({
          error: "Validation failed",
          details: errorDetails,
          isInvalid: true
        });
    }

    res.status(500).json({ message: "Server Error", error: error.message });
  }
});


router.delete("/:id", async (req, res, next) => {
  const { id } = req.params;
  try {
    const employee = await Employee.findByIdAndDelete(id);
    if (!employee) {
      return res.status(404).json({ message: "Employee not found!" });
    }
    res.status(200).json(employee);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// router.post("/storeAll", async (req, res, next) => {
//     try {
//         await Employee.insertMany(employees);
//         res.status(200).json({success: true});
//     } catch(error) {
//         res.status(500).send({message: error.message});
//     }
// });

module.exports = router;


// router.get("/get", (req, res, next) => {
//     let {page, keyword} = req.query;
//     page = Number(page);
//     keyword = keyword.toLowerCase();
//     const start = (page - 1) * limit;
//     const end = page * limit;
//     const filteredEmployees = keyword && keyword.length > 0 ? employees.filter((employee) => employee.name.toLowerCase().startsWith(keyword)) : employees;
//     if(start >= employees.length){
//         res.status(400).json({
//             error: true,
//             message: "Something went wrong!"
//         });
//     }
//     else {
//         const data = filteredEmployees.slice(start, end);
//         res.status(200).json({
//             error: false,
//             data: {
//                 data: data,
//                 count: filteredEmployees.length
//             },
//             message: "Data Fetched Successfully!!"
//         });
//     }

// })

// router.get("/search/:keyword", (req, res, next) =>{
//     const {keyword} = req.params;
//     const data = employees.filter((employee) => employee.name.startsWith(keyword));
//     res.status(200).json({
//         error: false,
//         data: data,
//         message: "Filtered Data Fetched Successfully!!"
//     });
// });

// router.get("/search/:keyword", (req, res, next) =>{
//     const {keyword, page} = req.params;
//     const data = employees.filter((employee) => employee.name.startsWith(keyword));
//     const start = (page - 1) * limit;
//     const end = page * limit;

//     const filteredEmployees = data.slice(start, end);
//     res.json({
//         error: false,
//         data: filteredEmployees,
//         message: "Data Fetched Successfully!!"
//     });
// });

// router.get("/details/:id", (req, res, next) => {
//     let {id} = req.params;
//     id = Number(id);
//     const index = getEmployeeIndex(id);
//     if(index === -1){
//         res.status(500).json({
//             error: true,
//             message: `Employee with id ${id} not found`
//         });
//     }
//     else {
//         res.status(200).json({
//             error: false,
//             data: employees[index],
//             message: "Data Fetched Successfully!!"
//         });
//     }
// });

// router.post("/create", (req, res, next) => {
//     const {name, email, salary, role, phone, location} = req.body;
//     const id = employees.length === 0 ? 1 : employees[employees.length - 1].id + 1;
//     const employee = {
//         id, name, email, salary, role, phone, location
//     };

//     const valid = validateForm(employee);
//     if(valid.error){
//         res.status(400).json(valid);
//     }
//     else {
//         employees.push(employee);
//         res.status(200).json({
//             error: false,
//             data: employee,
//             message: "Resource Created Successfully!!"
//         });
//     }

// });


// router.put("/update/:id", (req, res, next) => {
//     const {name, email, salary, role, phone, location} = req.body;
//     let {id} = req.params;
//     id = Number(id);
//     const index = getEmployeeIndex(id);
//     if(index === -1){
//         res.status(500).json({
//             error: true,
//             message: `Employee with id ${id} not found`
//         });
//     }
//     else {
//         const employee = {
//             id, name, email, salary, role, phone, location
//         };
//         const valid = validateForm(employee);
//         if(valid.error){
//             res.status(400).json(valid);
//         }
//         else {
//             employees[index] = employee;
//             res.status(200).json({
//                 error: false,
//                 data: employee,
//                 message: "Resource Updated Successfully!!"
//             });
//         }
//     }
// });


// const getEmployeeIndex = (id) => employees.findIndex((employee) => employee.id === id);

// router.delete("delete/:id", (req, res, next) => {
//     let {id} = req.params;
//     id = Number(id);
//     const index = getEmployeeIndex(id);
//     if(index === -1){
//         res.status(500).json({
//             error: true,
//             message: `Employee with id ${id} not found`
//         });
//     }
//     else {
//         const employee = employees.splice(index, 1);
//         res.json({
//             error: false,
//             data: employee,
//             message: "Resource Deleted Successfully!!"
//         })
//     }

// });

