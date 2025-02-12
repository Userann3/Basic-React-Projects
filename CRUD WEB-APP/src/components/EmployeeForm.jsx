import React from 'react';
import { useState, useEffect } from "react";
import { addEmployee, updateEmployee } from "../services/employeeService";

const EmployeeForm = ({ fetchEmployees, selectedEmployee, setSelectedEmployee }) => {
  const [formData, setFormData] = useState({ name: "", email: "", position: "" });

  useEffect(() => {
    if (selectedEmployee) setFormData(selectedEmployee);
  }, [selectedEmployee]);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    selectedEmployee
      ? await updateEmployee(selectedEmployee.id, formData)
      : await addEmployee(formData);
    fetchEmployees();
    setFormData({ name: "", email: "", position: "" });
    setSelectedEmployee(null);
  };

  return (
    <form onSubmit={handleSubmit} className="p-4 bg-white shadow-md rounded-lg">
      <input
        type="text"
        name="name"
        placeholder="Name"
        value={formData.name}
        onChange={handleChange}
        className="w-full p-2 border rounded mb-2"
      />
      <input
        type="email"
        name="email"
        placeholder="Email"
        value={formData.email}
        onChange={handleChange}
        className="w-full p-2 border rounded mb-2"
      />
      <input
        type="text"
        name="position"
        placeholder="Position"
        value={formData.position}
        onChange={handleChange}
        className="w-full p-2 border rounded mb-2"
      />
      <button type="submit" className="w-full bg-blue-500 text-white p-2 rounded">
        {selectedEmployee ? "Update Employee" : "Add Employee"}
      </button>
    </form>
  );
};

export default EmployeeForm;
