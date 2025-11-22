// Import clsx for conditional className merging
import { clsx, type ClassValue } from "clsx";
// Import twMerge for intelligent Tailwind class merging
import { twMerge } from "tailwind-merge";

/**
 * cn - ClassName utility function
 * Combines clsx and tailwind-merge for optimal className handling
 * 
 * @param inputs - Variable number of className values (strings, objects, arrays)
 * @returns Merged className string with resolved Tailwind conflicts
 * 
 * Example usage:
 * cn("px-2 py-1", condition && "bg-blue-500", { "text-white": isActive })
 */
export function cn(...inputs: ClassValue[]) {
  // First clsx combines and conditionally includes classes
  // Then twMerge intelligently resolves Tailwind class conflicts
  return twMerge(clsx(inputs));
}
