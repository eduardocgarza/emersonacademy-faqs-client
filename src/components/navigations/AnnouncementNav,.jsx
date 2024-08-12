import { GiftIcon } from "@heroicons/react/20/solid";
import React from "react";

export default function AnnouncementNav() {
  return (
    <a
      className="bg-yellow-300 text-gray-800 text-[13px] py-2 text-center flex justify-center items-center"
      href="https://events.humanitix.com/emersonacademy-ai-business-entrepreneurs-businessowners-08-31"
      rel="noreferrer"
      target="_blank"
    >
      <GiftIcon className="w-4 h-4 text-gray-800" /> <span className="ml-2 underline">Next workshop</span>: Sat, Aug 31 (limited
      spots)
    </a>
  );
}
