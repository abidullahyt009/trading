
import React, { useState } from 'react';
import { User, Plan } from '../types';
import PlanCard from './PlanCard';
import AIAssistant from './AIAssistant';

interface DashboardProps {
  user: User;
  onLogout: () => void;
}

const PLANS: Plan[] = [
  {
    id: 'starter',
    name: 'Standard Prop',
    price: 30,
    fundingAmount: '$5,000',
    features: [
      '1-Step Evaluation',
      'Daily Loss: 5%',
      'Total Drawdown: 10%',
      'No Time Limits',
      '80% Profit Share'
    ]
  },
  {
    id: 'pro',
    name: 'Executive Prop',
    price: 80,
    fundingAmount: '$25,000',
    recommended: true,
    features: [
      '1-Step Evaluation',
      'Daily Loss: 5%',
      'Total Drawdown: 12%',
      'No Time Limits',
      '90% Profit Share',
      'Bi-Weekly Payouts'
    ]
  },
  {
    id: 'elite',
    name: 'Master Prop',
    price: 150,
    fundingAmount: '$50,000',
    features: [
      '1-Step Evaluation',
      'Daily Loss: 6%',
      'Total Drawdown: 15%',
      'Instant Funding Option',
      '90% Profit Share',
      'Priority White-Glove Support',
      'Advanced Dashboard Access'
    ]
  }
];

const Dashboard: React.FC<DashboardProps> = ({ user, onLogout }) => {
  const [selectedPlan, setSelectedPlan] = useState<Plan | null>(null);

  return (
    <div className="min-h-screen pb-20 bg-black">
      <nav className="border-b border-zinc-900 bg-black/90 sticky top-0 z-50 backdrop-blur-xl">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex justify-between h-20 items-center">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 rounded-lg bg-green-500 flex items-center justify-center shadow-[0_0_15px_rgba(34,197,94,0.4)]">
                <svg className="w-6 h-6 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <span className="text-2xl font-black tracking-tighter text-white uppercase italic">ApexFunded</span>
            </div>
            
            <div className="flex items-center space-x-6">
              <div className="hidden md:flex flex-col items-end">
                <span className="text-zinc-500 text-[10px] uppercase font-bold tracking-widest">Active Trader</span>
                <span className="text-white text-sm font-medium">{user.email}</span>
              </div>
              <button 
                onClick={onLogout}
                className="text-white text-xs font-bold uppercase tracking-widest border-2 border-zinc-800 px-5 py-2.5 rounded-full hover:border-green-500 hover:text-green-500 transition-all active:scale-95"
              >
                Logout
              </button>
            </div>
          </div>
        </div>
      </nav>

      <main className="max-w-7xl mx-auto px-6 mt-20">
        <div className="text-center mb-24">
          <div className="inline-block px-4 py-1.5 rounded-full border border-green-500/30 bg-green-500/5 text-green-500 text-[10px] font-bold uppercase tracking-[0.2em] mb-6">
            Global Liquidity Access
          </div>
          <h1 className="text-5xl md:text-8xl font-black text-white mb-6 tracking-tighter leading-none">
            CHOOSE YOUR <span className="text-green-500 italic">FUNDING</span>
          </h1>
          <p className="text-zinc-500 max-w-2xl mx-auto text-lg font-medium leading-relaxed">
            Scalable capital for elite traders. Select a plan below to begin your evaluation and unlock professional buying power.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
          {PLANS.map((plan) => (
            <PlanCard key={plan.id} plan={plan} onSelect={setSelectedPlan} />
          ))}
        </div>

        {selectedPlan && (
          <div className="fixed inset-0 z-[100] flex items-center justify-center p-6 bg-black/80 backdrop-blur-md">
            <div className="w-full max-w-lg bg-zinc-950 border border-green-500/30 p-10 rounded-3xl shadow-[0_0_50px_rgba(0,0,0,0.5)] animate-in fade-in slide-in-from-bottom-8 duration-500">
              <div className="flex justify-between items-start mb-8">
                <div>
                  <h3 className="text-3xl font-black text-white italic tracking-tighter uppercase">Checkout</h3>
                  <p className="text-zinc-500 text-sm mt-1">Confirm your account selection</p>
                </div>
                <button 
                  onClick={() => setSelectedPlan(null)} 
                  className="p-2 text-zinc-500 hover:text-white hover:bg-zinc-800 rounded-full transition-colors"
                >
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>
              
              <div className="space-y-6 mb-10">
                <div className="flex justify-between items-center py-4 border-b border-zinc-900">
                  <span className="text-zinc-400 font-bold uppercase text-xs tracking-widest">Plan Type</span>
                  <span className="text-white font-bold">{selectedPlan.name}</span>
                </div>
                <div className="flex justify-between items-center py-4 border-b border-zinc-900">
                  <span className="text-zinc-400 font-bold uppercase text-xs tracking-widest">Initial Balance</span>
                  <span className="text-green-500 font-black text-xl italic">{selectedPlan.fundingAmount}</span>
                </div>
                <div className="flex justify-between items-center py-6">
                  <span className="text-white font-black uppercase text-sm tracking-widest">Order Total</span>
                  <span className="text-white font-black text-4xl leading-none">${selectedPlan.price}</span>
                </div>
              </div>

              <button className="w-full gradient-green text-black font-black py-5 rounded-2xl uppercase tracking-[0.15em] hover:brightness-110 active:scale-[0.98] transition-all shadow-[0_10px_20px_rgba(34,197,94,0.2)]">
                Proceed to Payment
              </button>
              
              <div className="mt-6 flex items-center justify-center space-x-3 text-zinc-600">
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z" clipRule="evenodd" />
                </svg>
                <span className="text-[10px] uppercase font-bold tracking-[0.1em]">Encrypted Security Node Active</span>
              </div>
            </div>
          </div>
        )}
      </main>

      <AIAssistant />
    </div>
  );
};

export default Dashboard;
