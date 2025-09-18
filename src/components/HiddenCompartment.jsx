// src/components/HiddenCompartment.jsx
import React from "react";
import { useGame } from "../GameContext.jsx";

export default function HiddenCompartment({ isOpen, onClose }) {
  const { addClue } = useGame();

  const handleDiscoverFiles = () => {
    addClue("project_echo_files");
    addClue("victoria_blackmail");
    onClose(); // Close the modal after discovery
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center p-4 z-30">
      <div className="bg-gray-800 border-2 border-gray-600 rounded-lg shadow-xl w-full max-w-xl p-6 font-serif text-white">
        <h2 className="text-2xl font-bold text-yellow-400 mb-4">
          The Hidden Compartment
        </h2>
        <p className="mb-4 text-gray-300">
          Inside the dark, dusty space, you find a locked metal box. Forcing it
          open, you discover a collection of old, classified-looking files and
          what appears to be a series of blackmail notes.
        </p>
        <p className="mb-6 text-gray-300">
          A quick glance reveals the files are about **"Project Echo"**. The
          notes, written by Edgar, are addressed to Victoria Blackwood. You've
          found the secret Edgar was protecting.
        </p>
        <button
          onClick={handleDiscoverFiles}
          className="w-full bg-yellow-600 hover:bg-yellow-700 text-black font-bold py-3 px-4 rounded"
        >
          Add Files to Evidence Board and Return
        </button>
      </div>
    </div>
  );
}
