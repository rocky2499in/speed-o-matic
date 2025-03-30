
import { useParams } from "react-router-dom";
import { BlogContent } from "./BlogContent";
import posthog from 'posthog-js';
import { Helmet } from "react-helmet";
import { cityPages } from "./cityPages";
import { useEffect } from 'react';
import { Navigate } from 'react-router-dom';

export const BlogPost = () => {
  const { slug } = useParams();
  
  useEffect(() => {
    // Track blog post view
    if (slug) {
      posthog.capture('blog_post_viewed', {
        post_slug: slug
      });
    }

    // Set HTML lang attribute for accessibility and SEO
    document.documentElement.lang = 'en';
  }, [slug]);

  // If no slug is provided, redirect to homepage
  if (!slug) {
    return <Navigate to="/" />;
  }

  // If the post doesn't exist in our city pages, show 404 page
  if (!cityPages[slug]) {
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

  const post = cityPages[slug];
  const defaultDescription = `Comprehensive internet speed test guide for ${post.title}. Check internet speeds, compare providers, and find the best internet service in ${post.title.split('for ').pop()}.`;
  const baseUrl = typeof window !== 'undefined' ? window.location.origin : 'https://speedcheck.digital';

  return (
    <>
      <Helmet>
        <title>{`${post.title} | Speed Test Guide`}</title>
        <meta name="description" content={post.description || defaultDescription} />
        <meta property="og:title" content={post.title} />
        <meta property="og:description" content={post.description || defaultDescription} />
        <meta property="og:type" content="article" />
        <meta property="og:url" content={typeof window !== 'undefined' ? window.location.href : `${baseUrl}/${slug}`} />
        <link rel="canonical" href={typeof window !== 'undefined' ? window.location.href : `${baseUrl}/${slug}`} />
        <meta name="robots" content="index, follow" />
        <meta name="googlebot" content="index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1" />
        <meta name="bingbot" content="index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1" />
        
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Article",
            "headline": post.title,
            "description": post.description || defaultDescription,
            "url": typeof window !== 'undefined' ? window.location.href : `${baseUrl}/${slug}`,
            "publisher": {
              "@type": "Organization",
              "name": "Speedcheck Digital",
              "url": baseUrl
            },
            "mainEntityOfPage": {
              "@type": "WebPage",
              "@id": typeof window !== 'undefined' ? window.location.href : `${baseUrl}/${slug}`
            }
          })}
        </script>
      </Helmet>
      <div className="max-w-4xl mx-auto p-6">
        <h1 className="text-3xl font-bold mb-6">{post.title}</h1>
        <BlogContent content={post.content} />
      </div>
    </>
  );
};
