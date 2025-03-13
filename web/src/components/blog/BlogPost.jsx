import React from "react";
import CTABanner from "../CTA-Button/CtaBanner";


function PostImage({ imageSrc, title }) {
  if (!imageSrc) return null;
  return (
    <div className="mb-6 h-60 w-full overflow-hidden rounded-md">
      <img
        src={imageSrc}
        alt={title}
        className="object-cover w-full h-full"
      />
    </div>
  );
}

function PostHeader({ title, date, author }) {
  return (
    <header className="mb-6">
      <h1 className="text-h1 text-gray-900">{title}</h1>
      <div className="flex flex-col md:flex-row justify-between text-sm text-gray-500">
        <span>{date}</span>
        {author && <span>Por: {author}</span>}
      </div>
    </header>
  );
}

function PostContent({ content }) {
  return (
    <section className="prose prose-sm md:prose-lg lg:prose-xl max-w-none text-gray-700">
      {content}
    </section>
  );
}

function PostTags({ tags }) {
  if (!tags || tags.length === 0) return null;
  return (
    <footer className="mt-8">
      <h2 className="text-lg font-semibold text-gray-800 mb-4">Etiquetas:</h2>
      <div className="flex flex-wrap gap-2">
        {tags.map((tag, index) => (
          <span
            key={index}
            className="bg-gray-100 text-gray-700 text-sm font-medium px-3 py-1 rounded-md"
          >
            {tag}
          </span>
        ))}
      </div>
    </footer>
  );
}

export default function BlogPost({ title, date, content, author, imageSrc, tags }) {
  return (
      <article className="max-w-4xl mx-auto px-4 py-8">
        <PostImage imageSrc={imageSrc} title={title} />
        <PostHeader title={title} date={date} author={author} />
        <PostContent content={content} />
        <PostTags tags={tags} />
        <div className="mt-12">
          <CTABanner 
            showTitle={true}
            showSubtitle={true}
            showContactButton={true}
            showPricingButton={true}
          />
        </div>
      </article>
  );
}
