// Import icons from lucide-react for menu item visual representation
import { CreditCard, Receipt, Gift, ChevronRight } from "lucide-react";

/**
 * MenuItems Component
 * Displays 3 navigational menu items with icons and chevron indicators
 * Each item is clickable and leads to different card management sections
 */
const MenuItems = () => {
  // Configuration for 3 menu items with their icons, labels, and colors
  const items = [
    { icon: CreditCard, label: "Card details", color: "text-action-blue" }, // View full card information
    { icon: Receipt, label: "Recent transactions", color: "text-action-blue" }, // View transaction history
    { icon: Gift, label: "Cardholder benefits", color: "text-action-blue" }, // View rewards and benefits
  ];

  return (
    // Container with vertical spacing between items
    <div className="space-y-2">
      {/* Map through items array to render each menu button */}
      {items.map((item, index) => (
        <button
          key={index}
          // Full-width button with flex layout for icon-label-chevron arrangement
          // Subtle background with hover effect and border
          // group class enables coordinated hover animations on child elements
          className="w-full flex items-center justify-between p-4 bg-muted/30 hover:bg-muted/50 rounded-xl transition-colors group border border-border/50"
        >
          {/* Left side: Icon and label in a horizontal flex container */}
          <div className="flex items-center gap-3">
            {/* Render the Lucide icon with action-blue color */}
            <item.icon className={`w-5 h-5 ${item.color}`} />
            {/* Menu item label text */}
            <span className={`${item.color} font-medium`}>{item.label}</span>
          </div>
          {/* Right side: Chevron right arrow indicator */}
          {/* Translates to the right on hover for interactive feedback */}
          <ChevronRight className="w-5 h-5 text-muted-foreground group-hover:translate-x-1 transition-transform" />
        </button>
      ))}
    </div>
  );
};

export default MenuItems;