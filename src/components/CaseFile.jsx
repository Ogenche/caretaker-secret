// src/components/CaseFile.jsx
import React from "react";

// Data pulled from your 'Case File Components.docx'
const victimProfile = {
  name: "Edgar Thornhill",
  dob: "March 15, 1953",
  position: "Head Caretaker (1984-2025)",
  status: "Deceased",
  height: "5'10\"",
  weight: "165 lbs",
  features: "Slight limp from old injury",
  notes: [
    "Widower (Wife Sarah deceased 2020)",
    "Estranged from child Sam",
    "Known for meticulous record-keeping",
    "Collector of antique watches",
  ],
};

const policeReport = {
  caseNumber: "2025-073",
  date: "January 25, 2025",
  officer: "Det. Sarah Chen",
  findings:
    "At approximately 06:30 AM, dispatch received call from Evergreen Lodge reporting deceased male found in wine cellar. Victim identified as Edgar Thornhill (72), head caretaker.",
  sceneDescription: [
    "Body discovered in northwest corner of wine cellar",
    "Multiple wine bottles broken around body",
    "Signs of struggle evident",
    "Blood spatter consistent with blunt force trauma",
  ],
  evidence: [
    "Wine bottle with blood residue",
    "Victim's broken watch (stopped 9:52 PM)",
    "Torn fabric piece (dark blue)",
    "Partial footprint in wine spillage",
  ],
};

// The component receives `isOpen` and `onClose` props from the dashboard
export default function CaseFile({ isOpen, onClose }) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center p-4 z-10">
      <div className="bg-gray-800 rounded-lg shadow-xl w-full max-w-3xl max-h-full overflow-y-auto p-6 font-serif">
        <div className="flex justify-between items-start">
          <h2 className="text-2xl font-bold mb-4 text-red-500 tracking-wider">
            CONFIDENTIAL: Case File #{policeReport.caseNumber}
          </h2>
          <button
            onClick={onClose}
            className="text-gray-400 hover:text-white text-2xl"
            aria-label="Close"
          >
            &times;
          </button>
        </div>

        {/* Victim Profile Section */}
        <div className="bg-gray-900/50 p-4 rounded-lg mb-6 border border-gray-700">
          <h3 className="text-xl font-bold mb-3 text-red-400 border-b border-gray-600 pb-2">
            Victim Profile
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-4 gap-y-2 text-gray-300">
            <p>
              <strong>Name:</strong> {victimProfile.name}
            </p>
            <p>
              <strong>Position:</strong> {victimProfile.position}
            </p>
            <p>
              <strong>D.O.B:</strong> {victimProfile.dob}
            </p>
            <p>
              <strong>Status:</strong>{" "}
              <span className="text-red-500 font-semibold">
                {victimProfile.status}
              </span>
            </p>
            <p>
              <strong>Height:</strong> {victimProfile.height}
            </p>
            <p>
              <strong>Weight:</strong> {victimProfile.weight}
            </p>
            <p className="col-span-full">
              <strong>Features:</strong> {victimProfile.features}
            </p>
          </div>
          <div className="mt-3">
            <h4 className="font-bold text-gray-300">Notes:</h4>
            <ul className="list-disc list-inside ml-4 mt-1 text-gray-400">
              {victimProfile.notes.map((note, index) => (
                <li key={index}>{note}</li>
              ))}
            </ul>
          </div>
        </div>

        {/* Police Report Section */}
        <div className="bg-gray-900/50 p-4 rounded-lg border border-gray-700">
          <h3 className="text-xl font-bold mb-3 text-red-400 border-b border-gray-600 pb-2">
            Initial Police Report
          </h3>
          <div className="space-y-3 text-gray-300">
            <div>
              <h4 className="font-bold">Initial Findings:</h4>
              <p className="text-gray-400">{policeReport.findings}</p>
            </div>
            <div>
              <h4 className="font-bold">Scene Description:</h4>
              <ul className="list-disc list-inside ml-4 text-gray-400">
                {policeReport.sceneDescription.map((item, index) => (
                  <li key={index}>{item}</li>
                ))}
              </ul>
            </div>
            <div>
              <h4 className="font-bold">Evidence Collected:</h4>
              <ul className="list-disc list-inside ml-4 text-gray-400">
                {policeReport.evidence.map((item, index) => (
                  <li key={index}>{item}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        <button
          onClick={onClose}
          className="mt-6 w-full bg-red-600 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
        >
          Close File
        </button>
      </div>
    </div>
  );
}
