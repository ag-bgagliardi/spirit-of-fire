import { createContext, useContext, useState } from "react";

// ── Hardcoded team credentials ────────────────────────────────────────────────
// Add/remove team members here. Passwords are plaintext since this is a
// low-stakes internal tool — no personal data is stored.
const TEAM_CREDENTIALS = [
  { username: "rico",     password: "spiritoffire", displayName: "Rico Heisler" },
  { username: "benjamin", password: "spiritoffire", displayName: "Benjamin Gagliardi" },
  { username: "madeline", password: "spiritoffire", displayName: "Madeline Gagliardi" },
  { username: "silas", password: "spiritoffire", displayName: "Silas Heisler" },
  { username: "admin",    password: "admin", displayName: "Admin" },
];

const AuthContext = createContext(null);

export function AuthProvider({ children }) {
  const [user, setUser] = useState(() => {
    try {
      const saved = localStorage.getItem("sof_team_user");
      return saved ? JSON.parse(saved) : null;
    } catch {
      return null;
    }
  });

  function login(username, password) {
    const match = TEAM_CREDENTIALS.find(
      c => c.username.toLowerCase() === username.toLowerCase() && c.password === password
    );
    if (match) {
      const userData = { username: match.username, displayName: match.displayName };
      setUser(userData);
      localStorage.setItem("sof_team_user", JSON.stringify(userData));
      return true;
    }
    return false;
  }

  function logout() {
    setUser(null);
    localStorage.removeItem("sof_team_user");
  }

  return (
    <AuthContext.Provider value={{ user, login, logout, isLoggedIn: Boolean(user) }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  return useContext(AuthContext);
}
