import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { LanguageSelector } from "./LanguageSelector";
import { BlogContent } from "./BlogContent";
import { translations } from "./translations";
import { Language } from "./types";
import posthog from 'posthog-js';

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
    return (
      <div className="max-w-4xl mx-auto p-6">
        <h1 className="text-2xl font-bold text-center">Post not found</h1>
      </div>
    );
  }

  const post = translations[slug][language];

  const handleLanguageChange = (newLanguage: Language) => {
    posthog.capture('language_changed', {
      from: language,
      to: newLanguage,
      post_slug: slug
    });

    posthog.capture('blog_post_language_interaction', {
      previous_language: language,
      new_language: newLanguage,
      post_slug: slug,
      timestamp: new Date().toISOString()
    });

    setLanguage(newLanguage);
  };

  if (!post) {
    return (
      <div className="max-w-4xl mx-auto p-6">
        <h1 className="text-2xl font-bold text-center">Translation not available</h1>
      </div>
    );
  }

  return (
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
  );
};