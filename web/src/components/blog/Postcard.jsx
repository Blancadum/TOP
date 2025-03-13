import React from "react";
import { Link } from "react-router-dom"; 

export default function PostCard({ title, excerpt, slug, date, tags, image }) {
  return (
    <article className="postcard bg-white border border-gray-200 rounded-lg shadow-md overflow-hidden">
      {/* Imagen de la tarjeta */}
      {image && (
        <div className="postcard-image">
          <img
            src={image}
            alt={`Imagen de ${title}`}
            className="w-full h-48 object-cover"
          />
        </div>
      )}

      {/* Contenido de la tarjeta */}
      <div className="p-4">
        <h2 className="postcard-title text-xl font-bold mb-2">
          <Link to={`/blog/${slug}`} className="text-brandPurple hover:underline">
            {title}
          </Link>
        </h2>
        <p className="postcard-excerpt text-gray-700 mb-4">{excerpt}</p>
        <div className="flex justify-between items-center text-sm text-gray-500">
          <span>{date}</span>
          <div className="flex gap-2">
            {tags?.map((tag, index) => (
              <span
                key={index}
                className="postcard-tags bg-gray-100 text-gray-700 px-2 py-1 rounded"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
      </div>
    </article>
  );
}
