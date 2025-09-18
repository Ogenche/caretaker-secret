// src/components/HistoricalDocuments.jsx
import React from "react";
import { documentsData } from "../data/documents.js";

export default function HistoricalDocuments({ isOpen, onClose }) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center p-4 z-10">
      <div className="bg-stone-200 text-black rounded-lg shadow-xl w-full max-w-4xl max-h-full overflow-y-auto p-6 font-serif">
        <div className="flex justify-between items-center border-b-2 border-stone-400 pb-3 mb-4">
          <h2 className="text-2xl font-bold text-stone-800">
            Historical Archives
          </h2>
          <button
            onClick={onClose}
            className="text-stone-600 hover:text-black text-2xl"
          >
            &times;
          </button>
        </div>
        <div className="space-y-6">
          {documentsData.map((doc) => (
            <div
              key={doc.id}
              className="bg-stone-100 p-4 rounded border border-stone-300"
            >
              <p className="text-sm text-stone-600">
                {doc.source} - {doc.date}
              </p>
              <h3 className="text-xl font-bold my-1 text-stone-900">
                {doc.headline}
              </h3>
              <p className="text-xs text-stone-500 italic mb-3">{doc.author}</p>
              <div className="space-y-3 text-stone-800 text-sm leading-relaxed">
                {doc.body.map((paragraph, index) => (
                  <p key={index}>{paragraph}</p>
                ))}
              </div>
            </div>
          ))}
        </div>
        <button
          onClick={onClose}
          className="mt-6 w-full bg-stone-700 hover:bg-stone-800 text-white font-bold py-2 px-4 rounded"
        >
          Close Archives
        </button>
      </div>
    </div>
  );
}
