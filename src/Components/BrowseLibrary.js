import React, { useState } from "react";
import Card from "./Card";
import { RulesModal } from "./RulesModal";
import SearchBar from "./SearchBar";
import {
  SiPrometheus,
  GiJigsawPiece,
  FaDocker,
  SiWindows11,
  SiVmware,
  SiNetdata,
  SiMysql,
  SiPostgresql,
  SiMicrosoftsqlserver,
} from "../Icons/index";
import { useData } from "./DataContext";

const serviceIcons = {
  "Prometheus self-monitoring": <SiPrometheus style={{ color: "#E6522C" }} />,
  "Host and hardware": <GiJigsawPiece className="text-slate-400" />,
  "Docker containers": <FaDocker style={{ color: "#2496ED" }} />,
  "Windows Server": <SiWindows11 style={{ color: "#0078D4" }} />,
  VMware: <SiVmware />,
  Netdata: <SiNetdata style={{ color: "#00AB44" }} />,
  MySQL: <SiMysql />,
  PostgreSQL: <SiPostgresql style={{ color: "#4169E1" }} />,
  "SQL Server": <SiMicrosoftsqlserver style={{ color: "#CC2927" }} />,
};

const BrowseLibrary = () => {
  const [selectedService, setSelectedService] = useState({});
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");

  const { data } = useData();

  const handleViewRules = (serviceName, rulesCount, rules, slug, icon) => {
    setSelectedService({ serviceName, rulesCount, rules, slug, icon });
    setIsModalOpen(true);
  };

  return (
    <div className="lg:px-32  px-6 mt-12 flex flex-col gap-6">
      <p className="text-xl font-medium text-slate-600">Browse Library</p>
      <SearchBar searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
      <div className="min-h-screen">
        <div>
          {data?.groups?.length &&
            data.groups.slice(0, 2).map((alert, alertIndex) => (
              <div className="pb-12" key={alertIndex}>
                <h2 className="text-base font-bold mb-4 uppercase text-slate-400">
                  {alert.name}
                </h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                  {alert.services
                    .filter((serviceName) =>
                      serviceName.name
                        .toLowerCase()
                        .includes(searchTerm.toLowerCase())
                    )
                    .slice(0, 8)
                    .map((serviceName, index) => {
                      const rules =
                        serviceName?.exporters?.flatMap(
                          (exporter) => exporter.rules
                        ) || [];
                      const slug =
                        serviceName?.exporters?.flatMap(
                          (exporter) => exporter.slug
                        ) || [];
                      const rulesCount = rules.length;

                      return (
                        <Card
                          key={index}
                          rules={rules}
                          title={serviceName.name}
                          rulesCount={rulesCount}
                          onViewRules={() =>
                            handleViewRules(
                              serviceName.name,
                              rulesCount,
                              rules,
                              slug,
                              serviceIcons[serviceName.name] || (
                                <GiJigsawPiece className="text-slate-400" />
                              )
                            )
                          }
                          icon={
                            serviceIcons[serviceName.name] || (
                              <GiJigsawPiece className="text-slate-400" />
                            )
                          }
                        />
                      );
                    })}
                </div>
              </div>
            ))}
        </div>
        <RulesModal
          isOpen={isModalOpen}
          onClose={() => setIsModalOpen(false)}
          serviceName={selectedService.serviceName}
          rulesCount={selectedService.rulesCount}
          rules={selectedService.rules}
          slug={selectedService.slug}
          icon={selectedService.icon}
        />
      </div>
    </div>
  );
};

export default BrowseLibrary;
