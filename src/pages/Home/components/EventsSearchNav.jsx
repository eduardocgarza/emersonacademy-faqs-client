import React from "react";
import {
  AcademicCapIcon,
  BriefcaseIcon,
  PaintBrushIcon,
  UserIcon,
} from "@heroicons/react/20/solid";

export default function EventsSearchNav() {
  const [selectedOrbits, setSelectedOrbits] = React.useState([]);

  function handleClick() {
    alert("clicked");
  }

  return (
    <header>
      <nav className="flex gap-x-8 justify-center py-2 mb-3">
        <button
          onClick={handleClick}
          className="flex items-center gap-y-1 justify-center flex-col text-gray-400"
        >
          <BriefcaseIcon className="h-6 w-6" />
          <p className="text-gray-800 text-[13px]">Business</p>
        </button>
        <button
          onClick={handleClick}
          className="flex items-center gap-y-1 justify-center flex-col text-gray-400"
        >
          <PaintBrushIcon className="h-6 w-6" />
          <p className="text-gray-800 text-[13px]">Creative</p>
        </button>
        <button
          onClick={handleClick}
          className="flex items-center gap-y-1 justify-center flex-col text-gray-400"
        >
          <AcademicCapIcon className="h-6 w-6" />
          <p className="text-gray-800 text-[13px]">Education</p>
        </button>
        <button
          onClick={handleClick}
          className="flex items-center gap-y-1 justify-center flex-col text-gray-400"
        >
          <UserIcon className="h-6 w-6" />
          <p className="text-gray-800 text-[13px]">Individuals</p>
        </button>
      </nav>
      <nav className="flex flex-wrap justify-center">
        {[
          "Elementary-School Students",
          "High-School Students",
          "University Students",
        ].map((category, index) => (
          <button
            key={index}
            className="bg-gray-100 text-gray-800 text-[13px] px-3 py-1 rounded-full mr-2 mb-2"
          >
            {category}
          </button>
        ))}
      </nav>
    </header>
  );
}
