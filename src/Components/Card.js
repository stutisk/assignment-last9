import React from "react";

const Card = ({ title, rules, rulesCount, onViewRules }) => {
  return (
    <div className="bg-white p-8  rounded-lg flex flex-col justify-between border-2 border-slate-100">
      <div>
        <p className="text-lg font-bold mb-2 text-slate-600">{title}</p>
        <div className="text-gray-400 text-base mb-4 space-y-1">
          <span className="bg-slate-100 p-1 px-1.5 font-bold rounded-full">{rulesCount} RULES</span> Prometheus job missing, Prometheus
          target missing, Prometheus all targets missing, Prometheus target
          missing with warmup time, Prometheus configuration reload failure
        </div>
      </div>
      <button  onClick={() => onViewRules(rules)} className="mt-auto  text-slate-600 py-2 px-4 rounded border-2 font-semibold border-slate-100">
        View Alert Rules
      </button>
    </div>
  );
};

export default Card;
