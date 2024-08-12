import React from "react";
import { Outlet } from "react-router-dom";
import PublicFooter from "../footers/PublicFooter";
import PublicTopNav from "../navigations/PublicTopNav";
import AnnouncementNav from "../navigations/AnnouncementNav,";

export default function BlueprintWrapper() {
  return (
    <section className="flex flex-col min-h-screen">
      <AnnouncementNav />
      <PublicTopNav />
      <section className="flex-1 h-full flex flex-col">
        <Outlet />
      </section>
      <PublicFooter />
    </section>
  );
}
