"use server"
import axios from "axios";


const fetchData = async (currentPage, keyword) => {
    try {
        const res = await axios.get(`http://localhost:5000/employees?page=${currentPage}&keyword=${keyword}`);

        if (res.status === 200) {
            return res.data; 
        } 
        else {
           
            console.error('Error fetching data:', res.statusText);
            return null;
        }
    } catch (error) {
        console.error('Error fetching data:', error.message);
        return null;
    }
};



// Post request to create a new employee
const postData = async (formData) => {
  try {
    const res = await axios.post("http://localhost:5000/employees", formData);
    return res.data; // Return the response data, which could be the created employee or error messages
  } catch (error) {
    // Log the error for debugging purposes
    console.log("Error Creating Resource:", error.message);

    // Check if the error response exists and return it
    if (error.response) {
      return error.response.data; // Return the response data with error details
    }

    // Handle cases where the error is not in the response (e.g., network error)
    return { isInvalid: true, message: error.message };
  }
};

// Put request to update an existing employee by id
const putData = async (formData, id) => {
  try {
    const res = await axios.put(`http://localhost:5000/employees/${id}`, formData);
    return res.data; // Return the response data, which could be the updated employee or error messages
  } catch (error) {
    // Log the error for debugging purposes
    console.log("Error Updating Resource:", error.message);

    // Check if the error response exists and return it
    if (error.response) {
      return error.response.data; // Return the response data with error details
    }

    // Handle cases where the error is not in the response (e.g., network error)
    return { isInvalid: true, message: error.message };
  }
};




const getById = async(id) => {
    try {
        const res = await axios.get(`http:/localhost:5000/employees/${id}`);
        return res.data;
    } catch(error){
        console.log("Error Creating Resorce", error.message);
        return null;
    }
}

const deleteData = async(id) => {
    try {
        const res = await  axios.delete(`http:/localhost:5000/employees/${id}`);
        return res.data;
    } catch(error){
        console.log("Error Deleting Resource", error.message);
        return null;
    }
}
 

export { fetchData, postData, putData, getById, deleteData };
