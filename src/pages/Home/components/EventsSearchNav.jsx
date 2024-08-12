import React from "react";
import {
  AcademicCapIcon,
  BriefcaseIcon,
  GlobeAltIcon,
  PaintBrushIcon,
  PresentationChartLineIcon,
  UserIcon,
} from "@heroicons/react/20/solid";

export default function EventsSearchNav(props) {
  const { selectedSections, setSelectedSections } = props;

  function handleClick(sectionName) {
    setSelectedSections((prev) =>
      prev.map((section) => {
        if (section.name === sectionName) {
          return { ...section, selected: !section.selected };
        } 
        return { ...section };
      })
    );
  }

  return (
    <header>
      <nav className="flex gap-x-8 justify-center py-2 mb-3">
        <button
          onClick={() => handleClick("aboutEmerson")}
          className={`p-4 rounded-2xl flex items-center gap-y-1 justify-center flex-col text-gray-400 min-w-[150px] ${selectedSections[0].selected ? "bg-gray-100" : "bg-gray-50"}`}
        >
          <GlobeAltIcon className="h-6 w-6 text-gray-400" />
          <p className="text-gray-900 text-[13px]">About Emerson</p>
        </button>
        <button
          onClick={() => handleClick("workshops")}
          className={`p-4 rounded-2xl flex items-center gap-y-1 justify-center flex-col text-gray-400 min-w-[150px] ${selectedSections[1].selected ? "bg-gray-100" : "bg-gray-50"}`}
        >
          <PresentationChartLineIcon className="h-6 w-6 text-gray-400" />
          <p className="text-gray-800 text-[13px]">Workshops</p>
        </button>
      </nav>
    </header>
  );
}
