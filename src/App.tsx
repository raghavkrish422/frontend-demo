// Import toast notification components for user feedback
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
// Import tooltip provider for hover tooltips throughout the app
import { TooltipProvider } from "@/components/ui/tooltip";
// Import React Query for data fetching and caching
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
// Import routing components from react-router-dom
import { BrowserRouter, Routes, Route } from "react-router-dom";
// Import all page components
import Index from "./pages/Index"; // Landing page with device selection
import SmallView from "./pages/SmallView"; // iPhone 14 view
import MediumView from "./pages/MediumView"; // iPad mini view
import LargeView from "./pages/LargeView"; // MacBook Air view
import NotFound from "./pages/NotFound"; // 404 error page

// Initialize React Query client for managing server state
const queryClient = new QueryClient();

/**
 * App Component
 * Root component that sets up all providers and routing
 * Wraps entire application with necessary context providers
 */
const App = () => (
  // QueryClientProvider enables React Query throughout the app
  <QueryClientProvider client={queryClient}>
    {/* TooltipProvider enables tooltips across all components */}
    <TooltipProvider>
      {/* Toaster components for displaying toast notifications */}
      <Toaster />
      <Sonner />
      {/* BrowserRouter enables client-side routing */}
      <BrowserRouter>
        {/* Routes container for all application routes */}
        <Routes>
          {/* Home page - device selection screen */}
          <Route path="/" element={<Index />} />
          {/* Small device view - iPhone 14 layout */}
          <Route path="/small" element={<SmallView />} />
          {/* Medium device view - iPad mini layout */}
          <Route path="/medium" element={<MediumView />} />
          {/* Large device view - MacBook Air layout */}
          <Route path="/large" element={<LargeView />} />
          {/* ALL CUSTOM ROUTES MUST BE ADDED ABOVE THIS LINE */}
          {/* Catch-all route for 404 errors - must be last */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
