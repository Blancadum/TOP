// components/VideoGrid.js
import React from "react";
import VideoCard from "@/components/Video/VideoCard";

const VideoGrid = ({ videos, title = "Nuestros Videos" }) => {
  return (
    <section className="container mx-auto py-section px-6 md:px-12 lg:px-16">
      {/* Encabezado del grid */}
      {title && (
        <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-8 text-center">
          {title}
        </h2>
      )}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {videos.map((video) => (
          <VideoCard key={video.url} videoUrl={video.url} title={video.title} />
        ))}
      </div>
    </section>
  );
};

export default VideoGrid;
