import { useState, useEffect } from "react";
import { useParams, Navigate } from "react-router-dom";
import { LanguageSelector } from "./LanguageSelector";
import { BlogContent } from "./BlogContent";
import { translations } from "./translations";
import { Language } from "./types";
import posthog from 'posthog-js';
import { Helmet } from "react-helmet";

export const BlogPost = () => {
  const { slug } = useParams();
  const [language, setLanguage] = useState<Language>("en");
  
  useEffect(() => {
    if (slug) {
      posthog.capture('blog_post_viewed', {
        post_slug: slug,
        initial_language: language
      });
    }
  }, [slug, language]);

  if (!slug || !translations[slug]) {
    return <Navigate to="/" replace />;
  }

  const post = translations[slug][language];

  if (!post) {
    return <Navigate to="/" replace />;
  }

  const handleLanguageChange = (newLanguage: Language) => {
    posthog.capture('language_changed', {
      from: language,
      to: newLanguage,
      post_slug: slug
    });

    setLanguage(newLanguage);
  };

  return (
    <>
      <Helmet>
        <title>{post.title} | Speed Test Guide</title>
        <meta name="description" content={post.description || `Comprehensive internet speed test guide for ${post.title}.`} />
        <meta property="og:title" content={post.title} />
        <meta property="og:description" content={post.description || `Comprehensive internet speed test guide for ${post.title}.`} />
        <meta property="og:type" content="article" />
        <meta property="og:url" content={window.location.href} />
        <link rel="canonical" href={window.location.href} />
      </Helmet>
      <div className="max-w-4xl mx-auto p-6">
        <div className="mb-6 flex justify-between items-center">
          <h1 className="text-3xl font-bold">{post.title}</h1>
          <LanguageSelector 
            currentLanguage={language}
            onLanguageChange={handleLanguageChange}
          />
        </div>
        <BlogContent 
          content={post.content}
          language={language}
        />
      </div>
    </>
  );
};