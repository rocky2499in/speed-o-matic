import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { ThemeProvider } from "next-themes";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Index from "./pages/Index";
import { BlogPost } from "./components/blog/BlogPost";
import { Layout } from "./components/layout/Layout";
import posthog from 'posthog-js';
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

// Initialize PostHog with environment variable
posthog.init(import.meta.env.VITE_POSTHOG_KEY || '', {
  api_host: 'https://app.posthog.com',
  loaded: (posthog) => {
    if (process.env.NODE_ENV === 'development') posthog.debug();
  },
  autocapture: false // Disable autocapture to prevent URL issues
});

function PostHogPageView() {
  const location = useLocation();

  useEffect(() => {
    // Only track page views if PostHog is properly initialized
    if (import.meta.env.VITE_POSTHOG_KEY) {
      posthog.capture('$pageview', {
        $current_url: window.location.pathname // Ensure clean URL capture
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
              <Route path="/blog/:slug" element={<BlogPost />} />
              <Route path="*" element={<Navigate to="/" replace />} />
            </Routes>
          </Layout>
        </BrowserRouter>
      </TooltipProvider>
    </ThemeProvider>
  </QueryClientProvider>
);

export default App;