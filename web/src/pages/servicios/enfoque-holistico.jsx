import React from "react";
import Layout from "@/components/layout";
export default function BlogPost({ title, date, content, author, imageSrc, tags }) {
    return (
      <Layout>
      <article className="max-w-4xl mx-auto px-4 py-8">
        <PostImage imageSrc={imageSrc} title={title} />
        <PostHeader title={title} date={date} author={author} />
        <PostContent content={content} />
        <PostTags tags={tags} />
        <div className="mt-12">
          <CtaButton
            title="¿Quieres saber más?"
            subtitle="Explora nuestras opciones para mejorar tu bienestar emocional."
            buttonText="Leer más"
            buttonLink="/contacto"
            showTitle={true}
            showSubtitle={true}
            showButton={true}
          />
        </div>
      </article>
      </Layout>
    );
  }
  