import React, { useState, useEffect } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Panel = ({ index, color, totalPanels }) => {
  return (
    <div
      className="relative flex flex-col items-center justify-center transition-all duration-500 w-full h-full"
      style={{ backgroundColor: color }}
    >
      <p className="text-white font-bold">Panel {index + 1}</p>
    </div>
  );
};

export default function App() {
  const [panels, setPanels] = useState(() => parseInt(localStorage.getItem("panels")) || 1);
  const [colors, setColors] = useState(() => JSON.parse(localStorage.getItem("colors")) || ["#ff0000"]);

  const getRandomColor = () => `#${Math.floor(Math.random() * 16777215).toString(16).padStart(6, "0")}`;

  useEffect(() => {
    localStorage.setItem("panels", panels);
    localStorage.setItem("colors", JSON.stringify(colors));
  }, [panels, colors]);

  useEffect(() => {
    const handleSpacebar = (event) => {
      if (event.code === "Space") {
        setColors((prevColors) => prevColors.map(() => getRandomColor()));
      }
    };
    window.addEventListener("keydown", handleSpacebar);
    return () => window.removeEventListener("keydown", handleSpacebar);
  }, []);

  const handleColorChange = (index, color) => {
    const newColors = [...colors];
    newColors[index] = color;
    setColors(newColors);
  };

  const copyColor = (color) => {
    navigator.clipboard.writeText(color);
    toast.success(`Copied: ${color}`, { position: "top-right", autoClose: 2000 });
  };

  const changePanels = (num) => {
    setPanels(num);
    setColors((prevColors) => {
      const newColors = [...prevColors];
      while (newColors.length < num) newColors.push(getRandomColor());
      return newColors.slice(0, num);
    });
  };

  return (
    <div className="h-screen flex flex-col">
      <ToastContainer />
      <div className="flex w-full h-3/4">
        {Array.from({ length: panels }).map((_, index) => (
          <Panel key={index} index={index} color={colors[index]} totalPanels={panels} />
        ))}
      </div>
      <div className="w-full h-1/4 bg-gray-900 text-white flex flex-col items-center p-5 gap-3">
        <h2 className="text-xl font-semibold">Tools</h2>
        <div className="flex flex-wrap justify-center gap-4">
          {colors.map((color, index) => (
            <div key={index} className="flex items-center bg-gray-800 p-2 rounded-lg">
              <input
                type="color"
                value={color}
                onChange={(e) => handleColorChange(index, e.target.value)}
                className="w-10 h-10 cursor-pointer"
              />
              <span
                className="ml-2 px-2 py-1 bg-gray-700 rounded text-sm cursor-pointer"
                onClick={() => copyColor(color)}
              >
                {color}
              </span>
            </div>
          ))}
        </div>
        <div className="flex gap-3 mt-2">
          {[1, 2, 3, 4].map((num) => (
            <button key={num} className="px-4 py-2 bg-blue-600 rounded-lg" onClick={() => changePanels(num)}>
              {num} Panels
            </button>
          ))}
          <button className="px-4 py-2 bg-red-600 rounded-lg" onClick={() => localStorage.clear()}>Reset</button>
        </div>
      </div>
    </div>
  );
}
