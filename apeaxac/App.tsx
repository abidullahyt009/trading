
import React, { useState, useCallback } from 'react';
import Login from './components/Login';
import Dashboard from './components/Dashboard';
import { User } from './types';

const App: React.FC = () => {
  const [user, setUser] = useState<User>({ email: '', isLoggedIn: false });

  const handleLogin = useCallback((email: string) => {
    setUser({ email, isLoggedIn: true });
  }, []);

  const handleLogout = useCallback(() => {
    setUser({ email: '', isLoggedIn: false });
  }, []);

  return (
    <div className="min-h-screen bg-[#0a0a0a] text-white selection:bg-green-500 selection:text-black">
      {!user.isLoggedIn ? (
        <Login onLogin={handleLogin} />
      ) : (
        <Dashboard user={user} onLogout={handleLogout} />
      )}
    </div>
  );
};

export default App;
