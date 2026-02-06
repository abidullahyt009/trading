
import React, { useState } from 'react';

interface LoginProps {
  onLogin: (email: string) => void;
}

const Login: React.FC<LoginProps> = ({ onLogin }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email || !password) {
      setError('Please fill in all fields');
      return;
    }
    // Simple demo validation
    if (email.includes('@')) {
      onLogin(email);
    } else {
      setError('Please enter a valid email address');
    }
  };

  return (
    <div className="flex min-h-screen items-center justify-center p-4">
      <div className="w-full max-w-md space-y-8 glass-card p-8 rounded-2xl shadow-2xl border-green-500/20">
        <div className="text-center">
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-xl bg-green-500/10 mb-4 border border-green-500/20">
            <svg className="w-8 h-8 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
            </svg>
          </div>
          <h2 className="text-3xl font-bold tracking-tight text-white">
            Welcome to <span className="text-green-500">ApexFunded</span>
          </h2>
          <p className="mt-2 text-sm text-zinc-400">
            Sign in to access your trading dashboard
          </p>
        </div>
        
        <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
          <div className="space-y-4 rounded-md">
            <div>
              <label className="block text-sm font-medium text-zinc-400 mb-1">Email Address</label>
              <input
                type="email"
                required
                className="block w-full rounded-lg border-zinc-800 bg-zinc-900/50 px-4 py-3 text-white placeholder-zinc-500 focus:border-green-500 focus:ring-green-500 outline-none transition-all"
                placeholder="you@example.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-zinc-400 mb-1">Password</label>
              <input
                type="password"
                required
                className="block w-full rounded-lg border-zinc-800 bg-zinc-900/50 px-4 py-3 text-white placeholder-zinc-500 focus:border-green-500 focus:ring-green-500 outline-none transition-all"
                placeholder="••••••••"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
          </div>

          {error && <p className="text-red-500 text-sm text-center">{error}</p>}

          <div>
            <button
              type="submit"
              className="group relative flex w-full justify-center rounded-lg gradient-green py-3 px-4 text-sm font-semibold text-black hover:opacity-90 transition-all focus:outline-none focus:ring-2 focus:ring-green-500"
            >
              Sign In
            </button>
          </div>
        </form>

        <div className="text-center">
          <p className="text-sm text-zinc-500">
            Don't have an account? <a href="#" className="font-medium text-green-500 hover:text-green-400">Join the elite</a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
