// src/pages/DashboardPage.jsx
import { useState } from "react";

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

      {/* Case File Modal */}
      {isCaseFileModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center p-4 z-10">
          <div className="bg-gray-800 rounded-lg shadow-xl w-full max-w-2xl max-h-full overflow-y-auto p-6">
            <h2 className="text-2xl font-bold mb-4 text-red-500">
              TOP SECRET: Case File #2025-073
            </h2>
            <div className="mb-6">
              <h3 className="text-xl font-semibold border-b border-gray-600 pb-2 mb-2">
                Victim Profile
              </h3>
              <p>
                <strong>Name:</strong> Edgar Thornhill
              </p>
              <p>
                <strong>D.O.B:</strong> March 15, 1953
              </p>
              <p>
                <strong>Position:</strong> Head Caretaker (1984-2025)
              </p>
            </div>
            <div className="space-y-2">
              <h3 className="text-xl font-semibold border-b border-gray-600 pb-2 mb-2">
                Initial Findings & Autopsy Summary
              </h3>
              <p>
                <strong>Manner of Death:</strong> Homicide
              </p>
              <p>
                <strong>Cause of Death:</strong> Blunt force trauma to the head.
              </p>
              <p>
                <strong>Secondary Injuries:</strong> Defensive wounds found on
                hands and arms.
              </p>
              <p>
                <strong>Time of Death (Est.):</strong> 9:45 PM - 10:30 PM
              </p>
              <p>
                <strong>Key Evidence at Scene:</strong> A wine bottle with blood
                residue and the victim's broken watch, stopped at 9:52 PM. A
                torn piece of dark, high-tech fabric was also found.
              </p>
              <p>
                <strong>Additional Notes:</strong> Victim's valuable antique
                watch is missing. Signs of forced entry on a wine cabinet.
                Rumors of blackmail involving guests.
              </p>
            </div>
            <button
              onClick={() => setIsCaseFileModalOpen(false)}
              className="mt-6 bg-red-600 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
            >
              Close File
            </button>
          </div>
        </div>
      )}

      {/* Suspects Modal */}
      {isSuspectsModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center p-4 z-10">
          <div className="bg-gray-800 rounded-lg shadow-xl w-full max-w-2xl max-h-full overflow-y-auto p-6 space-y-4">
            <h2 className="text-2xl font-bold text-red-500">
              SUSPECT DOSSIERS
            </h2>
            <div className="bg-gray-700 p-4 rounded">
              <h3 className="text-xl font-semibold mb-2">Victoria Blackwood</h3>
              <p>
                <strong>Age:</strong> 35
              </p>
              <p>
                <strong>Position:</strong> Resort Owner
              </p>
              <p>
                <strong>Notes:</strong> Seen arguing with victim on the day of
                the murder.
              </p>
            </div>
            <div className="bg-gray-700 p-4 rounded">
              <h3 className="text-xl font-semibold mb-2">Dr. Alan Turing</h3>
              <p>
                <strong>Age:</strong> 55
              </p>
              <p>
                <strong>Position:</strong> Tech CEO
              </p>
              <p>
                <strong>Notes:</strong> Reclusive AI Pioneer. A scheduled
                meeting with the victim was cancelled.
              </p>
            </div>
            <div className="bg-gray-700 p-4 rounded">
              <h3 className="text-xl font-semibold mb-2">Sam Thornhill</h3>
              <p>
                <strong>Age:</strong> 40
              </p>
              <p>
                <strong>Position:</strong> Victim's Child
              </p>
              <p>
                <strong>Notes:</strong> Struggling artist, estranged for 10
                years. Financial difficulties noted.
              </p>
            </div>
            <div className="bg-gray-700 p-4 rounded">
              <h3 className="text-xl font-semibold mb-2">Chef Olivia Reeves</h3>
              <p>
                <strong>Age:</strong> 38
              </p>
              <p>
                <strong>Position:</strong> Celebrity Chef
              </p>
              <p>
                <strong>Notes:</strong> Known for a volatile temper. Has
                significant gambling debts.
              </p>
            </div>
            <div className="bg-gray-700 p-4 rounded">
              <h3 className="text-xl font-semibold mb-2">Jack Harper</h3>
              <p>
                <strong>Age:</strong> 42
              </p>
              <p>
                <strong>Position:</strong> Waiter (Undercover Journalist)
              </p>
              <p>
                <strong>Notes:</strong> Using false credentials. Found the
                victim's body.
              </p>
            </div>
            <div className="bg-gray-700 p-4 rounded">
              <h3 className="text-xl font-semibold mb-2">Marcus Stone</h3>
              <p>
                <strong>Age:</strong> 50
              </p>
              <p>
                <strong>Position:</strong> Head of Security
              </p>
              <p>
                <strong>Notes:</strong> Ex-military. Missing security footage
                from the night of the murder.
              </p>
            </div>
            <button
              onClick={() => setIsSuspectsModalOpen(false)}
              className="mt-4 bg-red-600 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
            >
              Close Dossiers
            </button>
          </div>
        </div>
      )}

      {/* Map Modal */}
      {isMapModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center p-4 z-10">
          <div className="bg-gray-800 rounded-lg shadow-xl w-full max-w-2xl max-h-full overflow-y-auto p-6 space-y-4">
            <h2 className="text-2xl font-bold text-red-500">
              RESORT MAP: Evergreen Lodge
            </h2>
            <div className="flex flex-wrap gap-x-4 gap-y-2 text-xs mb-4">
              <div className="flex items-center gap-2">
                <div className="w-4 h-4 bg-green-800 border border-green-500"></div>
                <span>Public Area</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-4 h-4 bg-red-800 border border-red-500"></div>
                <span>Restricted Area</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-4 h-4 bg-blue-800 border border-blue-500"></div>
                <span>Service Area</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-4 h-4 bg-stone-800 border border-stone-500"></div>
                <span>Underground</span>
              </div>
            </div>
            <div className="grid grid-cols-3 gap-2 text-center text-sm font-semibold border-2 border-gray-600 p-2 rounded">
              <div className="bg-gray-700 p-4 rounded col-span-1">Parking</div>
              <div className="bg-gray-700 p-4 rounded col-span-2">
                Forest Trails
              </div>
              <div className="bg-green-800 border border-green-500 p-8 rounded col-span-2">
                Main Lodge
              </div>
              <div className="bg-red-800 border border-red-500 p-8 rounded col-span-1">
                East Wing (Restricted)
              </div>
              <div className="bg-blue-800 border border-blue-500 p-4 rounded">
                Kitchen
              </div>
              <div className="bg-blue-800 border border-blue-500 p-4 rounded">
                Security Office
              </div>
              <div className="bg-yellow-800 border border-yellow-500 p-4 rounded">
                Staff Quarters
              </div>
              <div className="bg-stone-800 border border-stone-500 p-2 rounded">
                Wine Cellar
              </div>
              <div className="border-2 border-dashed border-gray-500 p-2 rounded col-span-2 flex items-center justify-center">
                Hidden Path
              </div>
            </div>
            <button
              onClick={() => setIsMapModalOpen(false)}
              className="mt-4 bg-red-600 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
            >
              Close Map
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default DashboardPage;
