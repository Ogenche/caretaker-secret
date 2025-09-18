// src/components/CipherDecoder.jsx
import React, { useState } from "react";
import { cipherPuzzleData } from "../data/puzzles.js";
import { useGame } from "../GameContext.jsx"; // Import the hook

export default function CipherDecoder({ isOpen, onClose }) {
  const { solvePuzzle } = useGame(); // Get the function from context
  const [keyInput, setKeyInput] = useState("");
  const [decodedMessage, setDecodedMessage] = useState("");
  const [isSolved, setIsSolved] = useState(false);

  const handleDecode = () => {
    const key = cipherPuzzleData.key;
    const encoded = cipherPuzzleData.encodedString
      .toUpperCase()
      .replace(/\s/g, "");
    let decoded = "";

    if (keyInput.replace(/\s/g, "") !== key) {
      setDecodedMessage("ERROR: INVALID KEY");
      setIsSolved(false);
      return;
    }

    for (let i = 0; i < encoded.length; i++) {
      const charCode = encoded.charCodeAt(i);
      if (charCode < 65 || charCode > 90) {
        decoded += encoded[i];
        continue;
      }
      const keyDigit = parseInt(key[i % key.length]);
      let decodedCharCode = charCode - keyDigit;
      if (decodedCharCode < 65) {
        decodedCharCode += 26;
      }
      decoded += String.fromCharCode(decodedCharCode);
    }

    const finalMessage = decoded.slice(0, 6) + " " + decoded.slice(6);
    setDecodedMessage(finalMessage);

    if (finalMessage === cipherPuzzleData.solution) {
      setIsSolved(true);
      solvePuzzle("cipher"); // <<< ADD THIS LINE
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center p-4 z-20">
      <div className="bg-gray-900 border-2 border-green-500 rounded-lg shadow-xl w-full max-w-md p-6 font-mono text-green-300">
        <div className="flex justify-between items-center border-b border-green-700 pb-3 mb-4">
          <h2 className="text-xl font-bold">Cipher Decoder K-71550</h2>
          <button
            onClick={onClose}
            className="text-green-300 hover:text-white text-2xl"
          >
            &times;
          </button>
        </div>
        <p className="text-sm text-green-400 mb-4">
          {cipherPuzzleData.instructions}
        </p>

        <div className="mb-4">
          <label className="block text-sm mb-1">ENCODED MESSAGE:</label>
          <div className="bg-black p-3 rounded border border-green-800 text-lg tracking-widest">
            {cipherPuzzleData.encodedString}
          </div>
        </div>

        <div className="mb-4">
          <label htmlFor="keyInput" className="block text-sm mb-1">
            DECRYPTION KEY:
          </label>
          <input
            id="keyInput"
            type="text"
            value={keyInput}
            onChange={(e) => setKeyInput(e.target.value)}
            className="w-full bg-black p-3 rounded border border-green-800 focus:border-green-500 focus:outline-none text-lg"
            placeholder="Enter key..."
          />
        </div>

        <button
          onClick={handleDecode}
          className="w-full bg-green-700 hover:bg-green-600 text-white font-bold py-2 px-4 rounded mb-4"
        >
          DECODE
        </button>

        <div className="bg-black p-4 rounded border border-green-800 h-24">
          <label className="block text-sm mb-1">OUTPUT:</label>
          <p
            className={`text-xl tracking-widest ${
              isSolved ? "text-yellow-400" : "text-red-500"
            }`}
          >
            {decodedMessage}
          </p>
          {isSolved && (
            <p className="text-sm text-yellow-500">
              New clue added to Evidence Board.
            </p>
          )}
        </div>
      </div>
    </div>
  );
}
