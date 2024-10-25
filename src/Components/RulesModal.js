import React, { useEffect, useState } from "react";
import yaml from "js-yaml";
import { FaCheckCircle } from "../Icons/index";

export const RulesModal = ({ isOpen, onClose, serviceName, rulesCount, slug , icon,}) => {
  const [rulesData, setrulesData] = useState([]);
  const [showToast, setShowToast] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const fetchRuleData = async () => {
      if (isOpen && serviceName && slug) {
        setIsLoading(true);
        try {
          const formattedServiceName = serviceName.replace(/\s+/g, "-").toLowerCase();
          const response = await fetch(
            `https://raw.githubusercontent.com/samber/awesome-prometheus-alerts/master/dist/rules/${formattedServiceName}/${slug}.yml`
          );
          const yamlText = await response.text();
          const data = yaml.load(yamlText);
          const rulesData = data?.groups?.[0]?.rules;
          setrulesData(rulesData);
        } catch (error) {
          console.error("Error fetching or parsing rule data:", error);
        } finally {
          setIsLoading(false);
        }
      }
    };
    fetchRuleData();
  }, [isOpen, serviceName, slug]);

  const handleCopy = (rule) => {
    const textToCopy = `
      - alert: ${rule.alert}
      expr: ${rule.expr}
      for: ${rule.for}
      severity: ${rule.labels?.severity}
      summary: ${rule.annotations?.summary}
      description: ${rule.annotations?.description}
    `;
    navigator.clipboard.writeText(textToCopy.trim()).then(
      () => {
        setShowToast(true);
        setTimeout(() => setShowToast(false), 3000);
      },
      (err) => console.error("Error copying text: ", err)
    );
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
      <div className="bg-white rounded-lg w-full max-w-4xl sm:w-11/12 lg:w-8/12 relative mx-4">
        {showToast && (
          <div className="fixed top-4 left-1/2 transform -translate-x-1/2 bg-green-500 text-white px-4 py-2 rounded shadow-md flex items-center gap-2">
            <FaCheckCircle className="text-white" />
            Copied to clipboard!
          </div>
        )}

        <button
          className="absolute top-4 right-8 text-gray-400 text-3xl font-extralight"
          onClick={onClose}
        >
          &times;
        </button>

        <div className="flex gap-2.5 border-b-2 border-b-slate-200 px-4 py-6 sm:px-8">
         
        <div className="text-2xl flex self-baseline">{icon}</div>
         
          <p className="text-lg sm:text-xl font-semibold text-slate-600">
            {serviceName}
          </p>
          <div className="bg-slate-100 p-1 px-1.5 font-bold rounded-full text-gray-400 text-xs flex self-center">
          {rulesCount} {rulesCount > 1 ? "RULES" : "RULE"}
          </div>
        </div>

        <div className="px-4 sm:px-8 h-[500px] overflow-y-auto">
          {isLoading ? (
            <div className="flex justify-center items-center h-full">
              <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-blue-500 border-solid"></div>
            </div>
          ) : (
            rulesData.map((singleRule, index) => (
              <div key={index}>
                <div className="flex gap-5 py-6">
                  <div className="bg-slate-100 w-12 h-12 sm:w-14 sm:h-14 rounded-full flex justify-center items-center text-slate-500 font-bold">
                    {index + 1}
                  </div>
                  <div className="flex flex-col gap-2.5">
                    <p className="text-lg sm:text-xl text-slate-600">
                      {singleRule?.alert?.replace(/([a-z])([A-Z])/g, "$1 $2")}
                    </p>
                    <p className="text-sm sm:text-lg text-slate-500">
                      {singleRule?.annotations?.description}
                    </p>
                  </div>
                </div>

                <div className="relative w-11/12 max-w-full px-4 py-9 overflow-x-auto sm:px-8 sm:py-9 bg-slate-50 rounded-lg sm:ml-16">
                  <button
                    className="absolute top-0 p-4 right-0 text-gray-500 hover:bg-slate-200 bg-slate-100 rounded-bl-lg font-bold"
                    onClick={() => handleCopy(singleRule)}
                  >
                    COPY
                  </button>

                  <p className="text-xs sm:text-base font-mono">
                    <p style={{ color: "#22863A" }}>
                      - alert:{" "}
                      <span style={{ color: "#032F62" }}>{singleRule?.alert}</span>
                    </p>
                    <p style={{ color: "#22863A" }} className="ml-6">
                      expr: <span style={{ color: "#032F62" }}>{singleRule?.expr}</span>
                    </p>
                    <p style={{ color: "#22863A" }} className="ml-6">
                      for: <span style={{ color: "#032F62" }}>{singleRule?.for}</span>
                    </p>
                    <div className="ml-6">
                      <p style={{ color: "#22863A" }}>labels:</p>
                      <p className="ml-6" style={{ color: "#22863A" }}>
                        severity: <span style={{ color: "#032F62" }}>{singleRule?.labels?.severity}</span>
                      </p>
                    </div>
                    <div className="ml-6">
                      <p style={{ color: "#22863A" }}>annotations:</p>
                      <p className="ml-6" style={{ color: "#22863A" }}>
                        summary: <span style={{ color: "#032F62" }}>{singleRule?.annotations?.summary}</span>
                      </p>
                      <p className="ml-6" style={{ color: "#22863A" }}>
                        description: <span style={{ color: "#032F62" }}>{singleRule?.annotations?.description}</span>
                      </p>
                    </div>
                  </p>
                </div>
              </div>
            ))
          )}
        </div>
      </div>
    </div>
  );
};
