// Import NavLink from react-router-dom for routing functionality
import { NavLink as RouterNavLink, NavLinkProps } from "react-router-dom";
// Import forwardRef for proper ref forwarding to child components
import { forwardRef } from "react";
// Import utility function for merging CSS class names
import { cn } from "@/lib/utils";

/**
 * NavLinkCompatProps Interface
 * Extends react-router-dom's NavLinkProps but replaces className handling
 * Allows for separate active and pending state class names
 */
interface NavLinkCompatProps extends Omit<NavLinkProps, "className"> {
  className?: string; // Base className applied to all states
  activeClassName?: string; // Additional className when link is active
  pendingClassName?: string; // Additional className when navigation is pending
}

/**
 * NavLink Component
 * Enhanced wrapper around react-router-dom's NavLink
 * Provides separate className props for active and pending states
 * Uses forwardRef to properly pass refs to the underlying DOM element
 */
const NavLink = forwardRef<HTMLAnchorElement, NavLinkCompatProps>(
  ({ className, activeClassName, pendingClassName, to, ...props }, ref) => {
    return (
      <RouterNavLink
        ref={ref} // Forward ref to underlying anchor element
        to={to} // Navigation destination path
        // Dynamic className based on navigation state
        // Merges base className with active/pending classes using cn utility
        className={({ isActive, isPending }) =>
          cn(className, isActive && activeClassName, isPending && pendingClassName)
        }
        {...props} // Spread remaining props to RouterNavLink
      />
    );
  },
);

// Set display name for React DevTools debugging
NavLink.displayName = "NavLink";

// Export the enhanced NavLink component
export { NavLink };
