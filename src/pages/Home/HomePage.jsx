import React from "react";
import NewsletterSection from "./components/NewsletterSection";
import GiveawaySection from "./components/GiveawaySection";
import EventsSearchNav from "./components/EventsSearchNav";
import EventsSection from "./components/EventsSection";
import VideoItem from "./components/VideoItem";
import { ALL_VIDEOS } from "../../data/videos";
import VideosSection from "./components/VideosSection";

export default function HomePage() {
  const [selectedSections, setSelectedSections] = React.useState([
    {
      name: "aboutEmerson",
      selected: true,
    },
    {
      name: "workshops",
      selected: true,
    },
  ]);

  return (
    <section className="px-10 py-4">
      <EventsSearchNav
        selectedSections={selectedSections}
        setSelectedSections={setSelectedSections}
      />
      <VideosSection 
        selectedSections={selectedSections}
        setSelectedSections={setSelectedSections}
      />
      <EventsSection />
      {/* <GiveawaySection /> */}
      {/* <NewsletterSection /> */}
    </section>
  );
}
