import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { ThemeProvider } from "next-themes";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import { BlogPost } from "./components/blog/BlogPost";
import posthog from 'posthog-js';
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

// Initialize PostHog with a public key
posthog.init('phc_your_public_key_here', {
  api_host: 'https://app.posthog.com',
  loaded: (posthog) => {
    if (process.env.NODE_ENV === 'development') posthog.debug();
  }
});

function PostHogPageView() {
  const location = useLocation();

  useEffect(() => {
    // Track page views
    posthog.capture('$pageview');
  }, [location]);

  return null;
}

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <ThemeProvider defaultTheme="system" enableSystem>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <PostHogPageView />
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/blog/:slug" element={<BlogPost />} />
          </Routes>
        </BrowserRouter>
      </TooltipProvider>
    </ThemeProvider>
  </QueryClientProvider>
);

export default App;