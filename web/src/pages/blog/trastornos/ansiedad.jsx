import PageLayout from "@/src/client/components/Inpage/PageLayout";
import React from "react";
import CTABanner from "@/src/client/components/CTA-Button/CtaBanner";
import PostImage from "@/src/client/components/Blog/PostImage";
import PostHeader from "@/src/client/components/Blog/PostHeader";
import PostContent from "@/src/client/components/Blog/PostContent";
import PostTags from "@/src/client/components/Blog/PostTags";


export default function BlogPost({ title, date, content, author, imageSrc, tags }) {
    return (
      <PageLayout>
      <article className="max-w-4xl mx-auto px-4 py-8">
        <PostImage imageSrc={imageSrc} title={title} />
        <PostHeader title={title} date={date} author={author} />
        <PostContent content={content} />
        <PostTags tags={tags} />
        <div className="mt-12">
          <CTABanner
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
      </PageLayout>
    );
  }
  