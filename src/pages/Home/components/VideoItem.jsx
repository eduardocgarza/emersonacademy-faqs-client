import React from "react";

export default function VideoItem(props) {
  const { url, title } = props;
  
  return (
    <div className="flex items-center justify-center mb-6">
      <iframe
        allowFullScreen
        src={url}
        title={title}
        className="w-[600px] h-[400px] rounded-2xl"
      ></iframe>
    </div>
  );
}