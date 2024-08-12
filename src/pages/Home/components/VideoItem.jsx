import React from "react";

export default function VideoItem(props) {
  const { video } = props;
  const { title, tagline, description, url } = video;

  return (
    <div className="w-full aspect-w-16 aspect-h-9">
      <header className="mb-3 min-h-[100px]">
        <h4 className="text-[12.5px] bg-gray-100 text-gray-700 rounded-full inline-block px-3 py-0.5 mb-1">
          Video
        </h4>
        <h2 className="text-[16px] font-semibold mb-0.5">
          {title}: {tagline}
        </h2>
        <p className="text-[13.5px] text-gray-500">{description}</p>
      </header>

      <iframe
        src={url}
        title={title}
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        referrerPolicy="strict-origin-when-cross-origin"
        allowFullScreen={true}
        className="w-full h-[350px] rounded-2xl"
      ></iframe>
    </div>
  );
}
