import React from "react";

const Card = ({ title, rules, rulesCount, onViewRules, icon }) => {
  console.log(rules);
  return (
    <div className="bg-white p-8  rounded-lg flex flex-col justify-between border-2 border-slate-100">
      <div>
        <div className="flex gap-x-2.5">
          <div className="text-2xl flex self-baseline">{icon}</div>
          <p className="text-lg font-bold mb-2 text-slate-600">{title}</p>
        </div>

        <div className="text-gray-400 text-base mb-4 space-y-1 line-clamp-3">
          <span className="bg-slate-100 p-1 px-1.5 font-bold rounded-full text-xs">
            {rulesCount} {rulesCount > 1 ? "RULES" : "RULE"}
          </span>

          {rules.map((rule, index) => (
            <span key={index}>
              {rule.name}
              {" ,"}
            </span>
          ))}
        </div>
      </div>
      <button
        onClick={() => onViewRules(rules)}
        className="mt-auto  text-slate-600 py-2 px-4 rounded border-2 font-semibold border-slate-100"
      >
        View Alert Rules
      </button>
    </div>
  );
};

export default Card;
