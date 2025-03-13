// components/VideoCard.js
import React from "react";

const VideoCard = ({ videoUrl, title }) => {
  return (
    <div className="rounded-lg shadow-lg overflow-hidden bg-white">
      <iframe
        className="w-full aspect-video"
        src={videoUrl}
        title={title}
        aria-label={`Video: ${title}`}
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      ></iframe>
      <div className="p-4">
        <p className="text-paragraph font-medium text-gray-800">{title}</p>
      </div>
    </div>
  );
};

export default VideoCard;
