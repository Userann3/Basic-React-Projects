import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { Pencil, Trash2, Search } from 'lucide-react';

const EmployeeList = () => {
  const [employees, setEmployees] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    fetchEmployees();
  }, []);

  const fetchEmployees = async () => {
    try {
      const response = await axios.get('http://localhost:3001/employees');
      setEmployees(response.data);
    } catch (error) {
      console.error('Error fetching employees:', error.message);
    }
  };

  const handleDelete = async (id) => {
    if (window.confirm('Are you sure you want to delete this employee?')) {
      try {
        await axios.delete(`http://localhost:3001/employees/${id}`);
        fetchEmployees();
      } catch (error) {
        console.error('Error deleting employee:', error.message);
      }
    }
  };

  const filteredEmployees = employees.filter((employee) => {
    const searchValue = searchTerm.toLowerCase();
    return (
      employee.name.toLowerCase().includes(searchValue) ||
      employee.email.toLowerCase().includes(searchValue) ||
      employee.position.toLowerCase().includes(searchValue)
    );
  });

  return (
    <div>
      <div className="mb-8">
        <div className="relative">
          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
            <Search className="h-5 w-5 text-gray-400" />
          </div>
          <input
            type="text"
            placeholder="Search employees by name, email, or position..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="pl-10 w-full px-4 py-3 bg-white border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 shadow-sm transition-all duration-200"
          />
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredEmployees.map((employee) => (
          <div key={employee.id} className="bg-white rounded-lg shadow-md overflow-hidden transform hover:scale-[1.02] transition-transform duration-200">
            <img
              src={employee.avatar}
              alt={employee.name}
              className="w-full h-48 object-cover"
            />
            <div className="p-4">
              <h3 className="text-xl font-semibold text-gray-800">{employee.name}</h3>
              <p className="text-indigo-600 font-medium">{employee.position}</p>
              <p className="text-gray-500 text-sm">{employee.email}</p>
              <div className="mt-4 flex justify-end space-x-2">
                <button
                  onClick={() => navigate(`/edit/${employee.id}`)}
                  className="p-2 text-blue-600 hover:bg-blue-50 rounded-full transition-colors duration-200"
                >
                  <Pencil className="h-5 w-5" />
                </button>
                <button
                  onClick={() => handleDelete(employee.id)}
                  className="p-2 text-red-600 hover:bg-red-50 rounded-full transition-colors duration-200"
                >
                  <Trash2 className="h-5 w-5" />
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
      
      {filteredEmployees.length === 0 && (
        <div className="text-center py-12">
          <p className="text-gray-500 text-lg">
            {employees.length === 0 
              ? "No employees found. Add some employees to get started!"
              : "No employees match your search criteria."}
          </p>
        </div>
      )}
    </div>
  );
};

export default EmployeeList;