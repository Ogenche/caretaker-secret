// src/components/EvidenceBoard.jsx
import React from "react";
import { useGame } from "../GameContext.jsx";

const ClueCard = ({ clue }) => {
  const typeStyles = {
    official: "bg-blue-900/50 border-blue-700 text-blue-200",
    discovery: "bg-yellow-900/50 border-yellow-700 text-yellow-200",
    secret: "bg-red-900/50 border-red-700 text-red-200",
  };

  return (
    <div
      className={`p-3 rounded-lg border ${
        typeStyles[clue.type] || "bg-gray-700 border-gray-600"
      } transform -rotate-2 hover:rotate-0 hover:scale-105 transition-transform`}
    >
      <h4 className="font-bold text-lg">{clue.title}</h4>
      <p className="text-sm">{clue.content}</p>
    </div>
  );
};

export default function EvidenceBoard({ isOpen, onClose }) {
  const { unlockedClues, allClues } = useGame();

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center p-4 z-20">
      <div
        className="bg-cork-pattern bg-cover bg-center border-8 border-amber-950 rounded-lg shadow-xl w-full max-w-5xl h-5/6 p-6 font-serif flex flex-col"
        style={{
          backgroundImage: `url('https://www.transparenttextures.com/patterns/cork-wallet.png')`,
        }}
      >
        <div className="flex justify-between items-center pb-3 mb-4 flex-shrink-0">
          <h2 className="text-3xl font-bold text-white bg-black/50 px-2 py-1 rounded">
            Investigation Board
          </h2>
          <button
            onClick={onClose}
            className="text-white bg-black/50 rounded-full w-8 h-8 text-2xl"
          >
            &times;
          </button>
        </div>

        <div className="w-full h-full overflow-y-auto pr-2">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {unlockedClues.map((clueId) => (
              <ClueCard key={clueId} clue={allClues[clueId]} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
