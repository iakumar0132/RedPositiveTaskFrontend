import axios from "axios";

const apiUrl = process.env.BASE_URL || "http://localhost:5006";
// const apiUrl = `http://localhost:${process.env.PORT || 5005}`;

export const getAllData = async () => {
  try {
    const response = await axios.get(`${apiUrl}/data`);
    return response.data;
  } catch (error) {
    console.error("Error fetching data:", error);
    throw error;
  }
};

export const addData = async (data) => {
  try {
    const response = await axios.post(`${apiUrl}/data`, data);
    return response.data;
  } catch (error) {
    console.error("Error adding data:", error);
    throw error;
  }
};

export const getDataById = async (id) => {
  try {
    const response = await axios.get(`${apiUrl}/data/${id}`);
    return response.data;
  } catch (error) {
    console.error("Error fetching data by ID:", error);
    throw error;
  }
};

export const updateData = async (id, data) => {
  try {
    const response = await axios.put(`${apiUrl}/data/${id}`, data);
    return response.data;
  } catch (error) {
    console.error("Error updating data:", error);
    throw error;
  }
};

export const deleteData = async (id) => {
  try {
    await axios.delete(`${apiUrl}/data/${id}`);
    return true; // Success
  } catch (error) {
    console.error("Error deleting data:", error);
    throw error;
  }
};
