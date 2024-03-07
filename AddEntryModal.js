import React, { useState } from "react";
import { addData } from "./api";

const AddEntryModal = ({ isOpen, onClose }) => {
  const [formData, setFormData] = useState({
    name: "",
    phoneNumber: "",
    email: "",
    hobbies: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await addData(formData);
      onClose(); // Close the modal after adding data
    } catch (error) {
      console.error("Error adding data:", error);
      // Handle error
    }
  };

  return (
    <div className={`modal ${isOpen ? "block" : "hidden"}`}>
      <div className="modal-overlay" onClick={onClose}></div>
      <div className="modal-container">
        <div className="modal-header">
          <h3>Add New Entry</h3>
          <button className="close-button" onClick={onClose}>
            X
          </button>
        </div>
        <div className="modal-body">
          <form onSubmit={handleSubmit}>
            {/* Form fields */}
            <button type="submit">Save</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AddEntryModal;
