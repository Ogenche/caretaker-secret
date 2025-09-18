// src/components/Accusation.jsx
import React, { useState } from "react";
import { gameData } from "../data/gameData.js";
import { suspectsData } from "../data/suspects.js";

export default function Accusation({ isOpen, onClose }) {
  const [step, setStep] = useState(1); // 1: Accuse, 2: Motive/Evidence, 3: Result
  const [selectedSuspect, setSelectedSuspect] = useState(null);
  const [selectedMotive, setSelectedMotive] = useState(null);
  const [selectedEvidence, setSelectedEvidence] = useState(null);
  const [isCorrect, setIsCorrect] = useState(false);

  const handleAccuse = (suspect) => {
    setSelectedSuspect(suspect);
    setStep(2);
  };

  const handleSubmitTheory = () => {
    const { murderer, motive, evidence } = gameData.solution;
    if (
      selectedSuspect.name === murderer &&
      selectedMotive === motive &&
      selectedEvidence === evidence
    ) {
      setIsCorrect(true);
    } else {
      setIsCorrect(false);
    }
    setStep(3);
  };

  const reset = () => {
    setStep(1);
    setSelectedSuspect(null);
    setSelectedMotive(null);
    setSelectedEvidence(null);
    setIsCorrect(false);
    onClose();
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center p-4 z-40">
      <div className="bg-gray-900 border-2 border-red-500 rounded-lg shadow-xl w-full max-w-4xl p-6 font-serif text-white">
        <h2 className="text-3xl font-bold text-red-500 mb-4">
          Make Your Accusation
        </h2>

        {/* Step 1: Choose the Murderer */}
        {step === 1 && (
          <div>
            <p className="mb-4">
              Review the suspects and make your final accusation.
            </p>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
              {suspectsData.map((suspect) => (
                <div
                  key={suspect.name}
                  className="bg-gray-800 p-4 rounded text-center"
                >
                  <h3 className="text-xl font-bold">{suspect.name}</h3>
                  <p className="text-sm text-gray-400 mb-3">
                    {suspect.position}
                  </p>
                  <button
                    onClick={() => handleAccuse(suspect)}
                    className="w-full bg-red-700 hover:bg-red-600 py-2 rounded"
                  >
                    Accuse
                  </button>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Step 2: Choose Motive & Evidence */}
        {step === 2 && (
          <div>
            <h3 className="text-2xl mb-4">
              You have accused{" "}
              <span className="text-red-400">{selectedSuspect.name}</span>.
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h4 className="font-bold text-lg mb-2">Select the Motive:</h4>
                <div className="space-y-2">
                  {gameData.accusationOptions.motives.map((m) => (
                    <button
                      key={m.id}
                      onClick={() => setSelectedMotive(m.id)}
                      className={`w-full text-left p-3 rounded border-2 ${
                        selectedMotive === m.id
                          ? "bg-blue-500 border-blue-300"
                          : "bg-gray-700 border-gray-600 hover:bg-gray-600"
                      }`}
                    >
                      {m.text}
                    </button>
                  ))}
                </div>
              </div>
              <div>
                <h4 className="font-bold text-lg mb-2">
                  Select the Key Evidence:
                </h4>
                <div className="space-y-2">
                  {gameData.accusationOptions.evidence.map((e) => (
                    <button
                      key={e.id}
                      onClick={() => setSelectedEvidence(e.id)}
                      className={`w-full text-left p-3 rounded border-2 ${
                        selectedEvidence === e.id
                          ? "bg-blue-500 border-blue-300"
                          : "bg-gray-700 border-gray-600 hover:bg-gray-600"
                      }`}
                    >
                      {e.text}
                    </button>
                  ))}
                </div>
              </div>
            </div>
            <button
              onClick={handleSubmitTheory}
              disabled={!selectedMotive || !selectedEvidence}
              className="w-full mt-6 bg-green-600 hover:bg-green-500 disabled:bg-gray-500 py-3 rounded text-xl font-bold"
            >
              Submit Final Theory
            </button>
          </div>
        )}

        {/* Step 3: Result */}
        {step === 3 && (
          <div className="text-center">
            {isCorrect ? (
              <>
                <h3 className="text-4xl font-bold text-green-400 mb-4">
                  Case Closed!
                </h3>
                <p className="text-lg">
                  Your accusation is correct. You identified Victoria Blackwood
                  as the killer, driven by the need to protect her family's dark
                  past with Project Echo. The torn fabric was the final piece of
                  the puzzle. You've brought a killer to justice.
                </p>
              </>
            ) : (
              <>
                <h3 className="text-4xl font-bold text-red-400 mb-4">
                  False Accusation!
                </h3>
                <p className="text-lg">
                  Your theory is incorrect. The evidence doesn't fully support
                  your conclusion. A killer remains at large, and an innocent
                  person may have been wrongly accused. The mystery continues...
                </p>
              </>
            )}
            <button
              onClick={reset}
              className="mt-6 bg-blue-600 hover:bg-blue-500 py-2 px-6 rounded text-lg"
            >
              Play Again
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
