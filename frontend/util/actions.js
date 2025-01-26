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

const postData = async (formData) => {
    
    try {
        const res = await axios.post("http:/localhost:5000/employees", formData);
        return res.data;
    } catch(error) {
        console.log("Error Creating Resorce", error.message)
        return null;
    }
}

const putData = async (formData, id) => {
    try {
        const res = await axios.put(`http:/localhost:5000/employees/${id}`, formData);
        return res.data;
    } catch(error){
        console.log("Error Creating Resorce", error.message)
        return null;
    }
}

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
