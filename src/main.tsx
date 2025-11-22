// Import createRoot API from React 18 for root-level rendering
import { createRoot } from "react-dom/client";
// Import main App component
import App from "./App.tsx";
// Import global CSS styles including Tailwind directives and design tokens
import "./index.css";

// Create React root from the HTML element with id "root"
// Non-null assertion (!) used because we know #root exists in index.html
// Render the App component into the root element, initiating the React app
createRoot(document.getElementById("root")!).render(<App />);
