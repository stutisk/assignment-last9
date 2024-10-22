import React, { useState } from "react";
import Card from "./Card";
import { RulesModal } from "./RulesModal";
import SearchBar from "./SearchBar";

const cardData = [
  {
    title: "Prometheus self-monitoring",
    rulesCount: 28,
    rules: [
      "Prometheus job missing",
      "Prometheus all targets missing",
      "Prometheus target missing",
    ],
  },
  {
    title: "Host and hardware",
    rulesCount: 38,
    rules: [
      "Host out of memory",
      "Host memory under pressure",
      "Host Memory is underutilized",
    ],
  },
  {
    title: "Host and hardware",
    rulesCount: 38,
    rules: [
      "Host out of memory",
      "Host memory under pressure",
      "Host Memory is underutilized",
    ],
  },
  {
    title: "Host and hardware",
    rulesCount: 38,
    rules: [
      "Host out of memory",
      "Host memory under pressure",
      "Host Memory is underutilized",
    ],
  },
  {
    title: "Host and hardware",
    rulesCount: 38,
    rules: [
      "Host out of memory",
      "Host memory under pressure",
      "Host Memory is underutilized",
    ],
  },
];

const BrowseLibrary = () => {
  const [selectedRules, setSelectedRules] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleViewRules = (rules) => {
    setSelectedRules(rules);
    setIsModalOpen(true);
  };

  return (
    <div className="lg:px-32 mt-12 flex flex-col gap-6 ">
      <p className="text-xl   font-medium text-slate-600">Browse Library</p>
      <SearchBar />
      <div className="min-h-screen">
        <div className=" pb-12">
          <h2 className="text-base font-bold mb-4 uppercase text-slate-400">
            Basic Resource Monitoring
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {cardData.map((item, index) => (
              <Card
                key={index}
                title={item.title}
                rules={item.rules}
                rulesCount={item.rulesCount}
                onViewRules={handleViewRules}
              />
            ))}
          </div>

          <h2 className="text-xl font-semibold mt-12 mb-4">
            Databases and Brokers
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Repeat the cards for this section as well */}
          </div>
        </div>
        <RulesModal
          isOpen={isModalOpen}
          onClose={() => setIsModalOpen(false)}
          rules={selectedRules}
        />
      </div>
    </div>
  );
};

export default BrowseLibrary;
