// pages/index.js
import React, { useState } from "react";
import AddForm from "../components/AddForm";
import Table from "../components/Table";
import '../app/globals.css';

export default function Home() {
  const [data, setData] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false); // State to manage modal visibility

  const handleAdd = (newData) => {
    setData([...data, newData]);
    setIsModalOpen(false); // Close the modal after adding data
  };

  const handleOpenModal = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold text-center mb-8">CRUDS Application</h1>
      <button
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded inline-block mb-4"
        onClick={handleOpenModal}
      >
        Add New Entry
      </button>
      <AddForm
        handleAdd={handleAdd}
        isOpen={isModalOpen}
        onClose={handleCloseModal}
      />
      <div className="mt-8">
        <Table data={data} />
      </div>
    </div>
  );
}
