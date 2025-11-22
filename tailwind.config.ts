// Import TypeScript type for Tailwind configuration
import type { Config } from "tailwindcss";

/**
 * Tailwind CSS Configuration
 * Defines the design system tokens, theme extensions, and plugins
 * All colors use HSL format for better manipulation and theming
 */
export default {
  // Enable dark mode using class-based toggling
  darkMode: ["class"],
  // Content paths where Tailwind should look for class names
  content: ["./pages/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}", "./app/**/*.{ts,tsx}", "./src/**/*.{ts,tsx}"],
  // No prefix for utility classes
  prefix: "",
  theme: {
    // Container configuration for max-width layouts
    container: {
      center: true, // Center containers by default
      padding: "2rem", // Default horizontal padding
      screens: {
        "2xl": "1400px", // Maximum container width
      },
    },
    extend: {
      // Extended color palette using CSS variables from index.css
      // All colors reference HSL values for consistent theming
      colors: {
        // Border and input colors
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))", // Focus ring color
        // Background colors
        background: "hsl(var(--background))", // Main background
        foreground: "hsl(var(--foreground))", // Main text color
        // Primary brand colors
        primary: {
          DEFAULT: "hsl(var(--primary))", // Primary brand color
          foreground: "hsl(var(--primary-foreground))", // Text on primary
        },
        // Secondary UI colors
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        // Destructive/error colors
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        // Muted/subdued colors
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        // Accent colors for highlights
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        // Popover/dropdown colors
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        // Card component colors
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
        // Sidebar component colors
        sidebar: {
          DEFAULT: "hsl(var(--sidebar-background))",
          foreground: "hsl(var(--sidebar-foreground))",
          primary: "hsl(var(--sidebar-primary))",
          "primary-foreground": "hsl(var(--sidebar-primary-foreground))",
          accent: "hsl(var(--sidebar-accent))",
          "accent-foreground": "hsl(var(--sidebar-accent-foreground))",
          border: "hsl(var(--sidebar-border))",
          ring: "hsl(var(--sidebar-ring))",
        },
        // Custom credit card app colors
        navy: {
          dark: "hsl(var(--navy-dark))", // Dark navy for backgrounds
          medium: "hsl(var(--navy-medium))", // Medium navy for gradients
        },
        "card-blue": "hsl(var(--card-blue))", // Credit card background
        "action-blue": "hsl(var(--action-blue))", // Interactive elements
        "light-gray": "hsl(var(--light-gray))", // Light backgrounds
      },
      // Border radius tokens
      borderRadius: {
        lg: "var(--radius)", // Large radius
        md: "calc(var(--radius) - 2px)", // Medium radius
        sm: "calc(var(--radius) - 4px)", // Small radius
      },
      // Keyframe animations for components
      keyframes: {
        // Accordion expand animation
        "accordion-down": {
          from: {
            height: "0",
          },
          to: {
            height: "var(--radix-accordion-content-height)",
          },
        },
        // Accordion collapse animation
        "accordion-up": {
          from: {
            height: "var(--radix-accordion-content-height)",
          },
          to: {
            height: "0",
          },
        },
      },
      // Animation utilities
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
    },
  },
  // Plugins for additional utilities
  plugins: [require("tailwindcss-animate")], // Adds animation utilities
} satisfies Config;
