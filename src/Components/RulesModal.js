import React, { useEffect } from "react";
import { data } from "./data";
export const RulesModal = ({ isOpen, onClose, rules }) => {
  useEffect(() => {
    if (isOpen) {
      document.documentElement.classList.add("overflow-hidden");
    } else {
      document.documentElement.classList.remove("overflow-hidden");
    }

    return () => {
      document.documentElement.classList.remove("overflow-hidden");
    };
  }, [isOpen]);

  if (!isOpen) return null;
console.log(data)
  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
      <div className="bg-white rounded-lg w-full max-w-4xl sm:w-11/12 lg:w-8/12 relative mx-4">
        <button
          className="absolute top-4 right-8 text-gray-400 text-3xl font-extralight"
          onClick={onClose}
        >
          &times;
        </button>

        <div className="flex gap-2.5 border-b-2 border-b-slate-200 px-4 py-6 sm:px-8">
          <p className="text-lg sm:text-xl font-semibold text-slate-600">
            Prometheus self-monitoring
          </p>
          <div className="bg-slate-100 p-1 px-1.5 font-bold rounded-full text-gray-400 text-xs flex self-baseline">
            60 RULES
          </div>
        </div>

       
        <div className="px-4  sm:px-8 h-[500px]  overflow-y-auto">
          <div>
            <div className="flex gap-5 py-6">
              <div className="bg-slate-100 w-12 h-12 sm:w-14 sm:h-14 rounded-full flex justify-center items-center text-slate-500 font-bold">
                01
              </div>

              <div className="flex flex-col gap-2.5">
                <p className="text-lg sm:text-xl text-slate-600">
                  Prometheus self-monitoring
                </p>
                <p className="text-sm sm:text-lg text-slate-500">
                  A Prometheus job has disappeared
                </p>
              </div>
            </div>

            <div className=" relative w-11/12 max-w-full px-4 py-9 sm:px-8 sm:py-9 bg-slate-50 rounded-lg  sm:ml-16">
            <button 
              className="absolute top-0 p-4 right-0 text-gray-500 hover:bg-slate-200 bg-slate-100 rounded-bl-lg font-bold"
            //   onClick={handleCopy}
            >
                COPY
             
            </button>
              
              <p className="text-xs sm:text-base">
                - alert: PrometheusJobMissing expr: absent(up <br />
                for: 0m labels: severity: warning <br />
                annotations: summary: Prometheus job missing <br />
                description: "A Prometheus job has disappeared VALUE = LABELS = "
                <br />
              </p>
            </div>
          </div>
          <div>
            <div className="flex gap-5 py-6">
              <div className="bg-slate-100 w-12 h-12 sm:w-14 sm:h-14 rounded-full flex justify-center items-center text-slate-500 font-bold">
                01
              </div>

              <div className="flex flex-col gap-2.5">
                <p className="text-lg sm:text-xl text-slate-600">
                  Prometheus self-monitoring
                </p>
                <p className="text-sm sm:text-lg text-slate-500">
                  A Prometheus job has disappeared
                </p>
              </div>
            </div>

            <div className=" relative w-11/12 max-w-full px-4 py-9 sm:px-8 sm:py-9 bg-slate-50 rounded-lg  sm:ml-16">
            <button 
              className="absolute top-0 p-4 right-0 text-gray-500 hover:bg-slate-200 bg-slate-100 rounded-bl-lg font-bold"
            //   onClick={handleCopy}
            >
                COPY
             
            </button>
              
              <p className="text-xs sm:text-base">
                - alert: PrometheusJobMissing expr: absent(up <br />
                for: 0m labels: severity: warning <br />
                annotations: summary: Prometheus job missing <br />
                description: "A Prometheus job has disappeared VALUE = LABELS = "
                <br />
              </p>
            </div>
          </div>
          
         
        </div>
      </div>
    </div>
  );
};
