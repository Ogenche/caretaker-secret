// src/components/Map.jsx
import React from "react";

export default function Map({ isOpen, onClose }) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center p-4 z-10">
      <div className="bg-gray-800 rounded-lg shadow-xl w-full max-w-2xl max-h-full overflow-y-auto p-6 font-serif">
        <div className="flex justify-between items-center border-b border-gray-600 pb-3 mb-4">
          <h2 className="text-2xl font-bold text-red-500 tracking-wider">
            RESORT MAP: Evergreen Lodge
          </h2>
          <button
            onClick={onClose}
            className="text-gray-400 hover:text-white text-2xl"
            aria-label="Close"
          >
            &times;
          </button>
        </div>

        {/* Legend */}
        <div className="flex flex-wrap gap-x-4 gap-y-2 text-xs mb-4 text-gray-300">
          <div className="flex items-center gap-2">
            <div className="w-4 h-4 bg-green-800 border border-green-500"></div>
            <span>Public Area</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-4 h-4 bg-red-800 border border-red-500"></div>
            <span>Restricted Area</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-4 h-4 bg-blue-800 border border-blue-500"></div>
            <span>Service Area</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-4 h-4 bg-stone-800 border border-stone-500"></div>
            <span>Underground</span>
          </div>
        </div>

        {/* Map Grid */}
        <div className="grid grid-cols-3 grid-rows-3 gap-2 text-center text-sm font-semibold border-2 border-gray-600 p-2 rounded">
          <div className="bg-gray-700 p-4 rounded col-span-1 row-span-2 flex items-center justify-center">
            Parking
          </div>
          <div className="bg-gray-700 p-4 rounded col-span-2 row-span-1 flex items-center justify-center">
            Forest Trails
          </div>
          <div className="bg-green-800 border border-green-500 p-8 rounded col-span-1 row-span-2 flex items-center justify-center">
            Main Lodge
          </div>
          <div className="bg-red-800 border border-red-500 p-8 rounded col-span-1 row-span-2 flex items-center justify-center">
            East Wing (Restricted)
          </div>
          <div className="bg-blue-800 border border-blue-500 p-4 rounded flex items-center justify-center">
            Kitchen
          </div>
          <div className="bg-stone-800 border border-stone-500 p-2 rounded flex items-center justify-center text-xs">
            Wine Cellar (Crime Scene)
          </div>
          <div className="bg-yellow-800 border border-yellow-500 p-4 rounded flex items-center justify-center">
            Staff Quarters
          </div>
          <div className="bg-blue-800 border border-blue-500 p-4 rounded flex items-center justify-center">
            Security
          </div>
        </div>

        <button
          onClick={onClose}
          className="mt-6 w-full bg-red-600 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
        >
          Close Map
        </button>
      </div>
    </div>
  );
}
