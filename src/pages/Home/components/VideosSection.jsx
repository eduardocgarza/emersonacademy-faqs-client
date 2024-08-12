import React from "react";
import VideoItem from "./VideoItem";
import mascotEmStumped from "../../../assets/mascot-em-stumped.png";
import { ALL_VIDEOS } from "../../../data/videos";

export default function VideosSection(props) {
  const { selectedSections, setSelectedSections } = props;

  const noSectionsShowing = selectedSections.every(
    (section) => !section.selected
  );

  return (
    <section className="pt-10">
      {noSectionsShowing && (
        <header className="mb-20 text-center">
          <h2 className="text-4xl text-center font-semibold mb-4">
            No videos to show
          </h2>
          <img
            src={mascotEmStumped}
            alt="One of Emerson's two mascots, Em"
            className="block w-[200px] mx-auto mb-4"
          />
          <p className="text-sm text-gray-800">
            Click on the buttons above to view the different sections of FAQs
          </p>
        </header>
      )}

      {ALL_VIDEOS.map((sectionItem) => {
        const selectedSection = selectedSections.find(
          (section) => section.name === sectionItem.key
        );
        if (!selectedSection.selected) return null;

        return (
          <>
            {sectionItem.subSections.map((subSectionItem) => (
              <section className="pb-20" key={subSectionItem.name}>
                <header className="text-center mb-10">
                  <h2 className="text-center text-3xl text-gray-800 mb-2">
                    {sectionItem.name}
                  </h2>
                  <p className="text-[14px] text-gray-500">
                    {sectionItem.description}
                  </p>
                </header>
                <section className="grid md:grid-cols-2 xl:grid-cols-3 gap-x-6 gap-y-12 mb-10">
                  {subSectionItem.videos.map((videoItem) => (
                    <VideoItem key={videoItem.title} video={videoItem} />
                  ))}
                </section>
              </section>
            ))}
          </>
        );
      })}
    </section>
  );
}
