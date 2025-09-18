// src/components/Suspects.jsx
import React from "react";
import { suspectsData } from "../data/suspects.js"; // Import our data

export default function Suspects({ isOpen, onClose }) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center p-4 z-10">
      <div className="bg-gray-800 rounded-lg shadow-xl w-full max-w-4xl max-h-full overflow-y-auto p-6 font-serif">
        <div className="flex justify-between items-center border-b border-gray-600 pb-3 mb-4">
          <h2 className="text-2xl font-bold text-red-500 tracking-wider">
            SUSPECT DOSSIERS
          </h2>
          <button
            onClick={onClose}
            className="text-gray-400 hover:text-white text-2xl"
            aria-label="Close"
          >
            &times;
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {/* We map over the array of suspects and render a card for each one */}
          {suspectsData.map((suspect) => (
            <div
              key={suspect.name}
              className="bg-gray-900/50 p-4 rounded-lg border border-gray-700 flex flex-col"
            >
              <h3 className="text-xl font-bold text-red-400">{suspect.name}</h3>
              <p className="text-sm text-gray-400 mb-2">
                {suspect.age}, {suspect.position}
              </p>
              <p className="text-gray-300 text-sm flex-grow">{suspect.notes}</p>
            </div>
          ))}
        </div>

        <button
          onClick={onClose}
          className="mt-6 w-full bg-red-600 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
        >
          Close Dossiers
        </button>
      </div>
    </div>
  );
}
