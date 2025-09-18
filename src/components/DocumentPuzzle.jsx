// src/components/DocumentPuzzle.jsx
import React, { useState, useRef } from "react";
import { documentPuzzleData } from "../data/puzzles.js";
import { useGame } from "../GameContext.jsx";

export default function DocumentPuzzle({ isOpen, onClose }) {
  const { solvePuzzle } = useGame();
  const [pieces, setPieces] = useState(() =>
    documentPuzzleData.pieces.map((p) => ({
      ...p,
      currentTop: p.initialTop,
      currentLeft: p.initialLeft,
      isSnapped: false,
    }))
  );
  const [activePieceId, setActivePieceId] = useState(null);
  const [isAssembled, setIsAssembled] = useState(false);
  const [solutionInput, setSolutionInput] = useState("");
  const [isSolved, setIsSolved] = useState(false);

  const assemblyAreaRef = useRef(null);
  const { gridSize } = documentPuzzleData;

  const checkAssembly = (updatedPieces) => {
    const allSnapped = updatedPieces.every((p) => p.isSnapped);
    setIsAssembled(allSnapped);
  };

  const handleMouseUp = () => {
    if (!activePieceId) return;

    const currentPiece = pieces.find((p) => p.id === activePieceId);
    if (!currentPiece) return;

    const assemblyRect = assemblyAreaRef.current?.getBoundingClientRect();
    if (!assemblyRect) {
      setActivePieceId(null);
      return;
    }

    // --- THIS IS THE NEW LOGIC THAT FIXES THE SNAPPING ---
    // 1. Calculate the total size of the grid itself.
    const gridWidth = gridSize.cols * gridSize.pieceWidth;
    const gridHeight = gridSize.rows * gridSize.pieceHeight;

    // 2. Calculate the starting offset (top-left corner) of the centered grid.
    const offsetX = (assemblyRect.width - gridWidth) / 2;
    const offsetY = (assemblyRect.height - gridHeight) / 2;

    // 3. Determine the absolute target position for the piece.
    const snapTargetX = currentPiece.finalLeft + offsetX;
    const snapTargetY = currentPiece.finalTop + offsetY;
    // --- END OF NEW LOGIC ---

    const snapThreshold = 30; // How close in pixels to snap
    let snapped = false;
    let newLeft = currentPiece.currentLeft;
    let newTop = currentPiece.currentTop;

    if (
      Math.abs(currentPiece.currentLeft - snapTargetX) < snapThreshold &&
      Math.abs(currentPiece.currentTop - snapTargetY) < snapThreshold
    ) {
      newLeft = snapTargetX;
      newTop = snapTargetY;
      snapped = true;
    }

    const updatedPieces = pieces.map((p) =>
      p.id === activePieceId
        ? { ...p, currentLeft: newLeft, currentTop: newTop, isSnapped: snapped }
        : p
    );

    setPieces(updatedPieces);
    setActivePieceId(null);
    checkAssembly(updatedPieces);
  };

  const handleMouseDown = (e, id) => {
    if (!pieces.find((p) => p.id === id)?.isSnapped) {
      setActivePieceId(id);
    }
  };

  const handleMouseMove = (e) => {
    if (!activePieceId) return;

    setPieces((prevPieces) =>
      prevPieces.map((p) => {
        if (p.id === activePieceId && !p.isSnapped) {
          return {
            ...p,
            currentLeft: p.currentLeft + e.movementX,
            currentTop: p.currentTop + e.movementY,
          };
        }
        return p;
      })
    );
  };

  const handleSubmitSolution = () => {
    if (solutionInput.toUpperCase().trim() === documentPuzzleData.solution) {
      setIsSolved(true);
      solvePuzzle("document");
    } else {
      alert(
        "That is not the correct message. Review the assembled document carefully."
      );
    }
  };

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center p-4 z-20"
      onMouseMove={handleMouseMove}
      onMouseUp={handleMouseUp}
      onMouseLeave={handleMouseUp}
    >
      <div className="bg-gray-800 border-2 border-gray-600 rounded-lg shadow-xl w-full max-w-5xl h-5/6 p-6 font-serif flex flex-col">
        <div className="flex justify-between items-center border-b border-gray-600 pb-3 mb-4 flex-shrink-0">
          <h2 className="text-2xl font-bold text-slate-100">
            {documentPuzzleData.title}
          </h2>
          <button
            onClick={onClose}
            className="text-slate-300 hover:text-white text-2xl"
          >
            &times;
          </button>
        </div>
        <p className="text-sm text-slate-300 mb-4 flex-shrink-0">
          {isAssembled && !isSolved
            ? "The pieces are assembled. What does the full message say?"
            : documentPuzzleData.instructions}
        </p>

        <div
          ref={assemblyAreaRef}
          className="w-full bg-slate-900/50 rounded-lg relative overflow-hidden p-4 flex-grow"
        >
          <div
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 border-2 border-dashed border-gray-500"
            style={{
              width: `${gridSize.cols * gridSize.pieceWidth}px`,
              height: `${gridSize.rows * gridSize.pieceHeight}px`,
              display: "grid",
              gridTemplateColumns: `repeat(${gridSize.cols}, 1fr)`,
            }}
          >
            {Array.from({ length: gridSize.rows * gridSize.cols }).map(
              (_, i) => (
                <div key={i} className="border border-gray-700/50"></div>
              )
            )}
          </div>

          {pieces.map((piece) => (
            <div
              key={piece.id}
              className={`bg-amber-100 text-black flex items-center justify-center text-xl font-bold border-2 ${
                piece.isSnapped
                  ? "cursor-default border-green-500"
                  : "cursor-grab border-amber-300"
              }`}
              style={{
                top: `${piece.currentTop}px`,
                left: `${piece.currentLeft}px`,
                position: "absolute",
                width: `${gridSize.pieceWidth}px`,
                height: `${gridSize.pieceHeight}px`,
                zIndex: activePieceId === piece.id ? 101 : 100,
              }}
              onMouseDown={(e) => handleMouseDown(e, piece.id)}
            >
              {piece.content}
            </div>
          ))}
        </div>

        {isSolved ? (
          <div className="mt-4 p-4 bg-green-900/50 border border-green-700 text-green-200 rounded text-center">
            <p>{documentPuzzleData.successMessage}</p>
          </div>
        ) : (
          isAssembled && (
            <div className="mt-4 flex gap-2 flex-shrink-0">
              <input
                type="text"
                value={solutionInput}
                onChange={(e) => setSolutionInput(e.target.value)}
                className="flex-grow bg-gray-900 border border-gray-600 rounded p-2 text-white"
                placeholder="Type the full message here..."
              />
              <button
                onClick={handleSubmitSolution}
                className="bg-green-600 hover:bg-green-700 text-white font-bold px-4 py-2 rounded"
              >
                Submit
              </button>
            </div>
          )
        )}
      </div>
    </div>
  );
}
