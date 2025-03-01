"use client";
import axios from "axios";

class ValidationError extends Error {
  constructor(message, field) {
    super(message);
    this.name = 'Validation failed';
    this.field = field; // Custom property
  }
}

export const fetchData = async (currentPage, keyword) => {
  try {
    const res = await axios.get(
      `http://localhost:5000/employees?page=${currentPage}&keyword=${keyword}`
    );

    if (res.status === 200) {
      return res.data;
    } else {
      console.error("Error fetching data:", res.statusText);
      return null;
    }
  } catch (error) {
    console.error("Error fetching data:", error.message);
    return null;
  }
};

// Post request to create a new employee

export const postData = async (formData) => {
  try {
    const response = await axios.post('http://localhost:5000/employees', formData);
    return response.data;
  } catch (error) {
    //console.error(error.name, error.message);
    if (error.response?.data?.isInvalid) {
      const errorData = error.response?.data || {};
      const err = new Error(error.message);
      err.details = errorData.details;
      err.name = "Validation failed"
      throw err;
    } else {
      const err = new Error( "Internal Server Error");
      err.name = "Server Error";
      throw err;
    }
  }
}

// Put request to update an existing employee by id
export const putData = async (formData, id) => {
  try {
    const res = await axios.put(
      `http://localhost:5000/employees/${id}`,
      formData
    );
    return res.data; // Return the response data, which could be the updated employee or error messages
  } catch (error) {
    if (error.response?.data?.isInvalid) {
      const errorData = error.response?.data || {};
      const err = new Error(error.message);
      err.details = errorData.details;
      err.name = "Validation failed"
      throw err;
    } else {
      const err = new Error( "Internal Server Error");
      err.name = "Server Error";
      throw err;
    }
  }
};

export const getById = async (id) => {
  try {
    console.log("Id in action:", id);
    const res = await axios.get(`http:/localhost:5000/employees/${id}`);
    return res.data;
  } catch (error) {
    console.log("Error Getting Resorce", error.message);
    console.log("My error", JSON.stringify(error, null, 2));
    return null;
  }
};

export const deleteData = async (id) => {
  try {
    const res = await axios.delete(`http:/localhost:5000/employees/${id}`);
    return res.data;
  } catch (error) {
    console.log("Error Deleting Resource", error.message);
    return null;
  }
};

export const fetchAll = async () => { 
  try {
    const res = await axios.get("http://localhost:5000/employees/getAll");
    if (res.status === 200) {
      return res.data;
    } else {
      console.error("Error fetching data:", res.statusText);
      return null;
    }
  } catch (error) {
    console.log("Error Fetching Resources", error.message);
    return null;
  }
}

