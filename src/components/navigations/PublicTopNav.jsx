import React from "react";
import { Link } from "react-router-dom";
import emersonLogo from "../../../public/logo-emerson.png";

export default function PublicTopNav() {
  return (
    <div className="h-[60px] w-full bg-white border-b border-b-gray-300 px-4 py-1">
      <div className="container mx-auto">
        <section className="flex justify-between">
          <nav id="left">
            <Link to="/" className="h-[50px] flex items-center justify-center">
              <img
                src={emersonLogo}
                alt="Emerson Academy Logo"
                className="block w-[35px] h-[35px] cursor-pointer mr-3 rounded-xl"
              />
              <h1 className="font-cinzel font-semibold text-xl">Emerson</h1>
            </Link>
          </nav>
          <nav id="right" className="flex items-center">
            <a
              href="https://ai.emersonacademy.org"
              target="_blank"
              rel="noreferrer"
              className="text-xs text-gray-800 mx-2"
            >
              Ai workshops
            </a>
            <a
              href="https://events.emersonacademy.org"
              target="_blank"
              rel="noreferrer"
              className="text-xs text-gray-800 mx-2"
            >
              Events Calendar
            </a>
            <a
              href="http://emersonacademy.org"
              target="_blank"
              rel="noreferrer"
              className="text-xs text-gray-800 mx-2"
            >
              Corporate site
            </a>
          </nav>
        </section>
      </div>
    </div>
  );
}
