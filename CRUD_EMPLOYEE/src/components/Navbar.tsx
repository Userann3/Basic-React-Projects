import React from 'react';
import { Link } from 'react-router-dom';
import { Users, UserPlus } from 'lucide-react';

const Navbar = () => {
  return (
    <nav className="bg-indigo-600 text-white shadow-lg">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <Link to="/" className="flex items-center space-x-2 text-xl font-bold">
            <Users className="h-6 w-6" />
            <span>Employee Manager</span>
          </Link>
          <Link
            to="/add"
            className="flex items-center space-x-1 bg-indigo-500 hover:bg-indigo-400 px-4 py-2 rounded-md transition-colors"
          >
            <UserPlus className="h-5 w-5" />
            <span>Add Employee</span>
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;