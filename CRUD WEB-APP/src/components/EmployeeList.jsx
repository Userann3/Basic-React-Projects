import React , { useState, useEffect } from 'react';
import { deleteEmployee } from "../services/employeeService";
import { FaEdit, FaTrash } from "react-icons/fa";

const EmployeeList = ({ employees, fetchEmployees, setSelectedEmployee }) => {
  const handleDelete = async (id) => {
    await deleteEmployee(id);
    fetchEmployees();
  };

  return (
    <div className="bg-white shadow-md rounded-lg p-4 mt-4">
      <h2 className="text-lg font-semibold mb-2">Employee List</h2>
      {employees.map((emp) => (
        <div key={emp.id} className="flex justify-between p-2 border-b">
          <span>{emp.name} - {emp.position}</span>
          <div className="flex gap-2">
            <button onClick={() => setSelectedEmployee(emp)} className="text-blue-500">
              <FaEdit />
            </button>
            <button onClick={() => handleDelete(emp.id)} className="text-red-500">
              <FaTrash />
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default EmployeeList;
