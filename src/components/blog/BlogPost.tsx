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
    // Track blog post view
    if (slug) {
      posthog.capture('blog_post_viewed', {
        post_slug: slug,
        initial_language: language
      });
    }

    // Set HTML lang attribute for accessibility and SEO
    document.documentElement.lang = language;
  }, [slug, language]);

  // Early return with 404 metadata if post doesn't exist
  if (!slug || !translations[slug]) {
    return (
      <>
        <Helmet>
          <title>404 - Post Not Found | Speed Test Guide</title>
          <meta name="robots" content="noindex, follow" />
          <meta name="description" content="The requested speed test guide could not be found." />
        </Helmet>
        <div className="max-w-4xl mx-auto p-6 text-center">
          <h1 className="text-3xl font-bold mb-4">Post Not Found</h1>
          <p className="text-muted-foreground mb-4">
            The speed test guide you're looking for could not be found.
          </p>
          <a href="/" className="text-primary hover:underline">
            Return to Home
          </a>
        </div>
      </>
    );
  }

  const post = translations[slug][language];

  // If translation not available, fallback to English
  if (!post && language !== "en") {
    return <Navigate to={`/blog/${slug}`} replace />;
  }

  // If English version doesn't exist (shouldn't happen), show 404
  if (!post) {
    return <Navigate to="/" replace />;
  }

  const defaultDescription = `Comprehensive internet speed test guide for ${post.title}. Check internet speeds, compare providers, and find the best internet service in ${post.title.split('for ').pop()}.`;

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
        <title>{`${post.title} | Speed Test Guide`}</title>
        <meta name="description" content={post.description || defaultDescription} />
        <meta property="og:title" content={post.title} />
        <meta property="og:description" content={post.description || defaultDescription} />
        <meta property="og:type" content="article" />
        <meta property="og:url" content={window.location.href} />
        <link rel="canonical" href={window.location.href} />
        <meta name="robots" content="index, follow" />
        
        {/* Schema.org markup for better SEO */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Article",
            "headline": post.title,
            "description": post.description || defaultDescription,
            "url": window.location.href,
            "publisher": {
              "@type": "Organization",
              "name": "Speedcheck Digital",
              "url": "https://speedcheck.digital"
            }
          })}
        </script>
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