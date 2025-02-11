import React, { useState, useEffect } from "react";
import { FaCopy } from "react-icons/fa";
import { Slider } from "@mui/material";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function PasswordGenerator() {
  const [length, setLength] = useState(12);
  const [includeNumbers, setIncludeNumbers] = useState(true);
  const [includeSymbols, setIncludeSymbols] = useState(true);
  const [includeUppercase, setIncludeUppercase] = useState(true);
  const [password, setPassword] = useState("");
  const [darkMode, setDarkMode] = useState(false);

  const generatePassword = () => {
    let charset = "abcdefghijklmnopqrstuvwxyz";
    if (includeUppercase) charset += "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    if (includeNumbers) charset += "0123456789";
    if (includeSymbols) charset += "!@#$%^&*()_+={}[]:;<>,.?/";
    
    let newPassword = "";
    for (let i = 0; i < length; i++) {
      newPassword += charset.charAt(Math.floor(Math.random() * charset.length));
    }
    setPassword(newPassword);
  };

  useEffect(() => {
    generatePassword();
  }, [length, includeNumbers, includeSymbols, includeUppercase]);

  const copyToClipboard = () => {
    navigator.clipboard.writeText(password);
    toast.success("Password copied to clipboard!");
  };

  return (
    <div className={`${darkMode ? "bg-gray-900 text-white" : "bg-gray-100 text-black"} flex flex-col items-center justify-center min-h-screen p-4`}>
      <div className="absolute top-4 right-4">
        <button
          onClick={() => setDarkMode(!darkMode)}
          className="px-4 py-2 bg-blue-500 text-white rounded-lg shadow-md hover:bg-blue-600 transition"
        >
          {darkMode ? "Light Mode" : "Dark Mode"}
        </button>
      </div>
      <div className={`${darkMode ? "bg-gray-800" : "bg-white"} p-6 rounded-2xl shadow-lg w-full max-w-lg`}> 
        <h2 className="text-2xl font-semibold text-center mb-4">Advanced Password Generator</h2>
        <div className="flex items-center justify-between bg-gray-700 p-3 rounded-lg mb-4">
        <span className={`text-lg font-mono ${darkMode ? "text-white" : "text-white"}`}>{password}</span>
        <FaCopy className="cursor-pointer text-blue-400 hover:text-blue-500" onClick={copyToClipboard} />
        </div>
        <div className="flex flex-col gap-3">
          <label className="flex items-center justify-between">Length: {length}</label>
          <Slider
            min={6}
            max={32}
            value={length}
            onChange={(e, newValue) => setLength(newValue)}
            sx={{ color: "#3b82f6" }}
          />
          <label className="flex items-center justify-between">
            <span>Include Uppercase</span>
            <input type="checkbox" className="w-5 h-5" checked={includeUppercase} onChange={() => setIncludeUppercase(!includeUppercase)} />
          </label>
          <label className="flex items-center justify-between">
            <span>Include Numbers</span>
            <input type="checkbox" className="w-5 h-5" checked={includeNumbers} onChange={() => setIncludeNumbers(!includeNumbers)} />
          </label>
          <label className="flex items-center justify-between">
            <span>Include Symbols</span>
            <input type="checkbox" className="w-5 h-5" checked={includeSymbols} onChange={() => setIncludeSymbols(!includeSymbols)} />
          </label>
        </div>
      </div>
      <ToastContainer position="top-center" autoClose={2000} />
    </div>
  );
}