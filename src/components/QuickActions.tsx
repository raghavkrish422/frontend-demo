// Import icons from lucide-react library for visual representation of actions
import { Snowflake, Gauge, Plus, RefreshCw, Trash2 } from "lucide-react";

/**
 * QuickActions Component
 * Displays 5 quick action buttons for card management
 * Each button has an icon and label positioned in a circular design
 */
const QuickActions = () => {
  // Configuration array for 5 quick action buttons
  // Each action has: icon component, display label, background color, and special flags
  const actions = [
    { icon: Snowflake, label: "Freeze card", color: "bg-action-blue" }, // Freeze card temporarily
    { icon: Gauge, label: "Set spend limit", color: "bg-action-blue" }, // Set spending limits
    { icon: null, label: "Add to GPay", color: "bg-white text-gray-700", isGoogle: true }, // Add to Google Pay
    { icon: RefreshCw, label: "Replace card", color: "bg-action-blue" }, // Request card replacement
    { icon: Trash2, label: "Cancel card", color: "bg-action-blue" }, // Cancel card permanently
  ];

  return (
    // Container for all 5 action buttons with even spacing
    // Uses justify-evenly to distribute buttons evenly across available width
    // Gap and padding ensure buttons don't overflow container boundaries
    <div className="flex justify-evenly gap-1 py-4 px-1">
      {/* Map through actions array to render each button */}
      {actions.map((action, index) => (
        <button
          key={index}
          // Each button is a flex column container with centered content
          // flex-shrink-0 prevents buttons from shrinking below their minimum size
          // group class enables hover effects on child elements
          className="flex flex-col items-center gap-2 group flex-shrink-0"
          // Max width of 65px ensures all 5 buttons fit within 390px container width
          style={{ maxWidth: '65px' }}
        >
          {/* Circular icon container with background color and shadow */}
          <div
            className={`${action.color} ${
              action.isGoogle ? "border border-gray-300" : "" // Google Pay button gets a border
            } w-12 h-12 rounded-full flex items-center justify-center shadow-md group-hover:scale-110 transition-transform`}
          >
            {/* Conditionally render Google logo SVG or Lucide icon */}
            {action.isGoogle ? (
              // Google "G" logo as inline SVG with proper colors
              <svg viewBox="0 0 24 24" className="w-6 h-6">
                {/* Blue section of Google "G" */}
                <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
                {/* Green section of Google "G" */}
                <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
                {/* Yellow section of Google "G" */}
                <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
                {/* Red section of Google "G" */}
                <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
              </svg>
            ) : (
              // Render Lucide icon for non-Google actions (Freeze, Limit, Replace, Cancel)
              action.icon && <action.icon className="w-5 h-5 text-white" />
            )}
          </div>
          {/* Action label text below the icon */}
          {/* Uses action-blue color, small text size, centered alignment */}
          {/* leading-tight and break-words ensure text wraps properly within max-width */}
          <span className="text-xs text-action-blue text-center leading-tight break-words w-full">
            {action.label}
          </span>
        </button>
      ))}
    </div>
  );
};

export default QuickActions;