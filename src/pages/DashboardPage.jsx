// src/pages/DashboardPage.jsx
import { useState } from "react";
import CaseFile from "../components/CaseFile";
import Suspects from "../components/Suspects";
import Map from "../components/Map"; // Import our new Map component

function DashboardPage({ user, handleLogout }) {
  const [isCaseFileModalOpen, setIsCaseFileModalOpen] = useState(false);
  const [isSuspectsModalOpen, setIsSuspectsModalOpen] = useState(false);
  const [isMapModalOpen, setIsMapModalOpen] = useState(false);

  return (
    <div className="min-h-screen bg-gray-900 text-white p-4 sm:p-6 md:p-8">
      <header className="flex justify-between items-center mb-8">
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
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Evidence Locker Card */}
          <div className="bg-gray-800 p-6 rounded-lg shadow-lg">
            <h2 className="text-xl font-semibold mb-4 border-b border-gray-600 pb-2">
              Evidence Locker
            </h2>
            <p className="text-gray-300 mb-4">
              Review all collected documents and physical evidence.
            </p>
            <button
              onClick={() => setIsCaseFileModalOpen(true)}
              className="w-full bg-blue-700 hover:bg-blue-800 text-white font-bold py-2 px-4 rounded"
            >
              Open Case File
            </button>
          </div>

          {/* Locations Card */}
          <div className="bg-gray-800 p-6 rounded-lg shadow-lg">
            <h2 className="text-xl font-semibold mb-4 border-b border-gray-600 pb-2">
              Locations
            </h2>
            <p className="text-gray-300 mb-4">
              Explore the Evergreen Lodge and key areas of the crime scene.
            </p>
            <button
              onClick={() => setIsMapModalOpen(true)}
              className="w-full bg-blue-700 hover:bg-blue-800 text-white font-bold py-2 px-4 rounded"
            >
              View Map
            </button>
          </div>

          {/* Suspects Card */}
          <div className="bg-gray-800 p-6 rounded-lg shadow-lg">
            <h2 className="text-xl font-semibold mb-4 border-b border-gray-600 pb-2">
              Suspects
            </h2>
            <p className="text-gray-300 mb-4">
              Review profiles and interview transcripts of all persons of
              interest.
            </p>
            <button
              onClick={() => setIsSuspectsModalOpen(true)}
              className="w-full bg-blue-700 hover:bg-blue-800 text-white font-bold py-2 px-4 rounded"
            >
              View Suspects
            </button>
          </div>
        </div>
      </main>

      {/* MODALS SECTION */}
      <CaseFile
        isOpen={isCaseFileModalOpen}
        onClose={() => setIsCaseFileModalOpen(false)}
      />

      <Suspects
        isOpen={isSuspectsModalOpen}
        onClose={() => setIsSuspectsModalOpen(false)}
      />

      {/* Replace the final placeholder with our new Map component */}
      <Map isOpen={isMapModalOpen} onClose={() => setIsMapModalOpen(false)} />
    </div>
  );
}

export default DashboardPage;
