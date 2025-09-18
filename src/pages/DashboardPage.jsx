// src/pages/DashboardPage.jsx
import React, { useState } from "react";
import { useGame } from "../GameContext.jsx"; // Import the hook to get game state

// Component Imports
import CaseFile from "../components/CaseFile.jsx";
import Suspects from "../components/Suspects.jsx";
import Map from "../components/Map.jsx";
import HistoricalDocuments from "../components/HistoricalDocuments.jsx";
import Journal from "../components/Journal.jsx";
import CipherDecoder from "../components/CipherDecoder.jsx";
import WinePuzzle from "../components/WinePuzzle.jsx";
import DocumentPuzzle from "../components/DocumentPuzzle.jsx";
import EvidenceBoard from "../components/EvidenceBoard.jsx";
import HiddenCompartment from "../components/HiddenCompartment.jsx";
import Accusation from "../components/Accusation.jsx";

function DashboardPage({ user, handleLogout }) {
  const { solvedPuzzles } = useGame(); // Get puzzle state from context

  const [modals, setModals] = useState({
    caseFile: false,
    suspects: false,
    map: false,
    documents: false,
    journal: false,
    cipher: false,
    wine: false,
    docPuzzle: false,
    evidenceBoard: false,
    hiddenCompartment: false,
    accusation: false,
  });

  const openModal = (modal) =>
    setModals((prev) => ({
      ...Object.keys(prev).reduce((acc, key) => ({ ...acc, [key]: false }), {}),
      [modal]: true,
    }));
  const closeModal = (modal) =>
    setModals((prev) => ({ ...prev, [modal]: false }));

  // This function is passed to the wine puzzle to chain modals
  const onWinePuzzleSolve = () => {
    closeModal("wine");
    openModal("hiddenCompartment");
  };

  const allPuzzlesSolved = Object.values(solvedPuzzles).every(Boolean);

  return (
    <div className="min-h-screen bg-gray-900 text-white p-4 sm:p-6 md:p-8">
      <header className="flex justify-between items-center mb-6">
        <div>
          <h1 className="text-2xl sm:text-3xl font-bold text-red-500">
            CASE: The Caretaker's Secret
          </h1>
          <p className="text-sm text-gray-400">Investigator: {user.email}</p>
        </div>
        <button
          onClick={handleLogout}
          className="bg-red-600 hover:bg-red-700 text-white font-bold py-2 px-4 rounded text-sm"
        >
          Logout
        </button>
      </header>

      <main>
        <div className="bg-gray-800/50 border border-gray-700 p-6 rounded-lg shadow-lg mb-8">
          <h2 className="text-xl font-semibold text-red-400 mb-2">
            A Letter to the Investigator
          </h2>
          <p className="text-gray-300 font-serif italic leading-relaxed">
            The murder of Edgar Thornhill is a tangled web of secrets. Use the
            tools at your disposal—review the evidence, study the suspects, and
            solve the puzzles left behind. The truth is here, but it won't be
            found in plain sight. Good luck.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Investigation Tools */}
          <div className="bg-gray-800 p-6 rounded-lg shadow-lg col-span-1 md:col-span-2 lg:col-span-3 border-2 border-blue-600">
            <h2 className="text-xl font-semibold mb-4 border-b border-blue-700 pb-2 text-blue-400">
              Investigation Tools
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-3">
              <button
                onClick={() => openModal("caseFile")}
                className="w-full bg-blue-700 hover:bg-blue-800 text-white font-bold py-3 px-2 rounded"
              >
                Case File
              </button>
              <button
                onClick={() => openModal("suspects")}
                className="w-full bg-blue-700 hover:bg-blue-800 text-white font-bold py-3 px-2 rounded"
              >
                Suspects
              </button>
              <button
                onClick={() => openModal("map")}
                className="w-full bg-blue-700 hover:bg-blue-800 text-white font-bold py-3 px-2 rounded"
              >
                Map
              </button>
              <button
                onClick={() => openModal("documents")}
                className="w-full bg-blue-700 hover:bg-blue-800 text-white font-bold py-3 px-2 rounded"
              >
                Archives
              </button>
              <button
                onClick={() => openModal("journal")}
                className="w-full bg-blue-700 hover:bg-blue-800 text-white font-bold py-3 px-2 rounded"
              >
                Journal
              </button>
            </div>
          </div>

          {/* Puzzles Section */}
          <div className="bg-gray-800 p-6 rounded-lg shadow-lg col-span-1 md:col-span-2 lg:col-span-3 border-2 border-yellow-600">
            <h2 className="text-xl font-semibold mb-4 border-b border-yellow-700 pb-2 text-yellow-400">
              Interactive Puzzles
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
              <button
                onClick={() => openModal("cipher")}
                disabled={solvedPuzzles.cipher}
                className="w-full bg-yellow-700 hover:bg-yellow-800 disabled:bg-gray-600 text-white font-bold py-3 px-2 rounded"
              >
                {solvedPuzzles.cipher ? "Cipher Solved" : "Journal Cipher"}
              </button>
              <button
                onClick={() => openModal("wine")}
                disabled={solvedPuzzles.wine}
                className="w-full bg-yellow-700 hover:bg-yellow-800 disabled:bg-gray-600 text-white font-bold py-3 px-2 rounded"
              >
                {solvedPuzzles.wine ? "Cellar Solved" : "Wine Cellar"}
              </button>
              <button
                onClick={() => openModal("docPuzzle")}
                disabled={solvedPuzzles.document}
                className="w-full bg-yellow-700 hover:bg-yellow-800 disabled:bg-gray-600 text-white font-bold py-3 px-2 rounded"
              >
                {solvedPuzzles.document ? "Document Solved" : "Torn Document"}
              </button>
            </div>
          </div>

          {/* Deduction & Accusation */}
          <div className="bg-gray-800 p-6 rounded-lg shadow-lg col-span-1 md:col-span-2 lg:col-span-3 border-2 border-green-600">
            <h2 className="text-xl font-semibold mb-4 border-b border-green-700 pb-2 text-green-400">
              Deduction
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              <button
                onClick={() => openModal("evidenceBoard")}
                className="w-full bg-green-700 hover:bg-green-800 text-white font-bold py-3 px-2 rounded"
              >
                Open Evidence Board
              </button>
              <button
                onClick={() => openModal("accusation")}
                disabled={!allPuzzlesSolved}
                className="w-full bg-red-700 hover:bg-red-600 disabled:bg-gray-600 text-white font-bold py-3 px-2 rounded"
              >
                {allPuzzlesSolved
                  ? "Make Final Accusation"
                  : "Solve All Puzzles to Accuse"}
              </button>
            </div>
          </div>
        </div>
      </main>

      {/* MODALS RENDER SECTION */}
      <CaseFile
        isOpen={modals.caseFile}
        onClose={() => closeModal("caseFile")}
      />
      <Suspects
        isOpen={modals.suspects}
        onClose={() => closeModal("suspects")}
      />
      <Map isOpen={modals.map} onClose={() => closeModal("map")} />
      <HistoricalDocuments
        isOpen={modals.documents}
        onClose={() => closeModal("documents")}
      />
      <Journal isOpen={modals.journal} onClose={() => closeModal("journal")} />
      <CipherDecoder
        isOpen={modals.cipher}
        onClose={() => closeModal("cipher")}
      />
      <WinePuzzle
        isOpen={modals.wine}
        onClose={() => closeModal("wine")}
        onSolve={onWinePuzzleSolve}
      />
      <DocumentPuzzle
        isOpen={modals.docPuzzle}
        onClose={() => closeModal("docPuzzle")}
      />
      <EvidenceBoard
        isOpen={modals.evidenceBoard}
        onClose={() => closeModal("evidenceBoard")}
      />
      <HiddenCompartment
        isOpen={modals.hiddenCompartment}
        onClose={() => closeModal("hiddenCompartment")}
      />
      <Accusation
        isOpen={modals.accusation}
        onClose={() => closeModal("accusation")}
      />
    </div>
  );
}

export default DashboardPage;
