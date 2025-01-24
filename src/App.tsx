import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { ThemeProvider } from "next-themes";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import { BlogPost } from "./components/blog/BlogPost";
import { Layout } from "./components/layout/Layout";
import posthog from 'posthog-js';
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

// Initialize PostHog with environment variable and proper configuration
if (import.meta.env.VITE_POSTHOG_KEY) {
  // Generate a persistent distinct_id if none exists
  const distinctId = localStorage.getItem('ph_distinct_id') || 
    `user_${Math.random().toString(36).substring(2, 15)}`;
  localStorage.setItem('ph_distinct_id', distinctId);

  posthog.init(import.meta.env.VITE_POSTHOG_KEY, {
    api_host: 'https://us.i.posthog.com', // Updated to correct endpoint
    loaded: (posthog) => {
      if (process.env.NODE_ENV === 'development') posthog.debug();
      // Identify user with distinct_id
      posthog.identify(distinctId);
    },
    autocapture: true,
    capture_pageview: false, // We handle pageviews manually
    persistence: 'localStorage',
    bootstrap: {
      distinctID: distinctId,
      isIdentifiedID: true,
    },
    disable_compression: true,
    disable_session_recording: true,
    request_batching: false
  });
}

function PostHogPageView() {
  const location = useLocation();

  useEffect(() => {
    const distinctId = localStorage.getItem('ph_distinct_id');
    // Only capture pageview if PostHog is initialized and has a distinct_id
    if (import.meta.env.VITE_POSTHOG_KEY && distinctId) {
      posthog.capture('$pageview', {
        current_url: window.location.href,
        path: location.pathname,
        search: location.search,
        title: document.title,
        host: window.location.host,
        distinct_id: distinctId
      });
    }
  }, [location]);

  return null;
}

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      retry: false,
      refetchOnWindowFocus: false
    }
  }
});

const App = () => (
  <QueryClientProvider client={queryClient}>
    <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <PostHogPageView />
          <Layout>
            <Routes>
              <Route path="/" element={<Index />} />
              <Route path="/:slug" element={<BlogPost />} />
              <Route path="*" element={<Index />} />
            </Routes>
          </Layout>
        </BrowserRouter>
      </TooltipProvider>
    </ThemeProvider>
  </QueryClientProvider>
);

export default App;