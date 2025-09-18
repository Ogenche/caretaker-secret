// src/App.jsx
import { useEffect, useState } from "react";
import { getAuth, onAuthStateChanged, signOut } from "firebase/auth";
import LoginPage from "./pages/LoginPage";
import DashboardPage from "./pages/DashboardPage";
import { GameProvider } from "./GameContext.jsx"; // Import the provider

function App() {
  const [user, setUser] = useState(null);
  const auth = getAuth();

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setUser(user);
    });
    return () => unsubscribe();
  }, [auth]);

  const handleLogout = () => {
    signOut(auth).catch((error) => console.error("Logout Error:", error));
  };

  return (
    <GameProvider>
      {" "}
      {/* Wrap the app */}
      <div className="App">
        {user ? (
          <DashboardPage user={user} handleLogout={handleLogout} />
        ) : (
          <LoginPage />
        )}
      </div>
    </GameProvider>
  );
}

export default App;
