import React from "react";
import NewsletterSection from "./components/NewsletterSection";
import GiveawaySection from "./components/GiveawaySection";
import EventsSearchNav from "./components/EventsSearchNav";
import EventsSection from "./components/EventsSection";
import VideoItem from "./components/VideoItem";

export default function EventsPage() {
  return (
    <section className="px-10 py-4">

      <VideoItem 
        title="Events"
        url="https://www.loom.com/embed/fec8a6ca52ba4484ac510e55f2919d0f"
      />
      
      
      {/* <EventsSearchNav /> */}
      <EventsSection />
      {/* <GiveawaySection /> */}
      {/* <NewsletterSection /> */}
    </section>
  );
}
