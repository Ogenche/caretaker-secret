// src/components/Journal.jsx
import React from "react";
import { journalData } from "../data/journal.js";

export default function Journal({ isOpen, onClose }) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center p-4 z-10">
      <div className="bg-amber-900/80 backdrop-blur-sm border-2 border-amber-950 rounded-lg shadow-xl w-full max-w-2xl max-h-full overflow-y-auto p-6 font-serif">
        <div className="flex justify-between items-center border-b border-amber-800 pb-3 mb-4">
          <h2 className="text-2xl font-bold text-amber-100">
            Edgar Thornhill's Journal
          </h2>
          <button
            onClick={onClose}
            className="text-amber-200 hover:text-white text-2xl"
          >
            &times;
          </button>
        </div>
        <div className="space-y-6">
          {journalData.map((entry) => (
            <div
              key={entry.id}
              className={`p-4 rounded border border-amber-800 text-amber-50 relative
                ${entry.isBloodStained ? "bg-red-900/30" : "bg-black/20"}
                ${entry.isDamaged ? "opacity-95" : ""}`}
            >
              <h3 className="font-bold text-amber-200">{entry.date}</h3>
              <div className="mt-2 space-y-3 text-amber-100 leading-relaxed italic">
                {entry.content.map((paragraph, index) => (
                  <p
                    key={index}
                    className={
                      paragraph.includes("HVJNBS XFDSFY")
                        ? "font-mono text-lg text-green-300"
                        : ""
                    }
                  >
                    {paragraph}
                  </p>
                ))}
              </div>
              {entry.isBloodStained && (
                <div className="absolute top-2 right-2 text-xs text-red-300">
                  [Page is blood-stained]
                </div>
              )}
            </div>
          ))}
        </div>
        <button
          onClick={onClose}
          className="mt-6 w-full bg-amber-800 hover:bg-amber-700 text-white font-bold py-2 px-4 rounded"
        >
          Close Journal
        </button>
      </div>
    </div>
  );
}
