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
  posthog.init(import.meta.env.VITE_POSTHOG_KEY, {
    api_host: 'https://app.posthog.com',
    loaded: (posthog) => {
      if (process.env.NODE_ENV === 'development') posthog.debug();
    },
    autocapture: true,
    capture_pageview: false, // We handle pageviews manually
    persistence: 'localStorage',
    bootstrap: {
      distinctID: posthog.get_distinct_id() || undefined,
      isIdentifiedID: false,
    },
    disable_compression: true, // Disable compression to help with debugging
    disable_session_recording: true, // Disable session recording for now
    _capture_metrics: false, // Disable metrics capture until properly configured
    request_batching: false // Disable batching to help with debugging
  });
}

function PostHogPageView() {
  const location = useLocation();

  useEffect(() => {
    // Only capture pageview if PostHog is initialized and has a distinct_id
    if (import.meta.env.VITE_POSTHOG_KEY && posthog.get_distinct_id()) {
      posthog.capture('$pageview', {
        current_url: window.location.href,
        path: location.pathname,
        search: location.search,
        title: document.title,
        host: window.location.host,
        distinct_id: posthog.get_distinct_id() // Explicitly include distinct_id
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