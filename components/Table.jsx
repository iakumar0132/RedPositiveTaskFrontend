import React, { useState } from "react";
import axios from 'axios'; // Import axios for making HTTP requests

const Table = ({ data }) => {
  const [selectedRows, setSelectedRows] = useState([]);

  const handleRowSelect = (id) => {
    // Toggle selection of rows
    const newSelectedRows = selectedRows.includes(id)
      ? selectedRows.filter((rowId) => rowId !== id)
      : [...selectedRows, id];
    setSelectedRows(newSelectedRows);
  };

  const handleSendEmail = () => {
    // Collect data of selected rows and send it via email
    const selectedData = data.filter((row) => selectedRows.includes(row._id));
    
    // Make a POST request to your backend endpoint
    axios.post('/data', selectedData)
      .then(response => {
        console.log('Email sent successfully');
        // Optionally, display a success message to the user
      })
      .catch(error => {
        console.error('Error sending email:', error);
        // Optionally, display an error message to the user
      });
  };

  return (
    <div className="p-4">
      <button
        onClick={handleSendEmail}
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
      >
        Send Email
      </button>
      <table className="w-full mt-4">
        <thead>
          <tr>
            <th className="px-4 py-2">#</th>
            <th className="px-4 py-2">Name</th>
            <th className="px-4 py-2">Phone Number</th>
            <th className="px-4 py-2">Email</th>
            <th className="px-4 py-2">Hobbies</th>
            <th className="px-4 py-2">Select</th>
          </tr>
        </thead>
        <tbody>
          {data.map((row) => (
            <tr key={row._id}>
              <td className="border px-4 py-2">{row._id}</td>
              <td className="border px-4 py-2">{row.name}</td>
              <td className="border px-4 py-2">{row.phoneNumber}</td>
              <td className="border px-4 py-2">{row.email}</td>
              <td className="border px-4 py-2">{row.hobbies}</td>
              <td className="border px-4 py-2">
                <input
                  type="checkbox"
                  onChange={() => handleRowSelect(row._id)}
                  className="form-checkbox h-5 w-5 text-blue-500"
                />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Table;