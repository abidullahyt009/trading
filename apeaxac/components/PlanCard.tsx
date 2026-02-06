
import React from 'react';
import { Plan } from '../types';

interface PlanCardProps {
  plan: Plan;
  onSelect: (plan: Plan) => void;
}

const PlanCard: React.FC<PlanCardProps> = ({ plan, onSelect }) => {
  return (
    <div className={`relative flex flex-col p-10 rounded-3xl glass-card transition-all duration-500 neon-border group ${plan.recommended ? 'border-green-500/50 scale-[1.02] bg-zinc-950/80' : 'border-zinc-900 hover:bg-zinc-900/40'}`}>
      {plan.recommended && (
        <span className="absolute -top-4 left-1/2 -translate-x-1/2 gradient-green text-black text-[10px] font-black px-5 py-1.5 rounded-full uppercase tracking-[0.2em] shadow-[0_0_20px_rgba(34,197,94,0.3)]">
          Pro Selection
        </span>
      )}
      
      <div className="mb-10">
        <h3 className="text-xs font-black text-zinc-500 uppercase tracking-[0.25em] mb-4 group-hover:text-green-500 transition-colors">{plan.name}</h3>
        <div className="flex items-baseline space-x-1">
          <span className="text-5xl font-black tracking-tighter text-white">${plan.price}</span>
          <span className="text-zinc-600 text-xs font-bold uppercase tracking-widest">/ one-time</span>
        </div>
        <div className="mt-8 pt-8 border-t border-zinc-900">
          <div className="text-zinc-500 text-[10px] font-black uppercase tracking-[0.2em] mb-1">Buying Power</div>
          <p className="text-green-500 font-black text-3xl italic leading-none tracking-tight">{plan.fundingAmount}</p>
        </div>
      </div>

      <ul className="flex-1 space-y-5 mb-12">
        {plan.features.map((feature, index) => (
          <li key={index} className="flex items-center text-xs font-semibold text-zinc-300 tracking-wide">
            <div className="w-5 h-5 rounded-full bg-green-500/10 flex items-center justify-center mr-4 border border-green-500/20">
              <svg className="h-3 w-3 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7" />
              </svg>
            </div>
            {feature}
          </li>
        ))}
      </ul>

      <button
        onClick={() => onSelect(plan)}
        className={`w-full py-4 px-6 rounded-2xl font-black uppercase tracking-[0.15em] text-xs transition-all duration-300 ${
          plan.recommended 
            ? 'gradient-green text-black shadow-[0_5px_15px_rgba(34,197,94,0.2)] hover:scale-[1.03] active:scale-95' 
            : 'bg-white text-black hover:bg-green-500 active:scale-95'
        }`}
      >
        Acquire Account
      </button>
    </div>
  );
};

export default PlanCard;
