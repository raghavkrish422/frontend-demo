// Import navigation hook from react-router-dom
import { useNavigate } from "react-router-dom";
// Import device icons from lucide-react
import { Smartphone, Tablet, Monitor } from "lucide-react";
// Import Button component from UI library
import { Button } from "@/components/ui/button";

/**
 * Index Component
 * Landing page that allows users to select which device view to display
 * Provides navigation to Small (iPhone), Medium (iPad), or Large (MacBook) views
 */
const Index = () => {
  // Hook for programmatic navigation between routes
  const navigate = useNavigate();

  return (
    // Full-screen container with gradient background from navy-dark to navy-medium
    // Flex layout centers content both vertically and horizontally
    <div className="min-h-screen bg-gradient-to-br from-navy-dark to-navy-medium flex items-center justify-center p-6">
      {/* Centered content wrapper */}
      <div className="text-center">
        {/* Main heading */}
        <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
          Credit Card Dashboard
        </h1>
        {/* Subtitle text */}
        <p className="text-lg text-white/80 mb-12">
          Choose your device view
        </p>

        {/* Device selection buttons container */}
        {/* Stacks vertically on mobile, horizontally on desktop */}
        <div className="flex flex-col md:flex-row gap-6 justify-center items-center">
          {/* Small view button - navigates to iPhone 14 layout */}
          <Button
            onClick={() => navigate("/small")} // Navigate to /small route
            className="w-64 h-32 bg-white hover:bg-gray-100 text-navy-dark flex flex-col items-center justify-center gap-3 text-lg font-semibold shadow-lg hover:shadow-xl transition-all"
          >
            <Smartphone className="w-12 h-12" /> {/* Smartphone icon */}
            <span>Small - iPhone 14</span>
          </Button>

          {/* Medium view button - navigates to iPad mini layout */}
          <Button
            onClick={() => navigate("/medium")} // Navigate to /medium route
            className="w-64 h-32 bg-white hover:bg-gray-100 text-navy-dark flex flex-col items-center justify-center gap-3 text-lg font-semibold shadow-lg hover:shadow-xl transition-all"
          >
            <Tablet className="w-12 h-12" /> {/* Tablet icon */}
            <span>Medium - iPad mini</span>
          </Button>

          {/* Large view button - navigates to MacBook Air layout */}
          <Button
            onClick={() => navigate("/large")} // Navigate to /large route
            className="w-64 h-32 bg-white hover:bg-gray-100 text-navy-dark flex flex-col items-center justify-center gap-3 text-lg font-semibold shadow-lg hover:shadow-xl transition-all"
          >
            <Monitor className="w-12 h-12" /> {/* Monitor icon */}
            <span>Large - MacBook Air</span>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Index;
