// src/GameContext.jsx
import React, { createContext, useState, useContext } from "react";
import { gameData } from "./data/gameData.js"; // We will create this file next

const GameContext = createContext();

export const useGame = () => useContext(GameContext);

export const GameProvider = ({ children }) => {
  const [solvedPuzzles, setSolvedPuzzles] = useState({
    cipher: false,
    wine: false,
    document: false,
  });

  const [unlockedClues, setUnlockedClues] = useState([
    "initial_report",
    "victim_profile", // Start with basic clues
  ]);

  const [phase, setPhase] = useState(1); // Game progression phase

  const solvePuzzle = (puzzleId) => {
    if (solvedPuzzles[puzzleId]) return; // Already solved

    setSolvedPuzzles((prev) => ({ ...prev, [puzzleId]: true }));

    // Unlock new clues based on which puzzle was solved
    switch (puzzleId) {
      case "cipher":
        addClue("decoded_message");
        break;
      case "wine":
        addClue("hidden_compartment_unlocked");
        break;
      case "document":
        addClue("torn_letter_content");
        break;
      default:
        break;
    }
  };

  const addClue = (clueId) => {
    setUnlockedClues((prev) => {
      if (prev.includes(clueId)) return prev;
      return [...prev, clueId];
    });
  };

  const value = {
    solvedPuzzles,
    solvePuzzle,
    unlockedClues,
    addClue,
    phase,
    setPhase,
    allClues: gameData.clues,
  };

  return <GameContext.Provider value={value}>{children}</GameContext.Provider>;
};
