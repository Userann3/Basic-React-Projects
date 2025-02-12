import React from 'react';
import { useState, useEffect } from "react";
import { getEmployees } from "../services/employeeService";
import EmployeeForm from "../components/EmployeeForm";
import EmployeeList from "../components/EmployeeList";

const Home = () => {
  const [employees, setEmployees] = useState([]);
  const [selectedEmployee, setSelectedEmployee] = useState(null);

  const fetchEmployees = async () => {
    const data = await getEmployees();
    setEmployees(data);
  };

  useEffect(() => {
    fetchEmployees();
  }, []);

  return (
    <div className="max-w-2xl mx-auto mt-10">
      <h1 className="text-2xl font-bold text-center mb-4">Employee Management</h1>
      <EmployeeForm fetchEmployees={fetchEmployees} selectedEmployee={selectedEmployee} setSelectedEmployee={setSelectedEmployee} />
      <EmployeeList employees={employees} fetchEmployees={fetchEmployees} setSelectedEmployee={setSelectedEmployee} />
    </div>
  );
};

export default Home;
