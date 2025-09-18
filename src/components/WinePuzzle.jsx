// src/components/WinePuzzle.jsx
import React, { useState, useRef } from "react";
import { winePuzzleData } from "../data/puzzles.js";
import { useGame } from "../GameContext.jsx"; // Import the hook

export default function WinePuzzle({ isOpen, onClose, onSolve }) {
  // Add onSolve prop
  const { solvePuzzle } = useGame(); // Get the function from context
  const [bottles, setBottles] = useState(winePuzzleData.bottles);
  const [slots, setSlots] = useState(Array(5).fill(null));
  const [isSolved, setIsSolved] = useState(false);
  const dragItem = useRef(null);

  const handleDrop = (e, index) => {
    e.preventDefault();
    const bottle = dragItem.current;
    if (!bottle || slots.includes(bottle)) return;

    const newSlots = [...slots];
    newSlots[index] = bottle;
    setSlots(newSlots);

    const placedYears = newSlots.filter((b) => b).map((b) => b.year);
    if (placedYears.length === winePuzzleData.correctSequence.length) {
      if (
        JSON.stringify(placedYears) ===
        JSON.stringify(winePuzzleData.correctSequence)
      ) {
        setIsSolved(true);
        solvePuzzle("wine"); // <<< ADD THIS LINE
        onSolve(); // <<< ADD THIS LINE to trigger next step
      }
    }
  };

  const resetPuzzle = () => {
    setSlots(Array(5).fill(null));
    setIsSolved(false);
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center p-4 z-20">
      <div className="bg-slate-800 border-2 border-slate-600 rounded-lg shadow-xl w-full max-w-3xl p-6 font-serif">
        <div className="flex justify-between items-center border-b border-slate-600 pb-3 mb-4">
          <h2 className="text-2xl font-bold text-slate-100">
            {winePuzzleData.title}
          </h2>
          <button
            onClick={onClose}
            className="text-slate-300 hover:text-white text-2xl"
          >
            &times;
          </button>
        </div>
        <p className="text-sm text-slate-300 mb-4">
          {winePuzzleData.instructions}
        </p>

        <div className="bg-slate-900/50 p-4 rounded-lg mb-4 flex justify-around items-end h-48 border-2 border-dashed border-slate-700">
          {slots.map((bottle, index) => (
            <div
              key={index}
              onDragOver={(e) => e.preventDefault()}
              onDrop={(e) => handleDrop(e, index)}
              className="w-1/5 h-full flex items-center justify-center border-x border-slate-700"
            >
              {bottle ? (
                <div className="bg-green-900 text-white w-16 h-40 flex flex-col justify-between p-2 rounded-t-lg border-2 border-green-700 text-center">
                  <span className="text-xs">{bottle.event}</span>
                  <span className="text-2xl font-bold">{bottle.year}</span>
                </div>
              ) : (
                <span className="text-slate-500">Slot {index + 1}</span>
              )}
            </div>
          ))}
        </div>

        <div className="bg-slate-700/30 p-4 rounded flex flex-wrap justify-center gap-4">
          {bottles.map((bottle, index) => (
            <div
              key={index}
              draggable
              onDragStart={() => (dragItem.current = bottle)}
              className="bg-green-900 cursor-grab text-white w-16 h-40 flex flex-col justify-between p-2 rounded-t-lg border-2 border-green-700 text-center hover:scale-105 transition-transform"
            >
              <span className="text-xs">{bottle.event}</span>
              <span className="text-2xl font-bold">{bottle.year}</span>
            </div>
          ))}
        </div>

        {isSolved && (
          <div className="mt-4 p-4 bg-yellow-900/50 border border-yellow-700 text-yellow-200 rounded text-center">
            <p>{winePuzzleData.successMessage}</p>
          </div>
        )}

        <button
          onClick={resetPuzzle}
          className="mt-4 w-full bg-red-700 hover:bg-red-600 text-white font-bold py-2 px-4 rounded"
        >
          Reset
        </button>
      </div>
    </div>
  );
}
